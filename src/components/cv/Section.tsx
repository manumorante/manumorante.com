import type { ReactNode } from 'react'

export type SectionProps = {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div>
      <div className="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      {children}
    </div>
  )
}
