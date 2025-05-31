import { cn } from '@/lib/utils'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type ExternalLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

export function ExternalLink({ className, children, href }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // Base styles
        'rounded-full px-3 py-1 text-sm font-medium',
        'inline-flex items-center gap-1',

        // Light mode
        'bg-gray-50/80 text-gray-600 hover:bg-gray-50/100',

        // Dark mode
        'dark:bg-gray-900/70 dark:text-gray-300 dark:hover:bg-gray-900/100',
        'dark:backdrop-brightness-50',

        // Custom classes
        className,
      )}>
      {children}
      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
    </a>
  )
}
