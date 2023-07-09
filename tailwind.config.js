module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    screens: {
      ms: '320px', // Mobile Small
      mm: '375px', // Mobile Medium
      ml: '425px', // Mobile Large
      sm: '768px', // Tablet
      md: '1024px', // Desktop
      lg: '1440px', // Large Desktop
    },
    extend: {
      aspectRatio: {
        og: '1200/628',
      },
    },
  },
  plugins: [],
}
