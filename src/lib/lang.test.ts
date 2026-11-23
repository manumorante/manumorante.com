import { expect, it } from 'vitest'
import { localePath } from './lang'

it('keeps English paths as they are', () => {
  expect(localePath('/projects/ritmo-festival', 'en')).toBe('/projects/ritmo-festival')
})

it('prefixes Spanish paths with /es', () => {
  expect(localePath('/projects/ritmo-festival', 'es')).toBe('/es/projects/ritmo-festival')
})

it('maps the Spanish home to /es', () => {
  expect(localePath('/', 'es')).toBe('/es')
})

it('uses the current language by default', () => {
  expect(localePath('/projects/ritmo-festival')).toBe('/projects/ritmo-festival')
})
