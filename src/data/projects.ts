import type { Project } from '@/components/projects/types'

export const projects: Project[] = [
  {
    id: 'should-i-play-zelda',
    name: 'Should I play Zelda?',
    image: {
      light: '/projects/should-i-play-zelda.jpg',
    },
    color: {
      light: '#1f6440',
      dark: '#04120b',
    },
    description: {
      en: 'A completely scientific, fan-made quiz. Every answer is valid. The result is inevitable.',
      es: 'Un test fan y completamente científico. Todas las respuestas valen. El resultado es inevitable.',
    },
    tags: ['AI', 'Claude', 'Vanilla JS', 'CSS', 'Animation'],
    url: 'https://should-i-play-zelda.vercel.app',
    repository: 'https://github.com/manumorante/should-i-play-zelda',
    featured: true,
  },
  {
    id: 'git-commands',
    name: 'Git Commands',
    image: {
      light: '/projects/git-commands.png',
    },
    color: {
      light: '#84C4E1',
      dark: '#22407B',
    },
    description: {
      en: 'Quickly use and learn Git commands and Oh My Zsh alias. Over 4,800 installations',
      es: 'Usa y aprende comandos de Git y alias de Oh My Zsh en un momento. Más de 4.800 instalaciones',
    },
    tags: ['TypeScript', 'Raycast', 'Git', 'Oh My Zsh'],
    url: 'https://www.raycast.com/manumorante/git-commands',
    repository: 'https://github.com/raycast/extensions/tree/main/extensions/git-commands',
    featured: true,
  },
  {
    id: 'minimalist-movie-posters',
    name: 'Minimalist Movie Posters',
    image: {
      light: '/projects/minimalist-movie-posters.jpg',
      dark: '/projects/minimalist-movie-posters.dark.jpg',
    },
    color: {
      light: '#6773a6',
      dark: '#630d00',
    },
    description: {
      en: 'Code that recreates, animates, and brings movie posters to life using only CSS.',
      es: 'Código que recrea, anima y da vida a carteles de cine usando solo CSS.',
    },
    tags: ['React', 'Tailwind', 'CSS', 'Animation', 'movies'],
    url: 'https://posters.manumorante.com',
    repository: 'https://github.com/manumorante/minimalist-movie-posters',
  },
  {
    id: 'csspen',
    name: 'CSS Pen',
    image: {
      light: '/projects/csspen.png',
    },
    color: {
      light: '#3b5998',
      dark: '#630d00',
    },
    description: {
      en: 'Famous logos recreated with step-by-step CSS animation.',
      es: 'Logos famosos recreados paso a paso con animación CSS.',
    },
    tags: ['Next', 'Supabase', 'TypeScript', 'Tailwind', 'CSS', 'Animation', 'Learning tool'],
    url: 'https://csspen.es',
    repository: 'https://github.com/manumorante/csspen.es',
  },
  {
    id: 'mordisco.club',
    name: 'Mordisco Club',
    image: {
      light: '/projects/mordisco-club.jpg',
    },
    color: {
      light: '#3615d1',
      dark: '#630d00',
    },
    description: {
      en: "Mordisco's photos and quotes made with Next.js SSR and Cloudinary.",
      es: 'Fotos y frases de Mordisco hechas con Next.js SSR y Cloudinary.',
    },
    tags: ['Next', 'Typescript', 'Cloudinary', 'Tailwind', 'Masonry'],
    url: 'https://mordisco.club',
    repository: 'https://github.com/manumorante/mordisco.club',
  },
  {
    id: 'polaroids',
    name: 'Polaroids',
    image: {
      light: '/projects/polaroids.jpg',
      dark: '/projects/polaroids.dark.jpg',
    },
    color: {
      light: '#6e9ec8',
      dark: '#630d00',
    },
    description: {
      en: 'Cute polaroid-style photos displayed cluttered on a table.',
      es: 'Bonitas fotos de estilo polaroid desordenadas sobre una mesa.',
    },
    tags: ['React', 'Vite', 'Tailwind', 'CSS grid', 'gallery tool'],
    url: 'https://polaroids.manumorante.com',
    repository: 'https://github.com/manumorante/polaroids',
    featured: true,
  },
  {
    id: 'iconate',
    name: 'Micro animaciones',
    image: {
      light: '/projects/iconate.png',
    },
    color: {
      light: '#6773a6',
      dark: '#630d00',
    },
    description: {
      en: 'Playing around with microinteractions using Framer Motion and its ability to animate SVG.',
      es: 'Jugando con microinteracciones usando Framer Motion y su capacidad de animar SVG.',
    },
    tags: ['React', 'Framer Motion', 'Tailwind', 'Heroicons', 'Clsx'],
    url: 'https://iconate.vercel.app/',
    repository: 'https://github.com/manumorante/iconate',
    featured: true,
  },
  {
    id: 'scenic',
    name: 'Scenic Movies',
    image: {
      light: '/projects/scenic.jpg',
    },
    color: {
      light: '#99bd72',
      dark: '#630d00',
    },
    description: {
      en: 'A sample DDD (Domain-Driven Design) application for movies.',
      es: 'Una aplicación de ejemplo sobre películas con DDD (Domain-Driven Design).',
    },
    tags: ['React', 'clean-architecture'],
    url: 'https://scenic.manumorante.com',
    repository: 'https://github.com/manumorante/scenic',
  },
  {
    id: 'masonry',
    name: 'Galería de fotos Masonry',
    image: {
      light: '/projects/masonry.jpg',
    },
    color: {
      light: '#4a90e2',
      dark: '#2c3e50',
    },
    description: {
      en: 'A nice photo gallery that takes advantage of CSS Grid.',
      es: 'Una bonita galería de fotos que aprovecha CSS Grid.',
    },
    tags: ['React', 'Vite', 'css', 'grid', 'masonry'],
    url: 'https://masonry.manumorante.com',
    repository: 'https://github.com/manumorante/masonry',
  },
  {
    id: 'sor',
    name: 'Streets of Rage',
    image: {
      light: '/projects/sor.png',
    },
    color: {
      light: '#e74c3c',
      dark: '#c0392b',
    },
    description: {
      en: 'Intro scene of the wonderful Sega Megadrive game Streets of Rage created and animated with code.',
      es: 'La escena de introducción del maravilloso juego Streets of Rage de Sega Megadrive, creada y animada con código.',
    },
    tags: ['retro', 'game', 'css', 'animation'],
    url: 'https://streets-of-rage.manumorante.com',
    repository: 'https://github.com/manumorante/streets-of-rage',
  },
  {
    id: 'mimimi',
    name: 'Mi mi mi',
    image: {
      light: '/projects/mimimi.jpg',
      dark: '/projects/mimimi.dark.jpg',
    },
    color: {
      light: '#dec38a',
      dark: '#630d00',
    },
    description: {
      en: 'Turns text into "mi mi mi" so you can share it as a link.',
      es: 'Convierte texto a "mi mi mi" y compártelo como enlace a alguien.',
    },
    tags: ['Rect', 'TypeScript', 'funny', 'mimificador'],
    url: 'https://mimimi.manumorante.com',
    repository: 'https://github.com/manumorante/mimimi',
  },
  {
    id: 'raycast/ds-utilities',
    name: 'Raycast DS Utility',
    image: {
      light: '/projects/ds-utilities.jpg',
      dark: '/projects/ds-utilities.dark.jpg',
    },
    color: {
      light: '#e7c2b5',
      dark: '#630d00',
    },
    description: {
      en: 'Raycast Extension to manipulate DS Utilities classes.',
      es: 'Extensión de Raycast para manipular clases de utilidades de DS.',
    },
    tags: ['raycast', 'tool', 'css', 'ds'],
    url: 'https://manumorante.github.io/raycast-ds-utilities',
    repository: 'https://github.com/manumorante/raycast-ds-utilities',
  },
] as const
