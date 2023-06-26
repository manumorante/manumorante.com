module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    screens: {
      ms: '320px',
      mm: '375px',
      ml: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      aspectRatio: {
        og: '1200/628',
      },
    },
  },
  plugins: [],
}
