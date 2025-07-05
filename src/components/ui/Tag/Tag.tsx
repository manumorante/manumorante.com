import { cn } from '@/lib/cn'

export default function Tag({ tag }: { tag: string }) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1',
        'text-gray dark:text-light/70 text-sm font-medium',
        'backdrop-brightness-110',
        'dark:backdrop-brightness-50',
      )}>
      {tag}
    </span>
  )
}
