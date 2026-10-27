import { describe, expect, it } from 'vitest'
import type { Question } from '../content/types'
import type { Attempt } from './store'
import { compositeEstimate, estimateScaleScore, masteryLabel, percent, sectionSummary, topicStats } from './scoring'

const q = (id: string, topic: string, section: Question['section'] = 'math'): Question => ({
  id,
  section,
  topic,
  difficulty: 1,
  stem: 's',
  choices: ['a', 'b', 'c', 'd'],
  answer: 0,
  explanation: 'e',
})

const attempt = (items: Array<[string, boolean]>, over: Partial<Attempt> = {}): Attempt => ({
  id: Math.random().toString(),
  mode: 'practice',
  section: 'math',
  timed: false,
  timeUsedSec: 10,
  startedAt: 0,
  finishedAt: over.finishedAt ?? 1,
  items: items.map(([questionId, correct]) => ({ questionId, chosen: correct ? 0 : 1, correct })),
  ...over,
})

describe('estimateScaleScore', () => {
  it('maps endpoints and interpolates', () => {
    expect(estimateScaleScore(100)).toBe(36)
    expect(estimateScaleScore(0)).toBe(8)
    expect(estimateScaleScore(75)).toBe(28)
    expect(estimateScaleScore(73)).toBeGreaterThanOrEqual(27)
    expect(estimateScaleScore(73)).toBeLessThanOrEqual(28)
    expect(estimateScaleScore(150)).toBe(36)
    expect(estimateScaleScore(-5)).toBe(8)
  })
  it('is monotonic', () => {
    let prev = -1
    for (let p = 0; p <= 100; p++) {
      const s = estimateScaleScore(p)
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
  })
})

describe('percent', () => {
  it('handles zero totals', () => {
    expect(percent(0, 0)).toBe(0)
    expect(percent(3, 4)).toBe(75)
  })
})

describe('topicStats', () => {
  const map = new Map([q('q1', 't1'), q('q2', 't1'), q('q3', 't2')].map((x) => [x.id, x]))
  it('weights recent answers more', () => {
    const early = attempt([['q1', false], ['q2', false]], { finishedAt: 1 })
    const late = attempt([['q1', true], ['q2', true]], { finishedAt: 2 })
    const stats = topicStats([early, late], map)
    expect(stats.get('t1')!.attempted).toBe(4)
    expect(stats.get('t1')!.correct).toBe(2)
    expect(stats.get('t1')!.mastery).toBeGreaterThan(50)
    // reversed order should produce the mirror image
    const rev = topicStats([attempt([['q1', true], ['q2', true]], { finishedAt: 1 }), attempt([['q1', false], ['q2', false]], { finishedAt: 2 })], map)
    expect(rev.get('t1')!.mastery).toBeLessThan(50)
  })
  it('ignores blanks and unknown questions', () => {
    const a = attempt([['q3', true]])
    a.items.push({ questionId: 'nope', chosen: 0, correct: true })
    a.items.push({ questionId: 'q3', chosen: null, correct: false })
    const stats = topicStats([a], map)
    expect(stats.get('t2')!.attempted).toBe(1)
    expect(stats.get('t2')!.mastery).toBe(100)
  })
})

describe('sectionSummary and composite', () => {
  const qs = Array.from({ length: 12 }, (_, i) => q(`m${i}`, 't', 'math'))
  const map = new Map(qs.map((x) => [x.id, x]))
  it('needs 10 answered questions before estimating', () => {
    const small = attempt(qs.slice(0, 5).map((x) => [x.id, true]))
    expect(sectionSummary('math', [small], map).estimate).toBeNull()
    const big = attempt(qs.map((x) => [x.id, true]))
    expect(sectionSummary('math', [big], map).estimate).toBe(36)
  })
  it('uses the latest timed set for the estimate when available', () => {
    const untimedPerfect = attempt(qs.map((x) => [x.id, true]), { finishedAt: 5 })
    const timedHalf = attempt(qs.map((x, i) => [x.id, i % 2 === 0]), { mode: 'timed-section', timed: true, finishedAt: 3 })
    const s = sectionSummary('math', [untimedPerfect, timedHalf], map)
    expect(s.lastTimedPercent).toBe(50)
    expect(s.estimate).toBe(estimateScaleScore(50))
  })
  it('composite ignores science and needs all three core sections', () => {
    const base = { attempted: 20, correct: 15, percent: 75, lastTimedPercent: null }
    expect(compositeEstimate([{ ...base, section: 'english', estimate: 30 }, { ...base, section: 'math', estimate: 24 }])).toBeNull()
    expect(
      compositeEstimate([
        { ...base, section: 'english', estimate: 30 },
        { ...base, section: 'math', estimate: 24 },
        { ...base, section: 'reading', estimate: 27 },
        { ...base, section: 'science', estimate: 10 },
      ]),
    ).toBe(27)
  })
})

describe('masteryLabel', () => {
  it('buckets', () => {
    expect(masteryLabel(90).tone).toBe('success')
    expect(masteryLabel(70).tone).toBe('warning')
    expect(masteryLabel(20).tone).toBe('danger')
  })
})
