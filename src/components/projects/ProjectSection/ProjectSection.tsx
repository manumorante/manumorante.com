import type { ProjectPageSection } from '@/components/projects/types'
import { cn } from '@/lib/cn'
import { lang } from '@/lib/lang'

export default function ProjectSection({
  section,
  index,
}: {
  section: ProjectPageSection
  index: number
}) {
  const { title, body, image } = section

  return (
    <section
      className={cn(
        'container py-16 sm:py-24',
        image ? 'grid items-center gap-8 md:grid-cols-2 md:gap-16' : 'text-center',
      )}>
      <div className={cn(!image && 'mx-auto max-w-4xl')}>
        <h2 className="text-dark dark:text-lightest text-5xl leading-[0.95] font-bold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
          {title[lang]}
        </h2>
        <p className={cn('mt-6 max-w-xl text-lg font-light sm:text-xl', !image && 'mx-auto')}>
          {body[lang]}
        </p>
      </div>

      {image && (
        <img
          className={cn('w-full rounded-2xl', index % 2 === 1 && 'md:order-first')}
          src={image.src}
          alt={image.alt[lang]}
          loading="lazy"
        />
      )}
    </section>
  )
}
