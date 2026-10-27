import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Question, SectionId } from '../content/types'
import { allQuestions, sectionById, sectionIds, questionById } from '../content'
import { QuizRunner } from '../components/QuizRunner'
import { useAppState } from '../lib/store'
import { buildSet } from '../lib/quiz'
import { topicStats } from '../lib/scoring'

type SectionChoice = SectionId | 'mixed'
const COUNTS = [8, 12, 15, 20, 25, 30, 36, 40, 45, 50]

export function PracticePage() {
  const [params] = useSearchParams()
  const { attempts, flagged } = useAppState()

  const initialSection = (params.get('section') as SectionChoice | null) ?? 'english'
  const [section, setSection] = useState<SectionChoice>(sectionIds.includes(initialSection as SectionId) || initialSection === 'mixed' ? initialSection : 'english')
  const [count, setCount] = useState<number>(Number(params.get('count')) || 15)
  const [timed, setTimed] = useState<boolean>(params.get('timed') === '1')
  const [topics, setTopics] = useState<string[]>(() => (params.get('topics') ? params.get('topics')!.split(',') : []))
  const [flaggedOnly, setFlaggedOnly] = useState<boolean>(params.get('flagged') === '1')
  const [running, setRunning] = useState<{ questions: Question[]; timeLimit?: number; key: number } | null>(null)

  const stats = useMemo(() => topicStats(attempts, questionById), [attempts])
  const seenCounts = useMemo(() => {
    const m = new Map<string, number>()
    for (const a of attempts) for (const it of a.items) m.set(it.questionId, (m.get(it.questionId) ?? 0) + 1)
    return m
  }, [attempts])

  const sectionLessons = section === 'mixed' ? [] : sectionById.get(section)!.lessons
  const secPerQ = (s: SectionId) => (sectionById.get(s)!.format.minutes * 60) / sectionById.get(s)!.format.questions

  const timeLimitFor = (qs: Question[]): number => {
    const total = qs.reduce((a, q) => a + secPerQ(q.section), 0)
    return Math.max(60, Math.round(total / 30) * 30)
  }

  const start = () => {
    let qs: Question[]
    if (flaggedOnly) {
      qs = allQuestions.filter((q) => flagged.includes(q.id) && (section === 'mixed' || q.section === section))
    } else {
      qs = buildSet(allQuestions, {
        section,
        count,
        topics: topics.length ? topics : undefined,
        seenCounts,
        wholePassages: section === 'reading' || section === 'science' || (section === 'english' && count >= 25),
      })
    }
    setRunning({ questions: qs, timeLimit: timed ? timeLimitFor(qs) : undefined, key: Date.now() })
  }

  if (running) {
    const isFull = section !== 'mixed' && running.questions.length >= sectionById.get(section)!.format.questions
    return (
      <div className="stack">
        <div className="row between">
          <h1 style={{ margin: 0 }}>{section === 'mixed' ? 'Mixed practice' : `${sectionById.get(section)!.name} practice`}</h1>
          <button className="btn btn-sm" onClick={() => setRunning(null)}>
            Quit set
          </button>
        </div>
        <QuizRunner
          key={running.key}
          title={`${isFull ? 'Full section' : timed ? 'Timed set' : 'Practice set'} · ${running.questions.length} q`}
          questions={running.questions}
          mode={timed ? 'timed-section' : 'practice'}
          section={section}
          timeLimitSec={running.timeLimit}
          feedback={timed ? 'end' : 'instant'}
          exitTo="/practice"
          exitLabel="New practice set"
        />
      </div>
    )
  }

  const toggleTopic = (id: string) => setTopics((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  const weakest = [...stats.values()].filter((s) => section === 'mixed' || questionById.get(allQuestions.find((q) => q.topic === s.topic)!.id)!.section === section).sort((a, b) => a.mastery - b.mastery).slice(0, 3)
  const previewLimit = timed
    ? section === 'mixed'
      ? Math.round((count * 60) / 60)
      : Math.round((count * secPerQ(section)) / 60)
    : null

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Practice</h1>
        <p>
          Build a set. Untimed sets explain each answer as you go. Timed sets use real ACT pacing and grade at the end,
          which is how you should practice from week 2 on.
        </p>
      </div>

      <div className="card stack">
        <div>
          <div className="eyebrow">Section</div>
          <div className="radio-row">
            {[...sectionIds, 'mixed' as const].map((s) => (
              <label key={s} className={section === s ? 'on' : ''}>
                <input
                  type="radio"
                  name="section"
                  checked={section === s}
                  onChange={() => {
                    setSection(s)
                    setTopics([])
                  }}
                />
                {s === 'mixed' ? 'Mixed' : sectionById.get(s)!.name}
              </label>
            ))}
          </div>
        </div>

        {sectionLessons.length > 0 ? (
          <div>
            <div className="eyebrow">Topics (leave empty for all)</div>
            <div className="radio-row">
              {sectionLessons.map((l) => {
                const st = stats.get(l.id)
                return (
                  <label key={l.id} className={topics.includes(l.id) ? 'on' : ''}>
                    <input type="checkbox" checked={topics.includes(l.id)} onChange={() => toggleTopic(l.id)} />
                    {l.title}
                    {st ? <span className="muted small"> {st.mastery}%</span> : null}
                  </label>
                )
              })}
            </div>
            {weakest.length > 0 ? (
              <button className="btn btn-sm" style={{ marginTop: 10 }} onClick={() => setTopics(weakest.map((w) => w.topic))}>
                Select my 3 weakest topics
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="row" style={{ gap: 20 }}>
          <label className="field">
            Number of questions
            <select value={count} onChange={(e) => setCount(Number(e.target.value))} disabled={flaggedOnly}>
              {COUNTS.map((c) => (
                <option key={c} value={c}>
                  {c}
                  {section !== 'mixed' && c === sectionById.get(section)!.format.questions ? ' (full section)' : ''}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            Timing
            <div className="radio-row">
              <label className={!timed ? 'on' : ''}>
                <input type="radio" checked={!timed} onChange={() => setTimed(false)} /> Untimed, instant feedback
              </label>
              <label className={timed ? 'on' : ''}>
                <input type="radio" checked={timed} onChange={() => setTimed(true)} /> Timed{previewLimit ? ` (~${previewLimit} min)` : ''}
              </label>
            </div>
          </label>
        </div>

        <div className="row">
          <label className="row small" style={{ gap: 8 }}>
            <input type="checkbox" checked={flaggedOnly} onChange={(e) => setFlaggedOnly(e.target.checked)} />
            Only my flagged questions ({flagged.filter((id) => section === 'mixed' || questionById.get(id)?.section === section).length})
          </label>
        </div>

        <div>
          <button className="btn btn-primary btn-lg" onClick={start}>
            Start set
          </button>
        </div>
      </div>
    </div>
  )
}
