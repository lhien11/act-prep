import { describe, expect, it } from 'vitest'
import type { Question } from '../content/types'
import { buildDiagnostic, buildSet, formatTime, groupByPassage, rng, shuffle } from './quiz'

const mk = (id: string, section: Question['section'], topic: string, passageId?: string, underlineNumber?: number): Question => ({
  id,
  section,
  topic,
  difficulty: 1,
  stem: 's',
  choices: ['a', 'b', 'c', 'd'],
  answer: 0,
  explanation: 'e',
  passageId,
  underlineNumber,
})

describe('rng/shuffle', () => {
  it('is deterministic for a seed and preserves elements', () => {
    const a = shuffle([1, 2, 3, 4, 5, 6], rng(42))
    const b = shuffle([1, 2, 3, 4, 5, 6], rng(42))
    expect(a).toEqual(b)
    expect([...a].sort()).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('groupByPassage', () => {
  it('puts standalone items first and orders passage items by underline number', () => {
    const qs = [mk('p2', 'english', 't', 'P', 2), mk('s1', 'english', 't'), mk('p1', 'english', 't', 'P', 1)]
    expect(groupByPassage(qs).map((q) => q.id)).toEqual(['s1', 'p1', 'p2'])
  })
})

describe('buildSet', () => {
  const pool = [
    ...Array.from({ length: 10 }, (_, i) => mk(`m${i}`, 'math', i < 5 ? 'alg' : 'geo')),
    ...Array.from({ length: 6 }, (_, i) => mk(`r${i}`, 'reading', 'inf', i < 3 ? 'PA' : 'PB')),
  ]
  it('filters by section and topic and respects count', () => {
    const set = buildSet(pool, { section: 'math', count: 4, topics: ['geo'], random: rng(1) })
    expect(set).toHaveLength(4)
    expect(set.every((q) => q.topic === 'geo')).toBe(true)
  })
  it('prefers unseen questions', () => {
    const seen = new Map(['m0', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6'].map((id) => [id, 1]))
    const set = buildSet(pool, { section: 'math', count: 3, seenCounts: seen, random: rng(7) })
    expect(set.map((q) => q.id).sort()).toEqual(['m7', 'm8', 'm9'])
  })
  it('keeps whole passages together', () => {
    const set = buildSet(pool, { section: 'reading', count: 3, wholePassages: true, random: rng(3) })
    expect(new Set(set.map((q) => q.passageId)).size).toBe(1)
  })
  it('caps at the pool size', () => {
    expect(buildSet(pool, { section: 'reading', count: 50, random: rng(3) })).toHaveLength(6)
  })
})

describe('buildDiagnostic', () => {
  it('returns up to n per section in test order', () => {
    const pool = [
      ...Array.from({ length: 12 }, (_, i) => mk(`e${i}`, 'english', `t${i % 3}`)),
      ...Array.from({ length: 12 }, (_, i) => mk(`m${i}`, 'math', `t${i % 4}`)),
      ...Array.from({ length: 12 }, (_, i) => mk(`r${i}`, 'reading', 't', `P${Math.floor(i / 6)}`)),
      ...Array.from({ length: 12 }, (_, i) => mk(`s${i}`, 'science', 't', `S${Math.floor(i / 4)}`)),
    ]
    const d = buildDiagnostic(pool, 5, rng(9))
    expect(d).toHaveLength(20)
    expect(d.slice(0, 5).every((q) => q.section === 'english')).toBe(true)
    expect(d.slice(15).every((q) => q.section === 'science')).toBe(true)
    expect(new Set(d.map((q) => q.id)).size).toBe(20)
  })
})

describe('formatTime', () => {
  it('formats m:ss', () => {
    expect(formatTime(0)).toBe('0:00')
    expect(formatTime(65)).toBe('1:05')
    expect(formatTime(-3)).toBe('0:00')
    expect(formatTime(3599.9)).toBe('59:59')
  })
})
