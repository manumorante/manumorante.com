import { cn } from '@/lib/utils'

export default function Tag({ tag }: { tag: string }) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1',
        'text-sm font-medium text-gray-500 dark:text-gray-400',
        'backdrop-brightness-110',
        'dark:backdrop-brightness-50',
        // ' dark:bg-neutral-700/30',
      )}>
      {tag}
    </span>
  )
}
