import { describe, expect, it } from 'vitest'
import { sections, allQuestions, allLessons, allPassages, questionById, lessonById, passageById } from './index'
import { allTasks, studyPlan } from './plan'

describe('course content integrity', () => {
  it('has four sections with the Enhanced ACT formats', () => {
    expect(sections.map((s) => s.id)).toEqual(['english', 'math', 'reading', 'science'])
    const fmt = Object.fromEntries(sections.map((s) => [s.id, s.format]))
    expect(fmt.english).toMatchObject({ questions: 50, minutes: 35 })
    expect(fmt.math).toMatchObject({ questions: 45, minutes: 50 })
    expect(fmt.reading).toMatchObject({ questions: 36, minutes: 40 })
    expect(fmt.science).toMatchObject({ questions: 40, minutes: 40, optional: true })
  })

  it('has unique ids for questions, lessons and passages', () => {
    expect(questionById.size).toBe(allQuestions.length)
    expect(lessonById.size).toBe(allLessons.length)
    expect(passageById.size).toBe(allPassages.length)
  })

  it('every question has four distinct choices and a valid answer index', () => {
    for (const q of allQuestions) {
      expect(q.choices, q.id).toHaveLength(4)
      expect(new Set(q.choices.map((c) => c.trim().toLowerCase())).size, `duplicate choices in ${q.id}`).toBe(4)
      expect([0, 1, 2, 3], q.id).toContain(q.answer)
      expect(q.stem.trim().length, q.id).toBeGreaterThan(5)
      expect(q.explanation.trim().length, `explanation too short in ${q.id}`).toBeGreaterThan(30)
      expect([1, 2, 3], q.id).toContain(q.difficulty)
    }
  })

  it('every question points to a lesson in its own section', () => {
    for (const q of allQuestions) {
      const lesson = lessonById.get(q.topic)
      expect(lesson, `missing lesson ${q.topic} for ${q.id}`).toBeDefined()
      expect(lesson!.section, `${q.id} topic is in a different section`).toBe(q.section)
    }
  })

  it('every passage reference resolves and English underline numbers exist in the passage', () => {
    for (const q of allQuestions) {
      if (!q.passageId) continue
      const p = passageById.get(q.passageId)
      expect(p, `missing passage ${q.passageId} for ${q.id}`).toBeDefined()
      expect(p!.section, `${q.id} passage is in a different section`).toBe(q.section)
      if (q.underlineNumber !== undefined) {
        expect(p!.text, `underline ${q.underlineNumber} missing in ${p!.id}`).toContain(`[[${q.underlineNumber}:`)
      }
    }
  })

  it('every lesson has at least 5 questions', () => {
    for (const l of allLessons) {
      const n = allQuestions.filter((q) => q.topic === l.id).length
      expect(n, `lesson ${l.id} has only ${n} questions`).toBeGreaterThanOrEqual(5)
    }
  })

  it('each section has enough questions for a full timed section', () => {
    for (const s of sections) {
      expect(s.questions.length, s.id).toBeGreaterThanOrEqual(s.format.questions)
    }
  })

  it('answers are not all in the same position', () => {
    for (const s of sections) {
      const counts = [0, 0, 0, 0]
      for (const q of s.questions) counts[q.answer]++
      const max = Math.max(...counts)
      expect(max / s.questions.length, `${s.id} answer positions are skewed: ${counts.join(',')}`).toBeLessThan(0.45)
    }
  })

  it('science data tables are rectangular', () => {
    for (const p of allPassages) {
      for (const t of p.tables ?? []) {
        for (const row of t.rows) expect(row.length, `${p.id} table "${t.caption}"`).toBe(t.headers.length)
      }
    }
  })

  it('study plan tasks have unique ids and link to real lessons', () => {
    expect(new Set(allTasks.map((t) => t.id)).size).toBe(allTasks.length)
    expect(studyPlan).toHaveLength(8)
    for (const t of allTasks) {
      const m = t.to?.match(/^\/section\/(\w+)\/lesson\/([\w-]+)$/)
      if (m) {
        const lesson = lessonById.get(m[2])
        expect(lesson, `plan task ${t.id} links to missing lesson ${m[2]}`).toBeDefined()
        expect(lesson!.section).toBe(m[1])
      }
    }
    // every lesson appears in the plan
    for (const l of allLessons) {
      expect(allTasks.some((t) => t.to?.endsWith(`/lesson/${l.id}`)), `lesson ${l.id} not in plan`).toBe(true)
    }
  })
})
