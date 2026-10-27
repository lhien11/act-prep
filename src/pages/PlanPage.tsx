import { useState } from 'react'
import { Link } from 'react-router-dom'
import { studyPlan } from '../content/plan'
import { actions, useAppState } from '../lib/store'

export function PlanPage() {
  const { completedTasks } = useAppState()
  const firstOpen = studyPlan.find((w) => w.tasks.some((t) => !completedTasks.includes(t.id)))?.week ?? 1
  const [open, setOpen] = useState<Set<number>>(() => new Set([firstOpen]))

  const toggleWeek = (w: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(w)) next.delete(w)
      else next.add(w)
      return next
    })

  return (
    <div className="stack">
      <div className="page-head">
        <h1>The 8-week plan</h1>
        <p>
          About 3 to 4 hours a week. Each week pairs new lessons with practice, and the timing gets stricter as you go.
          Check tasks off as you finish them. If you have fewer than 8 weeks, do weeks 1, 2, 4, 7 and 8 and skim the rest.
        </p>
      </div>
      {studyPlan.map((week) => {
        const done = week.tasks.filter((t) => completedTasks.includes(t.id)).length
        const total = week.tasks.length
        const minutes = week.tasks.reduce((a, t) => a + t.minutes, 0)
        const isOpen = open.has(week.week)
        return (
          <div className="week" key={week.week}>
            <div className="week-head" onClick={() => toggleWeek(week.week)} role="button" aria-expanded={isOpen}>
              <span className={`lesson-num${done === total ? ' done' : ''}`}>{done === total ? '✓' : week.week}</span>
              <div style={{ flex: 1 }}>
                <h3>
                  Week {week.week}: {week.title}
                </h3>
                <div className="small muted">
                  {done}/{total} tasks · about {Math.round(minutes / 60)} h
                </div>
              </div>
              <div className="bar" style={{ width: 120 }}>
                <span style={{ width: `${(done / total) * 100}%`, background: done === total ? 'var(--success)' : undefined }} />
              </div>
              <span className="muted">{isOpen ? '▾' : '▸'}</span>
            </div>
            {isOpen ? (
              <div>
                <p className="muted small" style={{ padding: '12px 18px 4px' }}>
                  {week.focus}
                </p>
                {week.tasks.map((t) => {
                  const isDone = completedTasks.includes(t.id)
                  return (
                    <div key={t.id} className={`task${isDone ? ' done' : ''}`}>
                      <input type="checkbox" checked={isDone} onChange={() => actions.toggleTask(t.id)} aria-label={t.label} />
                      <div className="task-label">
                        {t.to ? <Link to={t.to}>{t.label}</Link> : t.label}
                      </div>
                      <span className="pill">{kindLabel(t.kind)}</span>
                      <span className="small muted" style={{ width: 52, textAlign: 'right' }}>
                        {t.minutes ? `${t.minutes}m` : ''}
                      </span>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function kindLabel(k: string): string {
  switch (k) {
    case 'lesson':
      return 'Lesson'
    case 'practice':
      return 'Practice'
    case 'timed':
      return 'Timed'
    case 'diagnostic':
      return 'Diagnostic'
    case 'review':
      return 'Review'
    default:
      return 'To do'
  }
}
