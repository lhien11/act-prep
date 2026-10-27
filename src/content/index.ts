import type { Lesson, Passage, Question, SectionContent, SectionId } from './types'
import { english } from './english'
import { math } from './math'
import { reading } from './reading'
import { science } from './science'

export const sections: SectionContent[] = [english, math, reading, science]
export const sectionIds: SectionId[] = ['english', 'math', 'reading', 'science']

export const sectionById = new Map<SectionId, SectionContent>(sections.map((s) => [s.id, s]))
export const allQuestions: Question[] = sections.flatMap((s) => s.questions)
export const allLessons: Lesson[] = sections.flatMap((s) => s.lessons)
export const allPassages: Passage[] = sections.flatMap((s) => s.passages)

export const questionById = new Map<string, Question>(allQuestions.map((q) => [q.id, q]))
export const lessonById = new Map<string, Lesson>(allLessons.map((l) => [l.id, l]))
export const passageById = new Map<string, Passage>(allPassages.map((p) => [p.id, p]))

export function getSection(id: string | undefined): SectionContent | undefined {
  return id ? sectionById.get(id as SectionId) : undefined
}

export function questionsForLesson(lessonId: string): Question[] {
  return allQuestions.filter((q) => q.topic === lessonId)
}

export const sectionMeta: Record<SectionId, { emoji: string; blurb: string }> = {
  english: { emoji: '✍️', blurb: 'Grammar, punctuation and rhetoric: 50 questions in 35 minutes.' },
  math: { emoji: '➗', blurb: 'Algebra through trig: 45 questions in 50 minutes, calculator allowed.' },
  reading: { emoji: '📖', blurb: 'Four passages, 36 questions in 40 minutes.' },
  science: { emoji: '🔬', blurb: 'Optional data-and-reasoning section: 40 questions in 40 minutes.' },
}
