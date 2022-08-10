import { useEffect, useState } from 'react'

export function useDark() {
  const [isDark, setIsDark] = useState(false)

  const updateDark = (dark) => {
    localStorage.setItem('dark', dark)
    document.documentElement.classList.toggle('dark', dark)
    setIsDark(dark)
  }

  const checkDark = () => {
    // Check if localStorage 'dark' is set
    if (localStorage.getItem('dark') !== null) {
      return localStorage.getItem('dark') === 'true'
    }

    // Check system dark mode
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const toggleDark = () => updateDark(!checkDark())
  
  const clean = () => {
    localStorage.removeItem('dark')
    document.documentElement.classList.remove('dark')
    setIsDark(false)
  }

  useEffect(() => {
    updateDark(checkDark())
  }, [])

  return [isDark, toggleDark, clean]
}
