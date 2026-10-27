import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { Lesson, SectionContent } from '../content/types'
import { getSection, questionsForLesson, questionById } from '../content'
import { LessonBlocks } from '../components/LessonBlocks'
import { QuizRunner } from '../components/QuizRunner'
import { actions, useAppState } from '../lib/store'
import { topicStats, masteryLabel } from '../lib/scoring'
import { groupByPassage, shuffle } from '../lib/quiz'

export function LessonPage() {
  const { sectionId, lessonId } = useParams()
  const section = getSection(sectionId)
  const lesson = section?.lessons.find((l) => l.id === lessonId)
  if (!section || !lesson) return <Navigate to={section ? `/section/${section.id}` : '/'} replace />
  // Keyed by lesson id so quiz state resets when navigating between lessons.
  return <LessonView key={lesson.id} section={section} lesson={lesson} />
}

function LessonView({ section, lesson }: { section: SectionContent; lesson: Lesson }) {
  const { attempts } = useAppState()
  const [checkKey, setCheckKey] = useState(0)
  const [showCheck, setShowCheck] = useState(false)

  useEffect(() => {
    actions.markLessonRead(lesson.id)
  }, [lesson.id])

  const idx = section.lessons.findIndex((l) => l.id === lesson.id)
  const prev = section.lessons[idx - 1]
  const next = section.lessons[idx + 1]
  const pool = questionsForLesson(lesson.id)
  const standalone = pool.filter((q) => !q.passageId)
  const checkQuestions = groupByPassage(shuffle(standalone.length >= 5 ? standalone : pool).slice(0, 8))
  const st = topicStats(attempts, questionById).get(lesson.id)

  return (
    <div className={`stack sec-${section.id}`}>
      <div className="card">
        <div className="accent-bar" />
        <div className="row between">
          <div>
            <div className="eyebrow">
              <Link to={`/section/${section.id}`}>{section.name}</Link> · Lesson {idx + 1} of {section.lessons.length}
            </div>
            <h1 style={{ marginBottom: 4 }}>{lesson.title}</h1>
            <p className="muted" style={{ marginBottom: 0 }}>
              {lesson.summary} · {lesson.minutes} min read
            </p>
          </div>
          {st ? (
            <div className="stat" style={{ textAlign: 'right' }}>
              <div className="stat-value">{st.mastery}%</div>
              <div className="stat-label">{masteryLabel(st.mastery).label} · {st.attempted} answered</div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="card">
        <LessonBlocks blocks={lesson.blocks} />
      </div>

      <div className="card" id="check">
        <h2>Check your understanding</h2>
        {!showCheck ? (
          <>
            <p className="muted">
              {checkQuestions.length} questions on this lesson, untimed, with an explanation after each answer. Do this right after
              reading. It is the single best way to make the rule stick.
            </p>
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setCheckKey((k) => k + 1)
                  setShowCheck(true)
                }}
              >
                Start the check
              </button>
              <Link className="btn" to={`/practice?section=${section.id}&topics=${lesson.id}&count=10&timed=1`}>
                Timed drill on this topic
              </Link>
            </div>
          </>
        ) : (
          <QuizRunner
            key={checkKey}
            title={`Check: ${lesson.title}`}
            questions={checkQuestions}
            mode="lesson-check"
            section={section.id}
            topic={lesson.id}
            feedback="instant"
            exitTo={next ? `/section/${section.id}/lesson/${next.id}` : `/section/${section.id}`}
            exitLabel={next ? `Next lesson: ${next.title}` : `Back to ${section.name}`}
          />
        )}
      </div>

      <div className="row between">
        {prev ? (
          <Link className="btn" to={`/section/${section.id}/lesson/${prev.id}`}>
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="btn" to={`/section/${section.id}/lesson/${next.id}`}>
            {next.title} →
          </Link>
        ) : (
          <Link className="btn" to={`/section/${section.id}`}>
            Back to {section.name} →
          </Link>
        )}
      </div>
    </div>
  )
}
