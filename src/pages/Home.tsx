import { Link } from 'react-router-dom'
import { sectionIds, sectionMeta, sectionById, questionById } from '../content'
import { allTasks, studyPlan } from '../content/plan'
import { useAppState } from '../lib/store'
import { compositeEstimate, sectionSummary } from '../lib/scoring'

export function Home() {
  const { profile, attempts, completedTasks, readLessons } = useAppState()
  const summaries = sectionIds.map((s) => sectionSummary(s, attempts, questionById))
  const composite = compositeEstimate(summaries)
  const hasDiagnostic = attempts.some((a) => a.mode === 'diagnostic')
  const nextTasks = allTasks.filter((t) => !completedTasks.includes(t.id)).slice(0, 4)
  const doneCount = allTasks.filter((t) => completedTasks.includes(t.id)).length
  const currentWeek = studyPlan.find((w) => w.tasks.some((t) => !completedTasks.includes(t.id)))
  const daysLeft = profile.testDate ? Math.ceil((new Date(profile.testDate + 'T00:00:00').getTime() - Date.now()) / 86400000) : null

  return (
    <div className="stack">
      <div className="hero">
        <div className="eyebrow">Enhanced ACT · English, Math, Reading, optional Science</div>
        <h1>Hey {profile.name || 'there'}. Let's get you a score you're proud of.</h1>
        <p className="muted" style={{ maxWidth: '62ch' }}>
          Eight weeks, four sections, one plan. Lessons teach the rules the test actually uses, practice sets grade you
          instantly, and the Progress page tells you what to fix next.
        </p>
        <div className="row" style={{ marginTop: 16 }}>
          {!hasDiagnostic ? (
            <Link to="/diagnostic" className="btn btn-primary btn-lg">
              Start with the diagnostic
            </Link>
          ) : (
            <Link to="/practice" className="btn btn-primary btn-lg">
              Practice now
            </Link>
          )}
          <Link to="/plan" className="btn btn-lg">
            Open the 8-week plan
          </Link>
          {daysLeft !== null ? (
            <span className={`pill ${daysLeft <= 14 ? 'pill-warning' : ''}`} style={{ fontSize: '0.9rem' }}>
              {daysLeft > 0 ? `${daysLeft} days until test day` : daysLeft === 0 ? 'Test day is today' : 'Test date has passed'}
            </span>
          ) : (
            <Link to="/settings" className="small">
              Set your test date
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-4">
        {sectionIds.map((id) => {
          const sec = sectionById.get(id)!
          const sum = summaries.find((s) => s.section === id)!
          const read = sec.lessons.filter((l) => readLessons.includes(l.id)).length
          return (
            <Link key={id} to={`/section/${id}`} className={`card section-tile sec-${id}`}>
              <div className="row between">
                <h3 style={{ margin: 0 }}>
                  {sectionMeta[id].emoji} {sec.name}
                </h3>
                {sec.format.optional ? <span className="pill">optional</span> : null}
              </div>
              <p className="muted small" style={{ margin: '6px 0 12px' }}>
                {sectionMeta[id].blurb}
              </p>
              <div className="row between small">
                <span>
                  {read}/{sec.lessons.length} lessons
                </span>
                <span className="muted">{sum.attempted > 0 ? `${sum.percent}% correct` : 'no practice yet'}</span>
              </div>
              <div className="bar" style={{ marginTop: 6 }}>
                <span style={{ width: `${(read / sec.lessons.length) * 100}%` }} />
              </div>
              {sum.estimate !== null ? (
                <div className="small muted" style={{ marginTop: 8 }}>
                  Estimated score: <strong>{sum.estimate}</strong>
                </div>
              ) : null}
            </Link>
          )
        })}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="eyebrow">Up next · Week {currentWeek?.week ?? 8}: {currentWeek?.title ?? 'Done'}</div>
          {nextTasks.length === 0 ? (
            <p>You have finished the whole plan. Keep taking timed sets until test day.</p>
          ) : (
            <div className="stack" style={{ gap: 8 }}>
              {nextTasks.map((t) => (
                <div key={t.id} className="row between">
                  {t.to ? <Link to={t.to}>{t.label}</Link> : <span>{t.label}</span>}
                  <span className="pill">{t.minutes} min</span>
                </div>
              ))}
            </div>
          )}
          <div className="row between small muted" style={{ marginTop: 14 }}>
            <span>
              Plan progress: {doneCount}/{allTasks.length} tasks
            </span>
            <Link to="/plan">See all</Link>
          </div>
          <div className="bar" style={{ marginTop: 6 }}>
            <span style={{ width: `${(doneCount / allTasks.length) * 100}%` }} />
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">Score snapshot</div>
          <div className="row" style={{ gap: 24 }}>
            <div className="stat">
              <div className="stat-value">{composite ?? '–'}</div>
              <div className="stat-label">estimated composite</div>
            </div>
            {summaries.map((s) => (
              <div className="stat" key={s.section}>
                <div className="stat-value" style={{ fontSize: '1.3rem' }}>
                  {s.estimate ?? '–'}
                </div>
                <div className="stat-label">{sectionById.get(s.section)!.name}</div>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 12, marginBottom: 0 }}>
            {composite === null
              ? 'Take the diagnostic or at least 10 questions in each section to see estimates. Composite = average of English, Math and Reading.'
              : profile.targetScore
                ? composite >= profile.targetScore
                  ? `You are at or above your ${profile.targetScore} target in practice. Keep the timing honest.`
                  : `Target: ${profile.targetScore}. Gap: ${profile.targetScore - composite} points. Most points come from the weakest section.`
                : 'Set a target score in Settings to track the gap.'}
          </p>
        </div>
      </div>

      <div className="card">
        <h3>How to use this course</h3>
        <ol style={{ paddingLeft: '1.3em', marginBottom: 0 }}>
          <li>Take the diagnostic once to see your starting point and weakest topics.</li>
          <li>Follow the weekly plan: read a lesson, then do its "check your understanding" questions right away.</li>
          <li>Do timed sets by week 2. The ACT is as much a pacing test as a knowledge test.</li>
          <li>After every set, read the explanation for each miss and decide: careless, timing, or did not know the rule?</li>
          <li>Use the Progress page every week to pick what to drill next. Flag tricky questions and redo them later.</li>
        </ol>
      </div>
    </div>
  )
}
