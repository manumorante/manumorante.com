import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(start: Date, end: Date): string {
  let years: number = end.getFullYear() - start.getFullYear()
  let months: number = end.getMonth() - start.getMonth()

  // Ajustar si los meses son negativos
  if (months < 0) {
    years--
    months += 12
  }

  // Formatear la duración
  let duration: string = ''
  if (years > 0 && months > 0) {
    duration = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`
  } else if (years > 0) {
    duration = `${years} year${years !== 1 ? 's' : ''}`
  } else if (months > 0) {
    duration = `${months} month${months !== 1 ? 's' : ''}`
  }

  return duration
}
