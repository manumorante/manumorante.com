import { Avatar } from '@/components/ui'
import { cn } from '@/lib/cn'

export default function Header() {
  return (
    <div className="Header min-h-[80vh] w-full py-14 sm:pt-16 sm:pb-20">
      <div className="container space-y-8">
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

        <p className="[&_b]:text-primary max-w-lg text-xl font-light sm:text-2xl [&_b]:font-bold">
          I've learned that real value lies in those who know how to <b>build</b> relationships,{' '}
          <b>share</b> knowledge and <b>grow together with others</b>, not just in those who master
          the technology of the moment.
        </p>
      </div>
    </div>
  )
}
