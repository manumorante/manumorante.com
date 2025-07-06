import { cn } from '@/lib/cn'

export default function Tag({ tag }: { tag: string }) {
  return (
    <span
      className={cn(
        'rounded-full',
        'px-4 py-1 lg:px-3 lg:py-1',
        'text-lg lg:text-sm',
        'text-gray dark:text-light/70 font-medium',
        'backdrop-brightness-110',
        'dark:backdrop-brightness-50',
      )}>
      {tag}
    </span>
  )
}
