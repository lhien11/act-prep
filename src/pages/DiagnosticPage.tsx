import { useState } from 'react'
import type { Question } from '../content/types'
import { allQuestions } from '../content'
import { QuizRunner } from '../components/QuizRunner'
import { buildDiagnostic } from '../lib/quiz'
import { useAppState } from '../lib/store'

export function DiagnosticPage() {
  const { profile } = useAppState()
  const [questions, setQuestions] = useState<Question[] | null>(null)

  if (questions) {
    return (
      <div className="stack">
        <h1 style={{ margin: 0 }}>Diagnostic</h1>
        <QuizRunner
          title="Diagnostic · 40 q"
          questions={questions}
          mode="diagnostic"
          section="mixed"
          feedback="end"
          exitTo="/progress"
          exitLabel="See my progress page"
        />
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Diagnostic</h1>
        <p>
          Forty questions: ten from each section, mixed difficulty, in test order (English, Math, Reading, Science). Untimed, but
          the clock runs so you can see your natural pace. It takes most students 45 to 60 minutes.
        </p>
      </div>
      <div className="card">
        <h3>Before you start{profile.name ? `, ${profile.name}` : ''}</h3>
        <ul style={{ paddingLeft: '1.2em' }}>
          <li>Have scratch paper and a calculator (the ACT allows one on Math).</li>
          <li>Guess rather than leave a blank. There is no penalty for wrong answers on the ACT.</li>
          <li>Do not look anything up. The point is to find the gaps, not to hide them.</li>
          <li>The Reading and Science parts give you a whole passage, just like the real test.</li>
        </ul>
        <button className="btn btn-primary btn-lg" onClick={() => setQuestions(buildDiagnostic(allQuestions, 10))}>
          Begin diagnostic
        </button>
      </div>
    </div>
  )
}
