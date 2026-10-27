import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Question, SectionId } from '../content/types'
import { lessonById, passageById } from '../content'
import { actions, newId, useAppState, type Attempt, type AttemptMode } from '../lib/store'
import { estimateScaleScore, percent } from '../lib/scoring'
import { LETTERS, formatTime } from '../lib/quiz'
import { renderInline } from './RichText'
import { PassageView } from './PassageView'

export interface QuizRunnerProps {
  title: string
  questions: Question[]
  mode: AttemptMode
  section: SectionId | 'mixed'
  topic?: string
  /** Seconds. Omit for untimed. */
  timeLimitSec?: number
  /** 'instant' reveals the answer after each choice; 'end' grades at submit. */
  feedback: 'instant' | 'end'
  onFinish?: (attempt: Attempt) => void
  /** Where the "Done" button goes after review. */
  exitTo: string
  exitLabel?: string
}

export function QuizRunner(props: QuizRunnerProps) {
  const { questions, timeLimitSec, feedback } = props
  const { flagged } = useAppState()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [revealed, setRevealed] = useState<boolean[]>(() => questions.map(() => false))
  const [elapsed, setElapsed] = useState(0)
  const [attempt, setAttempt] = useState<Attempt | null>(null)
  const [confirming, setConfirming] = useState(false)
  const startedAt = useRef(Date.now())
  const finishedRef = useRef(false)

  const q = questions[index]
  const passage = q?.passageId ? passageById.get(q.passageId) : undefined
  const remaining = timeLimitSec !== undefined ? timeLimitSec - elapsed : null
  const answeredCount = answers.filter((a) => a !== null).length

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    const now = Date.now()
    const items = questions.map((qq, i) => ({
      questionId: qq.id,
      chosen: answers[i],
      correct: answers[i] === qq.answer,
    }))
    const at: Attempt = {
      id: newId('att'),
      mode: props.mode,
      section: props.section,
      topic: props.topic,
      timed: timeLimitSec !== undefined,
      timeLimitSec,
      timeUsedSec: Math.round((now - startedAt.current) / 1000),
      startedAt: startedAt.current,
      finishedAt: now,
      items,
    }
    actions.recordAttempt(at)
    setAttempt(at)
    props.onFinish?.(at)
  }, [answers, questions, props, timeLimitSec])

  // Clock
  useEffect(() => {
    if (attempt) return
    const t = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 500)
    return () => window.clearInterval(t)
  }, [attempt])

  // Auto-submit when time is up
  useEffect(() => {
    if (remaining !== null && remaining <= 0 && !attempt) finish()
  }, [remaining, attempt, finish])

  const choose = (choice: number) => {
    if (attempt) return
    if (feedback === 'instant' && revealed[index]) return
    setAnswers((prev) => prev.map((a, i) => (i === index ? choice : a)))
    if (feedback === 'instant') setRevealed((prev) => prev.map((r, i) => (i === index ? true : r)))
  }

  const go = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(questions.length - 1, i)))
    setConfirming(false)
  }, [questions.length])

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (attempt) return
      const target = e.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return
      const k = e.key.toUpperCase()
      const li = LETTERS.indexOf(k as (typeof LETTERS)[number])
      if (li >= 0) choose(li)
      else if (['1', '2', '3', '4'].includes(k)) choose(Number(k) - 1)
      else if (e.key === 'ArrowRight') go(index + 1)
      else if (e.key === 'ArrowLeft') go(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (attempt) return <Review {...props} attempt={attempt} />
  if (!q) return <div className="card">No questions available for this set.</div>

  const isRevealed = feedback === 'instant' && revealed[index]
  const isLast = index === questions.length - 1

  return (
    <div className={`quiz sec-${props.section}${passage ? ' with-passage' : ''}`}>
      {passage ? (
        <div className="card passage-pane">
          <PassageView passage={passage} currentUnderline={q.underlineNumber} />
        </div>
      ) : null}

      <div className="card">
        <div className="row between" style={{ marginBottom: 12 }}>
          <span className="pill pill-accent">
            Question {index + 1} of {questions.length}
          </span>
          <span className="row" style={{ gap: 8 }}>
            <span className="pill">{lessonById.get(q.topic)?.title ?? q.topic}</span>
            <button
              className={`btn btn-sm${flagged.includes(q.id) ? ' btn-primary' : ''}`}
              onClick={() => actions.toggleFlag(q.id)}
              title="Flag this question to revisit later"
            >
              {flagged.includes(q.id) ? '⚑ Flagged' : '⚐ Flag'}
            </button>
          </span>
        </div>

        {q.underlineNumber ? (
          <p className="muted small">Refers to underlined portion {q.underlineNumber} in the passage.</p>
        ) : null}
        <div className="stem">{renderInline(q.stem)}</div>

        <div className="choices" role="radiogroup" aria-label="Answer choices">
          {q.choices.map((c, ci) => {
            const selected = answers[index] === ci
            let cls = 'choice'
            if (isRevealed) {
              if (ci === q.answer) cls += ' correct'
              else if (selected) cls += ' incorrect'
              else cls += ' dim'
            } else if (selected) cls += ' selected'
            return (
              <button key={ci} className={cls} onClick={() => choose(ci)} role="radio" aria-checked={selected}>
                <span className="choice-letter">{LETTERS[ci]}</span>
                <span>{renderInline(c)}</span>
              </button>
            )
          })}
        </div>

        {isRevealed ? (
          <div className={`explanation ${answers[index] === q.answer ? 'ok' : 'bad'}`}>
            <strong>{answers[index] === q.answer ? 'Correct.' : `Not quite. The answer is ${LETTERS[q.answer]}.`}</strong>{' '}
            {renderInline(q.explanation)}
          </div>
        ) : null}

        <div className="quiz-actions">
          <button className="btn" onClick={() => go(index - 1)} disabled={index === 0}>
            ← Back
          </button>
          {!isLast ? (
            <button className="btn btn-primary" onClick={() => go(index + 1)}>
              Next →
            </button>
          ) : null}
          {isLast || feedback === 'end' ? (
            confirming ? (
              <span className="row">
                <span className="small muted">
                  {answeredCount < questions.length ? `${questions.length - answeredCount} unanswered. ` : ''}Submit now?
                </span>
                <button className="btn btn-primary" onClick={finish}>
                  Yes, submit
                </button>
                <button className="btn" onClick={() => setConfirming(false)}>
                  Not yet
                </button>
              </span>
            ) : (
              <button className={`btn${isLast ? ' btn-primary' : ''}`} onClick={() => setConfirming(true)}>
                {feedback === 'instant' ? 'Finish' : 'Submit answers'}
              </button>
            )
          ) : null}
        </div>
        <p className="muted small" style={{ marginTop: 14, marginBottom: 0 }}>
          Keyboard: <span className="kbd">A</span>–<span className="kbd">D</span> to answer, <span className="kbd">←</span>{' '}
          <span className="kbd">→</span> to move.
        </p>
      </div>

      <div className="card quiz-side">
        <div className="eyebrow">{props.title}</div>
        {remaining !== null ? (
          <div className={`timer${remaining <= 120 ? ' low' : ''}`} aria-live="polite">
            {formatTime(remaining)}
          </div>
        ) : (
          <div className="timer muted">{formatTime(elapsed)}</div>
        )}
        <div className="small muted" style={{ marginBottom: 12 }}>
          {remaining !== null ? 'remaining' : 'elapsed (untimed)'} · {answeredCount}/{questions.length} answered
        </div>
        <div className="qnav" aria-label="Question navigator">
          {questions.map((qq, i) => {
            let cls = ''
            if (feedback === 'instant' && revealed[i]) cls = answers[i] === qq.answer ? 'right' : 'wrong'
            else if (answers[i] !== null) cls = 'answered'
            if (flagged.includes(qq.id)) cls += ' flagged'
            if (i === index) cls += ' current'
            return (
              <button key={qq.id} className={cls.trim()} onClick={() => go(i)} aria-label={`Go to question ${i + 1}`}>
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ---------------- Review ---------------- */

export function Review(props: QuizRunnerProps & { attempt: Attempt }) {
  const { attempt, questions } = props
  const correct = attempt.items.filter((i) => i.correct).length
  const pct = percent(correct, questions.length)
  const showEstimate = props.section !== 'mixed' && questions.length >= 10 && props.mode !== 'lesson-check'
  const [filter, setFilter] = useState<'all' | 'wrong'>(correct === questions.length ? 'all' : 'wrong')

  const byTopic = useMemo(() => {
    const m = new Map<string, { total: number; correct: number }>()
    questions.forEach((q, i) => {
      const t = m.get(q.topic) ?? { total: 0, correct: 0 }
      t.total++
      if (attempt.items[i]?.correct) t.correct++
      m.set(q.topic, t)
    })
    return [...m.entries()].sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
  }, [questions, attempt])

  const weakest = byTopic.filter(([, v]) => v.correct < v.total).slice(0, 3)

  return (
    <div className={`stack sec-${props.section}`}>
      <div className="card">
        <div className="accent-bar" />
        <div className="row between">
          <div>
            <div className="eyebrow">{props.title}</div>
            <h2 style={{ marginBottom: 4 }}>
              {correct} / {questions.length} correct ({pct}%)
            </h2>
            <div className="muted small">
              {attempt.timed ? `Time used ${formatTime(attempt.timeUsedSec)} of ${formatTime(attempt.timeLimitSec ?? 0)}` : `Time: ${formatTime(attempt.timeUsedSec)}`}
              {attempt.items.some((i) => i.chosen === null) ? ` · ${attempt.items.filter((i) => i.chosen === null).length} left blank` : ''}
            </div>
          </div>
          {showEstimate ? (
            <div className="stat" style={{ textAlign: 'right' }}>
              <div className="stat-value">{estimateScaleScore(pct)}</div>
              <div className="stat-label">estimated section score (1–36)</div>
            </div>
          ) : null}
        </div>
        <div className="bar" style={{ marginTop: 14 }}>
          <span style={{ width: `${pct}%` }} />
        </div>
        <p style={{ marginTop: 14, marginBottom: 0 }}>{encouragement(pct)}</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>By topic</h3>
          <div className="stack" style={{ gap: 10 }}>
            {byTopic.map(([topic, v]) => {
              const lesson = lessonById.get(topic)
              const p = percent(v.correct, v.total)
              return (
                <div key={topic}>
                  <div className="row between small">
                    <span>
                      {lesson ? <Link to={`/section/${lesson.section}/lesson/${lesson.id}`}>{lesson.title}</Link> : topic}
                    </span>
                    <span className="muted">
                      {v.correct}/{v.total}
                    </span>
                  </div>
                  <div className="bar">
                    <span style={{ width: `${p}%`, background: p >= 80 ? 'var(--success)' : p >= 50 ? 'var(--warning)' : 'var(--danger)' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="card">
          <h3>What to do next</h3>
          {weakest.length === 0 ? (
            <p>Perfect set. Raise the difficulty: try a timed set or move to the next lesson.</p>
          ) : (
            <ul style={{ paddingLeft: '1.2em' }}>
              {weakest.map(([topic]) => {
                const lesson = lessonById.get(topic)
                return lesson ? (
                  <li key={topic}>
                    Re-read <Link to={`/section/${lesson.section}/lesson/${lesson.id}`}>{lesson.title}</Link>, then{' '}
                    <Link to={`/practice?section=${lesson.section}&topics=${lesson.id}&count=8`}>drill 8 more questions</Link>.
                  </li>
                ) : null
              })}
            </ul>
          )}
          <div className="row" style={{ marginTop: 12 }}>
            <Link className="btn btn-primary" to={props.exitTo}>
              {props.exitLabel ?? 'Done'}
            </Link>
            <Link className="btn" to="/progress">
              View progress
            </Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="row between" style={{ marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Answer review</h3>
          <div className="radio-row">
            <label className={filter === 'wrong' ? 'on' : ''}>
              <input type="radio" checked={filter === 'wrong'} onChange={() => setFilter('wrong')} />
              Missed only
            </label>
            <label className={filter === 'all' ? 'on' : ''}>
              <input type="radio" checked={filter === 'all'} onChange={() => setFilter('all')} />
              All
            </label>
          </div>
        </div>
        <div className="stack" style={{ gap: 12 }}>
          {questions.map((q, i) => {
            const item = attempt.items[i]
            if (filter === 'wrong' && item.correct) return null
            const passage = q.passageId ? passageById.get(q.passageId) : undefined
            return (
              <div key={q.id} className={`review-item ${item.correct ? 'right' : 'wrong'}`}>
                <div className="row between small muted" style={{ marginBottom: 6 }}>
                  <span>
                    Q{i + 1} · {lessonById.get(q.topic)?.title ?? q.topic}
                    {q.underlineNumber ? ` · underlined portion ${q.underlineNumber}` : ''}
                  </span>
                  <span className={`pill ${item.correct ? 'pill-success' : 'pill-danger'}`}>
                    {item.chosen === null ? 'Blank' : item.correct ? 'Correct' : `You chose ${LETTERS[item.chosen]}`}
                  </span>
                </div>
                {passage ? (
                  <details style={{ marginBottom: 8 }}>
                    <summary className="small" style={{ cursor: 'pointer' }}>Show passage</summary>
                    <div style={{ marginTop: 8 }}>
                      <PassageView passage={passage} currentUnderline={q.underlineNumber} />
                    </div>
                  </details>
                ) : null}
                <div style={{ marginBottom: 8 }}>{renderInline(q.stem)}</div>
                <ul style={{ paddingLeft: '1.2em', marginBottom: 8 }}>
                  {q.choices.map((c, ci) => (
                    <li
                      key={ci}
                      style={{
                        fontWeight: ci === q.answer ? 700 : 400,
                        color: ci === q.answer ? 'var(--success)' : item.chosen === ci ? 'var(--danger)' : undefined,
                      }}
                    >
                      {LETTERS[ci]}. {renderInline(c)}
                    </li>
                  ))}
                </ul>
                <div className="small">
                  <strong>Why:</strong> {renderInline(q.explanation)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function encouragement(pct: number): string {
  if (pct === 100) return 'Clean sweep. That is what mastery looks like. Keep the streak going with a harder or timed set.'
  if (pct >= 85) return 'Strong work. Read the explanations for the few you missed; those are the easiest points to win back.'
  if (pct >= 65) return 'Solid base. Every missed question below has the rule you need spelled out, so spend your time there.'
  if (pct >= 45) return 'Good effort. This is exactly what practice is for. Re-read the lesson for the weakest topic and try again tomorrow.'
  return 'Rough set, and that is fine. Everyone starts somewhere. Slow down, read the explanations, and re-read the lesson before the next try.'
}
