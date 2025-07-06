import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  className?: string
  children: ReactNode
  icon?: ReactNode
}

export default function ButtonLink({ className, children, href, icon }: ButtonLinkProps) {
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex w-full items-center gap-2',
        'text-lg font-medium opacity-70 hover:opacity-100',
        'transition-opacity',
        className,
      )}>
      {icon && <span className="h-6 w-6 shrink-0">{icon}</span>}
      <span className="overflow-hidden text-nowrap text-ellipsis">{children}</span>
    </a>
  )
}
