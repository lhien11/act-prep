import { Link, Navigate, useParams } from 'react-router-dom'
import { getSection, questionById, sectionMeta } from '../content'
import { LessonBlocks } from '../components/LessonBlocks'
import { useAppState } from '../lib/store'
import { masteryLabel, sectionSummary, topicStats } from '../lib/scoring'

export function SectionPage() {
  const { sectionId } = useParams()
  const section = getSection(sectionId)
  const { attempts, readLessons } = useAppState()
  if (!section) return <Navigate to="/" replace />
  const stats = topicStats(attempts, questionById)
  const summary = sectionSummary(section.id, attempts, questionById)
  const secPerQ = Math.round((section.format.minutes * 60) / section.format.questions)

  return (
    <div className={`stack sec-${section.id}`}>
      <div className="card">
        <div className="accent-bar" />
        <div className="row between">
          <div>
            <div className="eyebrow">
              {sectionMeta[section.id].emoji} {section.name} {section.format.optional ? '· optional section' : '· counts toward composite'}
            </div>
            <h1 style={{ marginBottom: 4 }}>{section.name}</h1>
            <p className="muted" style={{ marginBottom: 0 }}>
              {section.tagline}
            </p>
          </div>
          <div className="row" style={{ gap: 20 }}>
            <div className="stat">
              <div className="stat-value">{section.format.questions}</div>
              <div className="stat-label">questions</div>
            </div>
            <div className="stat">
              <div className="stat-value">{section.format.minutes}</div>
              <div className="stat-label">minutes</div>
            </div>
            <div className="stat">
              <div className="stat-value">{secPerQ}s</div>
              <div className="stat-label">per question</div>
            </div>
            {summary.estimate !== null ? (
              <div className="stat">
                <div className="stat-value">{summary.estimate}</div>
                <div className="stat-label">est. score</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="row" style={{ marginTop: 16 }}>
          <Link className="btn btn-primary" to={`/practice?section=${section.id}&count=${section.format.questions}&timed=1`}>
            Full timed section
          </Link>
          <Link className="btn" to={`/practice?section=${section.id}&count=12&timed=0`}>
            Quick 12-question set
          </Link>
          <a className="btn" href="#strategy">
            Strategy guide ↓
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Lessons</h2>
        <div className="stack" style={{ gap: 10 }}>
          {section.lessons.map((lesson, i) => {
            const st = stats.get(lesson.id)
            const read = readLessons.includes(lesson.id)
            const label = st ? masteryLabel(st.mastery) : null
            return (
              <Link key={lesson.id} to={`/section/${section.id}/lesson/${lesson.id}`} className="lesson-item">
                <span className={`lesson-num${read ? ' done' : ''}`}>{read ? '✓' : i + 1}</span>
                <span className="lesson-body">
                  <div className="lesson-title">{lesson.title}</div>
                  <div className="lesson-meta">
                    {lesson.summary} · {lesson.minutes} min read
                  </div>
                </span>
                <span className="mastery">
                  <div className="small muted" style={{ textAlign: 'right' }}>
                    {st ? (
                      <span className={`pill pill-${label!.tone === 'muted' ? '' : label!.tone}`}>{st.mastery}% · {label!.label}</span>
                    ) : (
                      <span className="pill">not practiced</span>
                    )}
                  </div>
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="card" id="strategy">
        <h2>Strategy guide</h2>
        <LessonBlocks blocks={section.overview} />
      </div>
    </div>
  )
}
