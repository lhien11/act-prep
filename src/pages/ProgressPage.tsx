import { Link, Navigate, useParams } from 'react-router-dom'
import { sectionIds, sectionById, questionById, lessonById } from '../content'
import { useAppState } from '../lib/store'
import { compositeEstimate, masteryLabel, percent, sectionSummary, topicStats } from '../lib/scoring'
import { formatTime } from '../lib/quiz'
import { Review } from '../components/QuizRunner'

export function ProgressPage() {
  const { attempts, profile } = useAppState()
  const summaries = sectionIds.map((s) => sectionSummary(s, attempts, questionById))
  const composite = compositeEstimate(summaries)
  const stats = topicStats(attempts, questionById)
  const totalAnswered = attempts.reduce((a, at) => a + at.items.length, 0)
  const weakest = [...stats.values()].filter((s) => s.attempted >= 3).sort((a, b) => a.mastery - b.mastery).slice(0, 5)

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Progress</h1>
        <p>
          Mastery weights your most recent answers more heavily, so it rewards improvement. Score estimates come from your most recent
          timed work in each section and are rough.
        </p>
      </div>

      <div className="grid grid-4">
        <div className="card">
          <div className="stat">
            <div className="stat-value">{composite ?? '–'}</div>
            <div className="stat-label">estimated composite{profile.targetScore ? ` · target ${profile.targetScore}` : ''}</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="stat-value">{totalAnswered}</div>
            <div className="stat-label">questions answered</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="stat-value">{attempts.length}</div>
            <div className="stat-label">sets completed</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="stat-value">{attempts.filter((a) => a.timed).length}</div>
            <div className="stat-label">timed sets</div>
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        {summaries.map((s) => {
          const sec = sectionById.get(s.section)!
          return (
            <div className={`card sec-${s.section}`} key={s.section}>
              <div className="accent-bar" />
              <div className="row between">
                <h3 style={{ margin: 0 }}>{sec.name}</h3>
                <span className="stat-value" style={{ fontSize: '1.5rem' }}>
                  {s.estimate ?? '–'}
                </span>
              </div>
              <div className="small muted" style={{ margin: '4px 0 10px' }}>
                {s.attempted > 0 ? `${s.correct}/${s.attempted} correct overall (${s.percent}%)` : 'No practice yet'}
                {s.lastTimedPercent !== null ? ` · last timed set ${s.lastTimedPercent}%` : ''}
              </div>
              <div className="stack" style={{ gap: 8 }}>
                {sec.lessons.map((l) => {
                  const st = stats.get(l.id)
                  const m = st?.mastery ?? null
                  const lab = m === null ? null : masteryLabel(m)
                  return (
                    <div key={l.id}>
                      <div className="row between small">
                        <Link to={`/section/${sec.id}/lesson/${l.id}`}>{l.title}</Link>
                        <span className="muted">{st ? `${m}% · ${st.attempted} q` : '—'}</span>
                      </div>
                      <div className="bar">
                        <span
                          style={{
                            width: `${m ?? 0}%`,
                            background: lab?.tone === 'success' ? 'var(--success)' : lab?.tone === 'warning' ? 'var(--warning)' : 'var(--danger)',
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {weakest.length > 0 ? (
        <div className="card">
          <h3>Fix these first</h3>
          <div className="stack" style={{ gap: 8 }}>
            {weakest.map((w) => {
              const l = lessonById.get(w.topic)
              if (!l) return null
              return (
                <div className="row between" key={w.topic}>
                  <span>
                    <span className={`pill pill-${masteryLabel(w.mastery).tone}`}>{w.mastery}%</span>{' '}
                    <Link to={`/section/${l.section}/lesson/${l.id}`}>{l.title}</Link>{' '}
                    <span className="muted small">({sectionById.get(l.section)!.name})</span>
                  </span>
                  <Link className="btn btn-sm" to={`/practice?section=${l.section}&topics=${l.id}&count=8`}>
                    Drill 8
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}

      <div className="card">
        <h3>History</h3>
        {attempts.length === 0 ? (
          <p className="muted">Nothing yet. Start with the <Link to="/diagnostic">diagnostic</Link>.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Set</th>
                  <th>Section</th>
                  <th>Score</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[...attempts].reverse().map((a) => {
                  const correct = a.items.filter((i) => i.correct).length
                  return (
                    <tr key={a.id}>
                      <td>{new Date(a.finishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</td>
                      <td>{modeLabel(a.mode)}{a.topic ? `: ${lessonById.get(a.topic)?.title ?? a.topic}` : ''}</td>
                      <td>{a.section === 'mixed' ? 'Mixed' : sectionById.get(a.section)!.name}</td>
                      <td>
                        {correct}/{a.items.length} ({percent(correct, a.items.length)}%)
                      </td>
                      <td>
                        {formatTime(a.timeUsedSec)}
                        {a.timed ? ` / ${formatTime(a.timeLimitSec ?? 0)}` : ''}
                      </td>
                      <td>
                        <Link to={`/progress/attempt/${a.id}`}>Review</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function modeLabel(m: string): string {
  switch (m) {
    case 'lesson-check':
      return 'Lesson check'
    case 'timed-section':
      return 'Timed set'
    case 'diagnostic':
      return 'Diagnostic'
    default:
      return 'Practice'
  }
}

export function AttemptReviewPage() {
  const { attemptId } = useParams()
  const { attempts } = useAppState()
  const attempt = attempts.find((a) => a.id === attemptId)
  if (!attempt) return <Navigate to="/progress" replace />
  const questions = attempt.items.map((i) => questionById.get(i.questionId)).filter((q): q is NonNullable<typeof q> => !!q)
  if (questions.length !== attempt.items.length) return <div className="card">Some questions in this attempt no longer exist.</div>
  return (
    <div className="stack">
      <div className="row between">
        <h1 style={{ margin: 0 }}>Review: {modeLabel(attempt.mode)}</h1>
        <Link className="btn btn-sm" to="/progress">
          ← Back to progress
        </Link>
      </div>
      <Review
        title={`${modeLabel(attempt.mode)} · ${new Date(attempt.finishedAt).toLocaleDateString()}`}
        questions={questions}
        mode={attempt.mode}
        section={attempt.section}
        feedback="end"
        exitTo="/progress"
        exitLabel="Back to progress"
        attempt={attempt}
      />
    </div>
  )
}
