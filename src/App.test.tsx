// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { sections, lessonById } from './content'
import { actions, getState } from './lib/store'

function go(hash: string) {
  window.location.hash = hash
}

window.scrollTo = () => {}

beforeEach(() => {
  localStorage.clear()
  actions.resetAll()
  go('#/')
})
afterEach(() => cleanup())

describe('app routes render', () => {
  it('home shows the student name and the four sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Andy')
    for (const s of sections) expect(screen.getAllByText(s.name).length).toBeGreaterThan(0)
    expect(screen.getByText(/Start with the diagnostic/)).toBeTruthy()
  })

  it('plan shows 8 weeks and toggles a task', async () => {
    go('#/plan')
    render(<App />)
    expect(screen.getByText(/Week 1:/)).toBeTruthy()
    expect(screen.getByText(/Week 8:/)).toBeTruthy()
    const box = screen.getAllByRole('checkbox')[0] as HTMLInputElement
    await userEvent.click(box)
    expect(getState().completedTasks).toHaveLength(1)
  })

  it('every section page lists all its lessons and strategy guide', () => {
    for (const s of sections) {
      go(`#/section/${s.id}`)
      const { unmount } = render(<App />)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(s.name)
      for (const l of s.lessons) expect(screen.getAllByText(l.title).length).toBeGreaterThan(0)
      expect(screen.getByText('Strategy guide')).toBeTruthy()
      unmount()
    }
  })

  it('every lesson page renders without crashing and marks itself read', () => {
    for (const s of sections) {
      for (const l of s.lessons) {
        go(`#/section/${s.id}/lesson/${l.id}`)
        const { unmount } = render(<App />)
        expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(l.title)
        expect(screen.getByText('Check your understanding')).toBeTruthy()
        unmount()
      }
    }
    expect(getState().readLessons.length).toBe(sections.reduce((a, s) => a + s.lessons.length, 0))
  })

  it('progress, practice, diagnostic and settings pages render', () => {
    for (const [hash, text] of [
      ['#/progress', 'questions answered'],
      ['#/practice', 'Start set'],
      ['#/diagnostic', 'Begin diagnostic'],
      ['#/settings', 'Export backup (.json)'],
    ]) {
      go(hash)
      const { unmount } = render(<App />)
      expect(screen.getByText(text)).toBeTruthy()
      unmount()
    }
  })
})

describe('quiz flow', () => {
  it('lesson check: answer every question, see explanations, finish, and get a review with an attempt recorded', async () => {
    const user = userEvent.setup()
    const lesson = lessonById.get('math-geometry')!
    go(`#/section/${lesson.section}/lesson/${lesson.id}`)
    render(<App />)
    await user.click(screen.getByText('Start the check'))

    const total = Number(screen.getByText(/Question 1 of/).textContent!.match(/of (\d+)/)![1])
    expect(total).toBeGreaterThanOrEqual(5)

    for (let i = 0; i < total; i++) {
      expect(screen.getByText(`Question ${i + 1} of ${total}`)).toBeTruthy()
      const group = screen.getByRole('radiogroup')
      const choices = within(group).getAllByRole('radio')
      expect(choices).toHaveLength(4)
      await user.click(choices[0])
      // instant feedback shows an explanation
      expect(screen.getByText(/Correct\.|Not quite\./)).toBeTruthy()
      if (i < total - 1) await user.click(screen.getByText('Next →'))
    }
    await user.click(screen.getByText('Finish'))
    await user.click(screen.getByText('Yes, submit'))

    expect(screen.getByText(/\/ \d+ correct/)).toBeTruthy()
    expect(screen.getByText('Answer review')).toBeTruthy()
    const attempts = getState().attempts
    expect(attempts).toHaveLength(1)
    expect(attempts[0].mode).toBe('lesson-check')
    expect(attempts[0].items).toHaveLength(total)
    expect(attempts[0].items.every((it) => it.chosen === 0)).toBe(true)
  })

  it('timed practice set for reading shows the passage pane and grades at the end', async () => {
    const user = userEvent.setup()
    go('#/practice?section=reading&count=9&timed=1')
    render(<App />)
    await user.click(screen.getByText('Start set'))
    expect(screen.getByText(/remaining · 0\/9 answered/)).toBeTruthy()
    // passage pane present
    expect(document.querySelector('.passage')).toBeTruthy()
    expect(screen.getByText('Question 1 of 9')).toBeTruthy()
    // answer with keyboard shortcut and move on
    await user.keyboard('B')
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Question 2 of 9')).toBeTruthy()
    await user.click(screen.getByText('Submit answers'))
    await user.click(screen.getByText('Yes, submit'))
    expect(screen.getByText(/left blank/)).toBeTruthy()
    const at = getState().attempts[0]
    expect(at.timed).toBe(true)
    expect(at.mode).toBe('timed-section')
    expect(at.items[0].chosen).toBe(1)
  })

  it('diagnostic builds 40 questions in section order', async () => {
    const user = userEvent.setup()
    go('#/diagnostic')
    render(<App />)
    await user.click(screen.getByText('Begin diagnostic'))
    expect(screen.getByText('Question 1 of 40')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Go to question 40' })).toBeTruthy()
  })

  it('english passage questions highlight the current underlined portion', async () => {
    const user = userEvent.setup()
    go('#/practice?section=english&count=50&timed=1')
    render(<App />)
    await user.click(screen.getByText('Start set'))
    // jump to the last question, which is passage-based
    await user.click(screen.getByRole('button', { name: 'Go to question 50' }))
    expect(document.querySelector('.passage .ul.current')).toBeTruthy()
    expect(screen.getByText(/Refers to underlined portion/)).toBeTruthy()
  })
})

describe('settings', () => {
  it('renames the student and persists', async () => {
    const user = userEvent.setup()
    go('#/settings')
    render(<App />)
    const name = screen.getByLabelText('Name') as HTMLInputElement
    await user.clear(name)
    await user.type(name, 'Sam')
    expect(getState().profile.name).toBe('Sam')
    expect(JSON.parse(localStorage.getItem('act-prep:v1')!).profile.name).toBe('Sam')
  })
})
