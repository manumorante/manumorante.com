const screens = {
  ms: "320px", // Mobile Small
  mm: "375px", // Mobile Medium
  ml: "425px", // Mobile Large
  sm: "768px", // Tablet
  md: "1024px", // Desktop
  lg: "1440px", // Large Desktop
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: screens,
    maxWidth: screens,
    extend: {
      aspectRatio: {
        og: "1200/628",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
}
