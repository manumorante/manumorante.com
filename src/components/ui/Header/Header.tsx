import { Avatar } from '@/components/ui'
import { cn } from '@/lib/cn'

export default function Header() {
  return (
    <div className="Header w-full py-14 sm:py-16">
      <div className="relative z-10 container">
        <div className="space-y-8">
          <Avatar />
          <p
            className={cn(
              'text-dark dark:text-lightest',
              'text-4xl lg:text-5xl',
              'leading-none font-bold tracking-tight',
            )}>
            Manu Morante{' '}
            <strong className="text-primary dark:text-primary block font-light">
              Frontend developer
            </strong>
          </p>

          <p className="max-w-lg text-xl font-light sm:text-2xl">
            Extensive experience in both product-based companies, focusing on scalable components,
            and consulting firms, where speed and reusability have been prioritized.
          </p>
        </div>
      </div>
    </div>
  )
}
