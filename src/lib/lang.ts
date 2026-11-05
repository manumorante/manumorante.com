export type Lang = 'en' | 'es'

export const lang: Lang = location.pathname.startsWith('/es') ? 'es' : 'en'

document.documentElement.lang = lang
