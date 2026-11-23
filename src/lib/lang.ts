export type Lang = 'en' | 'es'

export const lang: Lang = location.pathname.startsWith('/es') ? 'es' : 'en'

document.documentElement.lang = lang

/** Prefixes a path with /es when the target language is Spanish. */
export function localePath(path: string, target: Lang = lang) {
  if (target === 'en') return path
  return path === '/' ? '/es' : `/es${path}`
}
