import { HumanDisclaimer } from '@/components/ui'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

const runCorrection = () => {
  for (let i = 0; i < 40; i++) act(() => vi.advanceTimersByTime(100))
}

it('shows the typo at rest but reads the corrected sentence to screen readers', () => {
  render(<HumanDisclaimer />)

  expect(screen.getByText('mitsakes')).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Manu is a human and can make mistakes.' }),
  ).toHaveAccessibleDescription(/Caught in review/)
})

it('corrects the typo when tapped and keeps it fixed while open', () => {
  render(<HumanDisclaimer />)

  fireEvent.click(screen.getByRole('button'))
  runCorrection()

  expect(screen.getByText('mistakes')).toBeInTheDocument()
  expect(screen.queryByText('mitsakes')).not.toBeInTheDocument()
})

it('puts the typo back after a tap outside closes it', () => {
  render(<HumanDisclaimer />)

  fireEvent.click(screen.getByRole('button'))
  runCorrection()
  fireEvent.pointerDown(document.body)
  runCorrection()

  expect(screen.getByText('mitsakes')).toBeInTheDocument()
})
