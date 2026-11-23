import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { expect, it, vi } from 'vitest'
import ProjectPage from './ProjectPage'

vi.mock('@/data/projects', async () => {
  const { mockProject } = await import('@/test/projectMock')
  return {
    projects: [
      {
        ...mockProject,
        id: 'with-page',
        name: 'With Page',
        page: {
          intro: { en: 'Intro text', es: 'Texto de entrada' },
          sections: [
            {
              title: { en: 'First section', es: 'Primera sección' },
              body: { en: 'First body', es: 'Primer cuerpo' },
            },
          ],
          stats: [{ value: '5', label: { en: 'editions', es: 'ediciones' } }],
        },
      },
      mockProject,
    ],
  }
})

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<p>Project list</p>} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>,
  )
}

it('renders the hero, sections, stats and links', () => {
  renderAt('/projects/with-page')

  expect(screen.getByRole('heading', { level: 1, name: 'With Page' })).toBeInTheDocument()
  expect(screen.getByText('Intro text')).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 2, name: 'First section' })).toBeInTheDocument()
  expect(screen.getByText('editions')).toBeInTheDocument()
  expect(screen.getByText('test.com')).toBeInTheDocument()
})

it('links back to the project card in the list', () => {
  renderAt('/projects/with-page')

  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#with-page')
})

it('switches language without leaving the project', () => {
  renderAt('/projects/with-page')

  expect(screen.getByRole('link', { name: 'Español' })).toHaveAttribute(
    'href',
    '/es/projects/with-page',
  )
})

it('redirects unknown projects to the list', () => {
  renderAt('/projects/unknown')

  expect(screen.getByText('Project list')).toBeInTheDocument()
})

it('redirects projects without a page to the list', () => {
  renderAt('/projects/test')

  expect(screen.getByText('Project list')).toBeInTheDocument()
})
