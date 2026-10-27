import { useRef, useState } from 'react'
import { actions, useAppState, type AppState } from '../lib/store'

export function SettingsPage() {
  const state = useAppState()
  const { profile, theme } = state
  const [confirmReset, setConfirmReset] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const exportData = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `act-prep-${(profile.name || 'student').toLowerCase()}-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importData = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text()) as AppState
      if (parsed.version !== 1 || !Array.isArray(parsed.attempts)) throw new Error('bad file')
      actions.importState(parsed)
    } catch {
      window.alert('That file is not a valid ACT Prep backup.')
    }
  }

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Settings</h1>
        <p>Everything is saved in this browser only. Export a backup if you switch devices.</p>
      </div>

      <div className="card stack">
        <h3 style={{ margin: 0 }}>Student</h3>
        <div className="grid grid-3">
          <label className="field">
            Name
            <input type="text" value={profile.name} onChange={(e) => actions.updateProfile({ name: e.target.value })} />
          </label>
          <label className="field">
            Test date
            <input type="date" value={profile.testDate ?? ''} onChange={(e) => actions.updateProfile({ testDate: e.target.value || undefined })} />
          </label>
          <label className="field">
            Target composite (1–36)
            <input
              type="number"
              min={1}
              max={36}
              value={profile.targetScore ?? ''}
              onChange={(e) => actions.updateProfile({ targetScore: e.target.value ? Math.max(1, Math.min(36, Number(e.target.value))) : undefined })}
            />
          </label>
        </div>
        <label className="row small" style={{ gap: 8 }}>
          <input type="checkbox" checked={profile.takingScience} onChange={(e) => actions.updateProfile({ takingScience: e.target.checked })} />
          I plan to take the optional Science section
        </label>
      </div>

      <div className="card stack">
        <h3 style={{ margin: 0 }}>Appearance</h3>
        <div className="radio-row">
          {(['system', 'light', 'dark'] as const).map((t) => (
            <label key={t} className={theme === t ? 'on' : ''}>
              <input type="radio" checked={theme === t} onChange={() => actions.setTheme(t)} />
              {t[0].toUpperCase() + t.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="card stack">
        <h3 style={{ margin: 0 }}>Data</h3>
        <div className="row">
          <button className="btn" onClick={exportData}>
            Export backup (.json)
          </button>
          <button className="btn" onClick={() => fileRef.current?.click()}>
            Import backup
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void importData(f)
              e.target.value = ''
            }}
          />
          {!confirmReset ? (
            <button className="btn btn-danger" onClick={() => setConfirmReset(true)}>
              Reset all progress
            </button>
          ) : (
            <span className="row">
              <span className="small">Delete every attempt and checkmark?</span>
              <button
                className="btn btn-danger"
                onClick={() => {
                  actions.resetAll()
                  setConfirmReset(false)
                }}
              >
                Yes, reset
              </button>
              <button className="btn" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
