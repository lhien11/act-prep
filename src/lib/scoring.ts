import type { Question, SectionId } from '../content/types'
import type { Attempt } from './store'

/**
 * Rough percent-correct → ACT scale (1–36) estimate.
 * Real ACT scaling differs by form; this is only to give a sense of trajectory.
 */
const SCALE: Array<[number, number]> = [
  [100, 36], [97, 35], [94, 34], [91, 33], [88, 32], [85, 31], [82, 30], [78, 29], [75, 28],
  [71, 27], [67, 26], [63, 25], [59, 24], [55, 23], [51, 22], [47, 21], [43, 20], [39, 19],
  [35, 18], [31, 17], [27, 16], [23, 15], [19, 14], [15, 13], [11, 12], [8, 11], [5, 10], [0, 8],
]

export function estimateScaleScore(percent: number): number {
  const p = Math.max(0, Math.min(100, percent))
  for (let i = 0; i < SCALE.length - 1; i++) {
    const [hiP, hiS] = SCALE[i]
    const [loP, loS] = SCALE[i + 1]
    if (p <= hiP && p >= loP) {
      if (hiP === loP) return hiS
      const t = (p - loP) / (hiP - loP)
      return Math.round(loS + t * (hiS - loS))
    }
  }
  return 8
}

export function percent(correct: number, total: number): number {
  return total === 0 ? 0 : Math.round((correct / total) * 100)
}

export interface TopicStat {
  topic: string
  attempted: number
  correct: number
  /** 0–100, weighted toward recent attempts. */
  mastery: number
}

/**
 * Mastery per topic: exponentially weighted accuracy over the most recent answers (newest counts most).
 */
export function topicStats(attempts: Attempt[], questionById: Map<string, Question>): Map<string, TopicStat> {
  const perTopic = new Map<string, boolean[]>()
  const ordered = [...attempts].sort((a, b) => a.finishedAt - b.finishedAt)
  for (const at of ordered) {
    for (const item of at.items) {
      const q = questionById.get(item.questionId)
      if (!q || item.chosen === null) continue
      const arr = perTopic.get(q.topic) ?? []
      arr.push(item.correct)
      perTopic.set(q.topic, arr)
    }
  }
  const out = new Map<string, TopicStat>()
  for (const [topic, results] of perTopic) {
    let wSum = 0
    let wCorrect = 0
    const n = results.length
    results.forEach((ok, i) => {
      const w = Math.pow(0.85, n - 1 - i)
      wSum += w
      if (ok) wCorrect += w
    })
    out.set(topic, {
      topic,
      attempted: n,
      correct: results.filter(Boolean).length,
      mastery: Math.round((wCorrect / wSum) * 100),
    })
  }
  return out
}

export interface SectionSummary {
  section: SectionId
  attempted: number
  correct: number
  percent: number
  estimate: number | null
  /** Percent on the most recent timed section (if any). */
  lastTimedPercent: number | null
}

export function sectionSummary(
  section: SectionId,
  attempts: Attempt[],
  questionById: Map<string, Question>,
): SectionSummary {
  let attempted = 0
  let correct = 0
  let lastTimedPercent: number | null = null
  let lastTimedAt = -1
  for (const at of attempts) {
    const items = at.items.filter((it) => questionById.get(it.questionId)?.section === section)
    if (items.length === 0) continue
    attempted += items.length
    correct += items.filter((i) => i.correct).length
    if ((at.mode === 'timed-section' || at.mode === 'diagnostic') && at.finishedAt > lastTimedAt && items.length >= 8) {
      lastTimedAt = at.finishedAt
      lastTimedPercent = percent(items.filter((i) => i.correct).length, items.length)
    }
  }
  const pct = percent(correct, attempted)
  return {
    section,
    attempted,
    correct,
    percent: pct,
    estimate: attempted >= 10 ? estimateScaleScore(lastTimedPercent ?? pct) : null,
    lastTimedPercent,
  }
}

export function compositeEstimate(summaries: SectionSummary[]): number | null {
  const core = summaries.filter((s) => s.section !== 'science' && s.estimate !== null)
  if (core.length < 3) return null
  const avg = core.reduce((a, s) => a + (s.estimate ?? 0), 0) / core.length
  return Math.round(avg)
}

export function masteryLabel(m: number): { label: string; tone: 'success' | 'warning' | 'danger' | 'muted' } {
  if (m >= 85) return { label: 'Strong', tone: 'success' }
  if (m >= 65) return { label: 'Developing', tone: 'warning' }
  return { label: 'Focus here', tone: 'danger' }
}
