import type { ReactNode } from 'react'

type ListProps = {
  title?: string
  children: ReactNode
}
export default function List({ title, children }: ListProps) {
  return (
    <div className="List mt-2">
      {title && <p className="uppercase">{title}</p>}
      <ul className="ml-4 list-inside list-disc">{children}</ul>
    </div>
  )
}
