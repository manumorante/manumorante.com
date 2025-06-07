import { formatDuration } from '@/lib/utils'
import type { ReactNode } from 'react'

type TimelineItemProps = {
  startDate: string
  endDate: string
  title: string
  subtitle?: string
  description: ReactNode
}

export default function TimelineItem({
  startDate,
  endDate,
  title,
  subtitle,
  description,
}: TimelineItemProps) {
  const start: Date = new Date(startDate)
  const end: Date = new Date(endDate)

  // Format date range to show only years
  const startYear: number = start.getFullYear()
  const endYear: number = end.getFullYear()
  const duration: string = formatDuration(start, end)
  const dateRange: string = `${startYear} – ${endYear}`

  return (
    <li className="relative before:absolute before:top-6 before:-left-[1.875rem] before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950">
      <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-500">
        {dateRange} <span className="font-medium text-neutral-400">({duration})</span>
      </h4>
      <h5 className="mb-2 font-bold">
        {title}
        {subtitle && <> - {subtitle}</>}
      </h5>
      <p className="text-sm/relaxed text-gray-700 dark:text-gray-300">{description}</p>
    </li>
  )
}
