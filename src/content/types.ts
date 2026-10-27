/**
 * Shared content types for the ACT prep course.
 * All lessons, passages and questions are plain TypeScript data that conforms to these types.
 *
 * Rich text: `stem`, `text`, `explanation`, lesson paragraphs etc. may use a tiny markup subset:
 *   **bold**   __underlined__   *italic*   `code/math`   and "\n" for a line break.
 * Use Unicode math symbols (√ ² ³ π ≤ ≥ ≠ × ÷ − ° ∠ ≈) instead of LaTeX. Fractions as 3/4 or "three-fourths".
 */

export type SectionId = 'english' | 'math' | 'reading' | 'science';

export type Difficulty = 1 | 2 | 3; // 1 = easy, 2 = medium, 3 = hard

export type PassageKind =
  | 'english-passage'
  | 'prose-fiction'
  | 'social-science'
  | 'humanities'
  | 'natural-science'
  | 'data-representation'
  | 'research-summary'
  | 'conflicting-viewpoints';

export interface DataTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface Passage {
  id: string; // e.g. 'rd-fiction-1'
  section: SectionId;
  kind: PassageKind;
  title: string;
  /** Short attribution / context line shown in italics, e.g. "Adapted from a 2019 essay on urban beekeeping." */
  intro?: string;
  /** Paragraphs separated by "\n\n". For English passages, mark each numbered underlined portion as [[1:underlined words]]. */
  text: string;
  /** Science data shown with the passage. */
  tables?: DataTable[];
}

export interface Question {
  id: string; // unique across the whole course, e.g. 'eng-commas-03'
  section: SectionId;
  /** Must equal the id of a Lesson in the same section. */
  topic: string;
  difficulty: Difficulty;
  /** Optional: id of the Passage this question refers to. */
  passageId?: string;
  /** For English passage questions: the number inside [[n:...]] that this question asks about. */
  underlineNumber?: number;
  stem: string;
  /** Exactly four answer choices (A–D). Do not prefix with letters. */
  choices: [string, string, string, string];
  /** Index of the correct choice, 0–3. */
  answer: 0 | 1 | 2 | 3;
  /** Why the right answer is right AND why the tempting wrong ones are wrong. 2–5 sentences. */
  explanation: string;
}

export type LessonBlock =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'warning'; text: string }
  | { type: 'example'; prompt: string; solution: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Lesson {
  id: string; // e.g. 'eng-commas'  (this is also the topic id used by questions)
  section: SectionId;
  title: string;
  /** One sentence shown in the lesson list. */
  summary: string;
  /** Estimated minutes to read the lesson. */
  minutes: number;
  blocks: LessonBlock[];
}

export interface SectionFormat {
  questions: number;
  minutes: number;
  optional?: boolean;
}

export interface SectionContent {
  id: SectionId;
  name: string;
  tagline: string;
  format: SectionFormat;
  /** Section-wide strategy guide shown on the section's landing page. */
  overview: LessonBlock[];
  lessons: Lesson[];
  passages: Passage[];
  questions: Question[];
}
