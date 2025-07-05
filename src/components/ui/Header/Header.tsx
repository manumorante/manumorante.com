import { avatar } from '@/data/config'
import { cn } from '@/lib/cn'

export default function Header() {
  return (
    <div className="Header w-full py-10 sm:py-16">
      <div className="relative z-10 container mx-auto">
        <div className="space-y-8">
          <img
            className="Avatar block h-36 w-36 rounded-full"
            src={avatar.medium}
            width={144}
            height={144}
            loading="eager"
            alt="Manu Morante"
          />
          <p
            className={cn(
              'text-dark dark:text-lightest',
              'text-4xl lg:text-5xl',
              'leading-none font-bold tracking-tight',
            )}>
            Manu Morante{' '}
            <strong className="text-accent dark:text-primary block font-light">
              Frontend developer
            </strong>
          </p>

          <p className="max-w-lg text-2xl font-light">
            Extensive experience in both product-based companies, focusing on scalable components,
            and consulting firms, where speed and reusability have been prioritized.
          </p>
        </div>
      </div>
    </div>
  )
}
