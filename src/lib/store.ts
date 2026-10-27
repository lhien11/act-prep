import { useSyncExternalStore } from 'react'
import type { SectionId } from '../content/types'

export type AttemptMode = 'lesson-check' | 'practice' | 'timed-section' | 'diagnostic'

export interface AttemptItem {
  questionId: string
  chosen: number | null
  correct: boolean
}

export interface Attempt {
  id: string
  mode: AttemptMode
  section: SectionId | 'mixed'
  /** Lesson id when mode is 'lesson-check'. */
  topic?: string
  timed: boolean
  timeLimitSec?: number
  timeUsedSec: number
  startedAt: number
  finishedAt: number
  items: AttemptItem[]
}

export interface Profile {
  name: string
  testDate?: string
  targetScore?: number
  takingScience: boolean
}

export interface AppState {
  version: 1
  profile: Profile
  attempts: Attempt[]
  completedTasks: string[]
  readLessons: string[]
  flagged: string[]
  theme: 'system' | 'light' | 'dark'
}

const STORAGE_KEY = 'act-prep:v1'

export const defaultState: AppState = {
  version: 1,
  profile: { name: 'Andy', takingScience: true },
  attempts: [],
  completedTasks: [],
  readLessons: [],
  flagged: [],
  theme: 'system',
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as Partial<AppState>
    if (parsed.version !== 1) return defaultState
    return { ...defaultState, ...parsed, profile: { ...defaultState.profile, ...parsed.profile } }
  } catch {
    return defaultState
  }
}

let state: AppState = load()
const listeners = new Set<() => void>()

function emit() {
  for (const l of listeners) l()
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage unavailable: keep in-memory state */
  }
}

export function getState(): AppState {
  return state
}

export function setState(updater: (prev: AppState) => AppState) {
  state = updater(state)
  persist()
  emit()
}

export function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState, getState)
}

export function newId(prefix = 'a'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

/* ---------- Actions ---------- */

export const actions = {
  updateProfile(patch: Partial<Profile>) {
    setState((s) => ({ ...s, profile: { ...s.profile, ...patch } }))
  },
  setTheme(theme: AppState['theme']) {
    setState((s) => ({ ...s, theme }))
  },
  recordAttempt(attempt: Attempt) {
    setState((s) => ({ ...s, attempts: [...s.attempts, attempt] }))
  },
  toggleTask(taskId: string) {
    setState((s) => ({
      ...s,
      completedTasks: s.completedTasks.includes(taskId)
        ? s.completedTasks.filter((t) => t !== taskId)
        : [...s.completedTasks, taskId],
    }))
  },
  markLessonRead(lessonId: string) {
    setState((s) => (s.readLessons.includes(lessonId) ? s : { ...s, readLessons: [...s.readLessons, lessonId] }))
  },
  toggleFlag(questionId: string) {
    setState((s) => ({
      ...s,
      flagged: s.flagged.includes(questionId) ? s.flagged.filter((q) => q !== questionId) : [...s.flagged, questionId],
    }))
  },
  resetAll() {
    setState(() => defaultState)
  },
  importState(next: AppState) {
    setState(() => ({ ...defaultState, ...next }))
  },
}
