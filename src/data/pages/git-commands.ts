import type { ProjectPageContent } from '@/components/projects/types'

export const gitCommands: ProjectPageContent = {
  intro: {
    en: 'In 2023 I built a Raycast extension to search Git commands and Oh My Zsh aliases without leaving the keyboard.',
    es: 'En 2023 hice una extensión de Raycast para buscar los comandos de Git y los alias de Oh My Zsh sin salir del teclado.',
  },
  sections: [
    {
      title: {
        en: 'From README to keyboard',
        es: 'Del README al teclado',
      },
      body: {
        en: 'Oh My Zsh’s Git aliases live in a table in its README. I brought them into Raycast, searchable by alias, command or description.',
        es: 'Los alias de Git de Oh My Zsh viven en una tabla de su README. Los llevé a Raycast para buscarlos por alias, comando o descripción.',
      },
    },
    {
      title: {
        en: 'Color warns you',
        es: 'El color avisa',
      },
      body: {
        en: 'Every command carries a dot: green if it only shows, blue if it changes something, red if it deletes.',
        es: 'Cada comando lleva un punto: verde si solo muestra, azul si cambia algo y rojo si borra.',
      },
      image: {
        src: '/projects/git-commands/color.jpg',
        alt: {
          en: 'Searching “remove”: every result is marked red',
          es: 'Búsqueda de «remove»: todos los resultados en rojo',
        },
      },
    },
    {
      title: {
        en: 'Commands, uncut',
        es: 'Comandos sin cortar',
      },
      body: {
        en: 'Some aliases hide a whole line of shell that the list cuts off. A side panel, one shortcut away, shows it in full and explains what it does.',
        es: 'Algunos alias esconden una línea entera de shell que la lista corta. Un panel lateral, a un atajo, la enseña completa y explica qué hace.',
      },
      image: {
        src: '/projects/git-commands/detail.jpg',
        alt: {
          en: 'The alias list with the detail panel open',
          es: 'La lista de alias con el panel de detalle abierto',
        },
      },
    },
    {
      title: {
        en: 'Search the way you think',
        es: 'Busca como piensas',
      },
      body: {
        en: 'Type “rebase auto” and git pull --rebase --autostash shows up, no dashes or exact order needed.',
        es: 'Escribes «rebase auto» y aparece git pull --rebase --autostash, sin guiones ni orden exacto.',
      },
    },
    {
      title: {
        en: 'Pin what you use most',
        es: 'Fija lo que más usas',
      },
      body: {
        en: 'Pinned aliases stay on top, and the last ones you copied show up right below.',
        es: 'Los alias fijados se quedan arriba y los últimos que copiaste salen justo debajo.',
      },
      image: {
        src: '/projects/git-commands/pinned.jpg',
        alt: {
          en: 'Pinned and recent aliases above the full list',
          es: 'Alias fijados y recientes encima de la lista completa',
        },
      },
    },
  ],
  stats: [
    { value: '2023', label: { en: 'launched', es: 'año de lanzamiento' } },
    { value: '234', label: { en: 'Git aliases', es: 'alias de Git' } },
    { value: '10K+', label: { en: 'installs', es: 'instalaciones' } },
  ],
}
