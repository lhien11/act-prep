import type { SectionId } from './types'

export type TaskKind = 'lesson' | 'practice' | 'timed' | 'diagnostic' | 'review' | 'other'

export interface PlanTask {
  id: string
  label: string
  kind: TaskKind
  /** App route the task links to, e.g. '/section/math/lesson/math-geometry'. */
  to?: string
  minutes: number
}

export interface PlanWeek {
  week: number
  title: string
  focus: string
  tasks: PlanTask[]
}

const lesson = (section: SectionId, lessonId: string, label: string, minutes = 25): PlanTask => ({
  id: `w-${lessonId}`,
  label,
  kind: 'lesson',
  to: `/section/${section}/lesson/${lessonId}`,
  minutes,
})

const practice = (id: string, section: SectionId | 'mixed', label: string, count: number, timed: boolean, minutes: number): PlanTask => ({
  id,
  label,
  kind: timed ? 'timed' : 'practice',
  to: `/practice?section=${section}&count=${count}&timed=${timed ? 1 : 0}`,
  minutes,
})

export const studyPlan: PlanWeek[] = [
  {
    week: 1,
    title: 'Baseline and foundations',
    focus: 'Find out where you stand, then lock in the two most-tested English rules and the math basics everything else builds on.',
    tasks: [
      { id: 'w1-diag', label: 'Take the diagnostic (40 questions, mixed sections)', kind: 'diagnostic', to: '/diagnostic', minutes: 50 },
      { id: 'w1-overviews', label: 'Read the strategy overview for each section', kind: 'other', to: '/section/english', minutes: 30 },
      lesson('english', 'eng-sentence-structure', 'English: Sentence structure'),
      lesson('english', 'eng-commas', 'English: Commas'),
      lesson('math', 'math-number-and-arithmetic', 'Math: Number and arithmetic', 30),
      lesson('math', 'math-linear-equations-and-inequalities', 'Math: Linear equations and inequalities', 30),
      lesson('reading', 'rd-approach-and-pacing', 'Reading: Approach and pacing'),
      lesson('science', 'sci-approach-and-pacing', 'Science: Approach and pacing'),
      practice('w1-p-eng', 'english', 'English practice set (untimed, 15 questions)', 15, false, 25),
      practice('w1-p-math', 'math', 'Math practice set (untimed, 12 questions)', 12, false, 25),
    ],
  },
  {
    week: 2,
    title: 'Punctuation, lines and data',
    focus: 'Finish the punctuation rules, get comfortable with coordinate geometry, and learn how to read ACT passages and tables.',
    tasks: [
      lesson('english', 'eng-punctuation', 'English: Semicolons, colons, dashes, apostrophes'),
      lesson('english', 'eng-verbs', 'English: Verbs'),
      lesson('math', 'math-coordinate-geometry', 'Math: Coordinate geometry', 30),
      lesson('math', 'math-systems-and-word-problems', 'Math: Systems and word problems', 30),
      lesson('reading', 'rd-main-idea-and-purpose', 'Reading: Main idea and purpose'),
      lesson('reading', 'rd-detail-and-locating', 'Reading: Detail and locating'),
      lesson('science', 'sci-reading-tables-and-graphs', 'Science: Reading tables and graphs'),
      practice('w2-p-read', 'reading', 'Reading practice (one passage, untimed)', 9, false, 20),
      practice('w2-p-sci', 'science', 'Science practice (two passages, untimed)', 14, false, 25),
      practice('w2-p-eng', 'english', 'English timed set (20 questions, 14 min)', 20, true, 20),
    ],
  },
  {
    week: 3,
    title: 'Style, functions and inference',
    focus: 'Shift from rules to judgment: concision and word choice, quadratics and functions, and the inference questions that decide Reading scores.',
    tasks: [
      lesson('english', 'eng-pronouns-and-modifiers', 'English: Pronouns and modifiers'),
      lesson('english', 'eng-word-choice-and-concision', 'English: Word choice and concision'),
      lesson('math', 'math-quadratics-and-polynomials', 'Math: Quadratics and polynomials', 30),
      lesson('math', 'math-functions', 'Math: Functions', 30),
      lesson('reading', 'rd-inference', 'Reading: Inference'),
      lesson('reading', 'rd-vocabulary-in-context', 'Reading: Vocabulary in context'),
      lesson('science', 'sci-experimental-design', 'Science: Experimental design'),
      practice('w3-p-math', 'math', 'Math timed set (20 questions, 22 min)', 20, true, 25),
      practice('w3-p-read', 'reading', 'Reading timed set (two passages, 20 min)', 18, true, 22),
      { id: 'w3-review', label: 'Review every missed question from this week and write the rule you missed in one sentence', kind: 'review', to: '/progress', minutes: 30 },
    ],
  },
  {
    week: 4,
    title: 'Rhetoric, geometry and structure',
    focus: 'The "writer\'s goal" questions, the geometry formulas you must memorize, and paired passages in Reading.',
    tasks: [
      lesson('english', 'eng-transitions-and-organization', 'English: Transitions and organization'),
      lesson('english', 'eng-rhetorical-skills', 'English: Rhetorical skills'),
      lesson('math', 'math-geometry', 'Math: Geometry', 35),
      lesson('reading', 'rd-structure-and-paired-passages', 'Reading: Structure and paired passages'),
      lesson('science', 'sci-research-summaries', 'Science: Research summaries'),
      practice('w4-p-eng', 'english', 'English full timed section (50 questions, 35 min)', 50, true, 40),
      practice('w4-p-sci', 'science', 'Science timed set (three passages, 20 min)', 21, true, 22),
      { id: 'w4-formulas', label: 'Make flash cards for the "formulas the ACT does not give you" table in the Math overview', kind: 'other', to: '/section/math', minutes: 25 },
    ],
  },
  {
    week: 5,
    title: 'Trig, statistics and viewpoints',
    focus: 'Round out the math topics and finish the Science lessons, then take a full timed Reading section.',
    tasks: [
      lesson('math', 'math-trigonometry', 'Math: Trigonometry', 30),
      lesson('math', 'math-statistics-and-probability', 'Math: Statistics and probability', 30),
      lesson('science', 'sci-conflicting-viewpoints', 'Science: Conflicting viewpoints'),
      lesson('science', 'sci-reasoning-and-outside-knowledge', 'Science: Reasoning and outside knowledge'),
      practice('w5-p-read', 'reading', 'Reading full timed section (36 questions, 40 min)', 36, true, 45),
      practice('w5-p-math', 'math', 'Math timed set (30 questions, 33 min)', 30, true, 35),
      practice('w5-p-eng', 'english', 'English timed set (25 questions, 17 min)', 25, true, 20),
      { id: 'w5-review', label: 'Re-read the lesson for your two weakest topics on the Progress page', kind: 'review', to: '/progress', minutes: 40 },
    ],
  },
  {
    week: 6,
    title: 'Advanced topics and weak spots',
    focus: 'Cover the rarer math topics, then spend most of the week drilling whatever the Progress page says is weakest.',
    tasks: [
      lesson('math', 'math-advanced-topics', 'Math: Matrices, logs, complex numbers, sequences', 35),
      practice('w6-p-math', 'math', 'Math full timed section (45 questions, 50 min)', 45, true, 55),
      practice('w6-p-sci', 'science', 'Science full timed section (40 questions, 40 min)', 40, true, 45),
      { id: 'w6-weak-1', label: 'Targeted practice: pick your 3 weakest topics on the Practice page and do 15 questions', kind: 'practice', to: '/practice', minutes: 30 },
      { id: 'w6-weak-2', label: 'Targeted practice: repeat with the next 3 weakest topics', kind: 'practice', to: '/practice', minutes: 30 },
      { id: 'w6-flagged', label: 'Redo every question you flagged for review', kind: 'review', to: '/practice?flagged=1', minutes: 30 },
    ],
  },
  {
    week: 7,
    title: 'Full simulation',
    focus: 'One sitting, test-day order, real timing: English, Math, break, Reading, Science. Then a careful review.',
    tasks: [
      { id: 'w7-sim-prep', label: 'Set up test conditions: quiet room, approved calculator, timer, no phone', kind: 'other', minutes: 10 },
      practice('w7-sim-eng', 'english', 'Simulation 1 of 4: English (50 questions, 35 min)', 50, true, 35),
      practice('w7-sim-math', 'math', 'Simulation 2 of 4: Math (45 questions, 50 min)', 45, true, 50),
      practice('w7-sim-read', 'reading', 'Simulation 3 of 4: Reading (36 questions, 40 min) after a 10-minute break', 36, true, 40),
      practice('w7-sim-sci', 'science', 'Simulation 4 of 4: Science (40 questions, 40 min)', 40, true, 40),
      { id: 'w7-sim-review', label: 'Review the simulation on the Progress page. For every miss: careless, timing, or did not know?', kind: 'review', to: '/progress', minutes: 60 },
      { id: 'w7-errors', label: 'Re-read the lesson for any topic with two or more misses', kind: 'review', to: '/progress', minutes: 45 },
    ],
  },
  {
    week: 8,
    title: 'Taper and test day',
    focus: 'Light, confident review. No new material. Sleep.',
    tasks: [
      practice('w8-p-eng', 'english', 'English timed set (25 questions, 17 min)', 25, true, 20),
      practice('w8-p-math', 'math', 'Math timed set (20 questions, 22 min)', 20, true, 25),
      practice('w8-p-mixed', 'mixed', 'Mixed warm-up set (20 questions, untimed)', 20, false, 25),
      { id: 'w8-formulas', label: 'Run through the formula flash cards twice', kind: 'review', to: '/section/math', minutes: 20 },
      { id: 'w8-checklist', label: 'Read the test-day checklist in each section overview', kind: 'other', to: '/section/english', minutes: 15 },
      { id: 'w8-pack', label: 'Night before: pack admission ticket, photo ID, calculator with fresh batteries, No. 2 pencils, watch, snack, water', kind: 'other', minutes: 15 },
      { id: 'w8-sleep', label: 'Two nights of 8+ hours of sleep before the test', kind: 'other', minutes: 0 },
    ],
  },
]

export const allTasks: PlanTask[] = studyPlan.flatMap((w) => w.tasks)
