import type { Passage, Question, SectionId } from '../content/types'

/** Deterministic PRNG (mulberry32) so a seed reproduces a set. */
export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function shuffle<T>(arr: T[], random: () => number = Math.random): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Orders questions so passage-based items stay grouped (in underline/number order),
 * with standalone items first. Keeps ACT-like flow.
 */
export function groupByPassage(questions: Question[]): Question[] {
  const standalone = questions.filter((q) => !q.passageId)
  const byPassage = new Map<string, Question[]>()
  for (const q of questions) {
    if (!q.passageId) continue
    const list = byPassage.get(q.passageId) ?? []
    list.push(q)
    byPassage.set(q.passageId, list)
  }
  const grouped: Question[] = []
  for (const list of byPassage.values()) {
    list.sort((a, b) => (a.underlineNumber ?? 0) - (b.underlineNumber ?? 0))
    grouped.push(...list)
  }
  return [...standalone, ...grouped]
}

export interface BuildOptions {
  section: SectionId | 'mixed'
  count: number
  topics?: string[]
  /** Prefer questions the student has not seen, then least recently seen. */
  seenCounts?: Map<string, number>
  random?: () => number
  /** When true, whole passages are included together (reading/science/english passages). */
  wholePassages?: boolean
}

export function buildSet(all: Question[], opts: BuildOptions): Question[] {
  const random = opts.random ?? Math.random
  let pool = all.filter((q) => opts.section === 'mixed' || q.section === opts.section)
  if (opts.topics && opts.topics.length > 0) {
    const t = new Set(opts.topics)
    pool = pool.filter((q) => t.has(q.topic))
  }
  const seen = opts.seenCounts ?? new Map<string, number>()
  const score = (q: Question) => (seen.get(q.id) ?? 0) + random() * 0.5

  if (opts.wholePassages) {
    // Pick passages (as units) and standalone items until we hit count.
    const passages = new Map<string, Question[]>()
    const standalone: Question[] = []
    for (const q of pool) {
      if (q.passageId) {
        const list = passages.get(q.passageId) ?? []
        list.push(q)
        passages.set(q.passageId, list)
      } else standalone.push(q)
    }
    const units: Question[][] = [...passages.values()].map((l) => shuffle(l, random)).concat(standalone.map((q) => [q]))
    units.sort((a, b) => avg(a.map(score)) - avg(b.map(score)))
    const chosen: Question[] = []
    for (const u of units) {
      if (chosen.length >= opts.count) break
      const room = opts.count - chosen.length
      chosen.push(...u.slice(0, room))
    }
    return groupByPassage(chosen)
  }

  const sorted = [...pool].sort((a, b) => score(a) - score(b))
  return groupByPassage(sorted.slice(0, opts.count))
}

function avg(nums: number[]): number {
  return nums.length === 0 ? 0 : nums.reduce((a, b) => a + b, 0) / nums.length
}

/** A balanced mixed diagnostic: n questions per section, spread across topics. */
export function buildDiagnostic(all: Question[], perSection: number, random: () => number = Math.random): Question[] {
  const sections: SectionId[] = ['english', 'math', 'reading', 'science']
  const out: Question[] = []
  for (const s of sections) {
    const pool = all.filter((q) => q.section === s && q.difficulty <= 2)
    if (s === 'reading' || s === 'science') {
      // Use one whole passage's worth plus fill-ins so the student sees real passage work.
      const byPassage = new Map<string, Question[]>()
      for (const q of pool) if (q.passageId) byPassage.set(q.passageId, [...(byPassage.get(q.passageId) ?? []), q])
      const passageIds = shuffle([...byPassage.keys()], random)
      const picked: Question[] = []
      for (const pid of passageIds) {
        if (picked.length >= perSection) break
        picked.push(...(byPassage.get(pid) ?? []).slice(0, perSection - picked.length))
      }
      out.push(...groupByPassage(picked))
    } else {
      // Round-robin across topics (standalone only) for breadth.
      const byTopic = new Map<string, Question[]>()
      for (const q of pool) if (!q.passageId) byTopic.set(q.topic, [...(byTopic.get(q.topic) ?? []), q])
      const topics = shuffle([...byTopic.keys()], random)
      const lists = topics.map((t) => shuffle(byTopic.get(t) ?? [], random))
      const picked: Question[] = []
      let i = 0
      while (picked.length < perSection && lists.some((l) => l.length > 0)) {
        const list = lists[i % lists.length]
        const q = list.shift()
        if (q) picked.push(q)
        i++
      }
      out.push(...picked)
    }
  }
  return out
}

export function passagesFor(questions: Question[], passages: Map<string, Passage>): Passage[] {
  const ids = new Set(questions.map((q) => q.passageId).filter((p): p is string => !!p))
  return [...ids].map((id) => passages.get(id)).filter((p): p is Passage => !!p)
}

export function formatTime(totalSec: number): string {
  const s = Math.max(0, Math.floor(totalSec))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${r.toString().padStart(2, '0')}`
}

export const LETTERS = ['A', 'B', 'C', 'D'] as const
