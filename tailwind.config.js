module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
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
      spacing: {
        sidebar: '210px',
      },
      aspectRatio: {
        og: '1200/628',
      },
    },
  },
  plugins: [],
}
