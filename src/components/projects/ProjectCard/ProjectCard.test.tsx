import { ProjectCard } from '@/components/projects'
import { render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

vi.mock('@/components/projects/ProjectCover', () => ({ default: () => <div /> }))
vi.mock('@/components/ui', () => ({
  Tags: ({ tags }: { tags: string[] }) => <span>{tags}</span>,
  ButtonLink: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

it('renders project card', () => {
  render(
    <ProjectCard
      project={{
        id: 'test',
        name: 'Test Project',
        description: 'Test Description',
        tags: ['React'],
        url: 'https://test.com',
        repository: 'https://github.com/test',
        image: { light: 'light.jpg' },
        color: { light: '#fff', dark: '#000' },
      }}
    />,
  )

  expect(screen.getByText('Test Project')).toBeInTheDocument()
  expect(screen.getByText('Test Description')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('test.com')).toBeInTheDocument()
  expect(screen.getByText('View code')).toBeInTheDocument()
})
