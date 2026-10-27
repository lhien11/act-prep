import type { ReactNode } from 'react'
import { HashRouter, MemoryRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { PlanPage } from './pages/PlanPage'
import { SectionPage } from './pages/SectionPage'
import { LessonPage } from './pages/LessonPage'
import { PracticePage } from './pages/PracticePage'
import { DiagnosticPage } from './pages/DiagnosticPage'
import { AttemptReviewPage, ProgressPage } from './pages/ProgressPage'
import { SettingsPage } from './pages/SettingsPage'

/**
 * HashRouter keeps URLs bookmarkable when the app is served normally.
 * Hosted inside a sandboxed frame (the published artifact build) the hash cannot be
 * changed, so that build is made with VITE_ROUTER=memory.
 */
function Router({ children }: { children: ReactNode }) {
  if (import.meta.env.VITE_ROUTER === 'memory') return <MemoryRouter>{children}</MemoryRouter>
  return <HashRouter>{children}</HashRouter>
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="section/:sectionId" element={<SectionPage />} />
          <Route path="section/:sectionId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="diagnostic" element={<DiagnosticPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="progress/attempt/:attemptId" element={<AttemptReviewPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}
