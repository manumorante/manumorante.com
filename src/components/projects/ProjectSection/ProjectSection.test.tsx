import type { ProjectPageSection } from '@/components/projects/types'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import ProjectSection from './ProjectSection'

const section: ProjectPageSection = {
  title: { en: 'From poster to screen', es: 'Del cartel a la pantalla' },
  body: { en: 'Section body', es: 'Cuerpo de la sección' },
  image: {
    src: '/projects/test/poster.jpg',
    alt: { en: 'Poster and website', es: 'Cartel y web' },
  },
}

it('renders the title, body and image', () => {
  render(<ProjectSection section={section} index={0} />)

  expect(screen.getByRole('heading', { name: 'From poster to screen' })).toBeInTheDocument()
  expect(screen.getByText('Section body')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Poster and website' })).toHaveAttribute(
    'src',
    '/projects/test/poster.jpg',
  )
})

it('keeps the image on the right on even sections', () => {
  render(<ProjectSection section={section} index={0} />)

  expect(screen.getByRole('img')).not.toHaveClass('md:order-first')
})

it('moves the image to the left on odd sections', () => {
  render(<ProjectSection section={section} index={1} />)

  expect(screen.getByRole('img')).toHaveClass('md:order-first')
})

it('renders a centered statement when there is no image', () => {
  const { container } = render(
    <ProjectSection section={{ ...section, image: undefined }} index={0} />,
  )

  expect(screen.queryByRole('img')).not.toBeInTheDocument()
  expect(container.firstChild).toHaveClass('text-center')
})
