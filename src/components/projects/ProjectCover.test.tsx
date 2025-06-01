import { mockProject } from '@/test/projectMock'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import ProjectCover from './ProjectCover'

it('renders project cover', () => {
  render(<ProjectCover project={mockProject} />)

  expect(screen.getByRole('img')).toBeInTheDocument()
})
