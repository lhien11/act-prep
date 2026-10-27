import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAppState } from '../lib/store'

export function Layout() {
  const { theme, profile } = useAppState()
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  const link = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined)

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" className="brand">
            <span className="brand-badge">ACT</span> Prep for {profile.name || 'you'}
          </NavLink>
          <nav className="nav" aria-label="Main">
            <NavLink to="/" end className={link}>
              Home
            </NavLink>
            <NavLink to="/plan" className={link}>
              Plan
            </NavLink>
            <NavLink to="/section/english" className={link}>
              English
            </NavLink>
            <NavLink to="/section/math" className={link}>
              Math
            </NavLink>
            <NavLink to="/section/reading" className={link}>
              Reading
            </NavLink>
            <NavLink to="/section/science" className={link}>
              Science
            </NavLink>
            <NavLink to="/practice" className={link}>
              Practice
            </NavLink>
            <NavLink to="/progress" className={link}>
              Progress
            </NavLink>
            <NavLink to="/settings" className={link} aria-label="Settings">
              ⚙
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        Built for the Enhanced ACT (2025 format and later). Score estimates are rough and for tracking trends only. ACT is a registered trademark of ACT, Inc., which is not affiliated with this course.
      </footer>
    </div>
  )
}
