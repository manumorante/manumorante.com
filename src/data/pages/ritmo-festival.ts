import type { ProjectPageContent } from '@/components/projects/types'

export const ritmoFestival: ProjectPageContent = {
  intro: {
    en: 'Since 2023 I have run the website of RIT/MO, an electronic music festival in Granada, from start to finish: I decide what it needs, design it and build it.',
    es: 'Desde 2023 llevo la web de RIT/MO, un festival de música electrónica en Granada, de principio a fin: decido qué necesita, la diseño y la programo.',
  },
  sections: [
    {
      title: {
        en: 'From poster to web',
        es: 'Del cartel a la web',
      },
      body: {
        en: 'Each edition’s identity is made for posters. I translate it to the web and gather it in a design system of my own, built with Tailwind.',
        es: 'La identidad de cada edición nace para carteles. Yo la traduzco a la web y la recojo en un sistema de diseño propio con Tailwind.',
      },
    },
    {
      title: {
        en: 'Every question, one place',
        es: 'Todas las dudas, en un sitio',
      },
      body: {
        en: 'Getting there, where to stay, what a taxi costs: social media answers them one by one. I put it all on the site, in Spanish or English depending on the browser.',
        es: 'Cómo llegar, dónde dormir, cuánto cuesta el taxi: las redes lo contestan de una en una. Lo reuní todo en la web, en español o inglés según el navegador.',
      },
      image: {
        src: '/projects/ritmo-festival/languages.jpg',
        alt: {
          en: 'The website on a phone, in Spanish and in English',
          es: 'La web en el móvil, en español y en inglés',
        },
      },
    },
    {
      title: {
        en: 'Video without the wait',
        es: 'Vídeo sin esperas',
      },
      body: {
        en: 'Two sizes depending on the screen, a still image when an iPhone blocks autoplay, and a gallery that only loads when you reach it.',
        es: 'Dos tamaños según la pantalla, imagen fija si el iPhone bloquea la reproducción y una galería que solo carga cuando llegas a ella.',
      },
      image: {
        src: '/projects/ritmo-festival/video.jpg',
        alt: {
          en: 'The home page video on a computer and on a phone',
          es: 'El vídeo de portada en el ordenador y en el móvil',
        },
      },
    },
    {
      title: {
        en: 'A new site every year',
        es: 'Cada año, una web nueva',
      },
      body: {
        en: 'Each edition starts from a clean copy of the last one, with the stack up to date, and a Claude skill of mine loads the line-up in both languages.',
        es: 'Cada edición parte de una copia limpia de la anterior, con el stack al día, y una skill de Claude propia carga el cartel en los dos idiomas.',
      },
    },
  ],
  stats: [
    { value: '2023', label: { en: 'the year I started', es: 'año en que empecé' } },
    { value: '5', label: { en: 'editions built', es: 'ediciones construidas' } },
    { value: '2', label: { en: 'languages', es: 'idiomas' } },
  ],
}
