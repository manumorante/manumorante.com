module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    screens: {
      joseluis: '320px',
      manu: '390px',
      diego: '412px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        fadeIn: 'afadeIn var(--duration, 1s) ease-in-out forwards',
        fadeOut: 'afadeOut var(--duration, 1s) ease-in-out forwards',
      },

      spacing: {
        sidebar: '210px',
      },

      keyframes: () => ({
        afadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        afadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
}
