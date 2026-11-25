import { ProjectCover, ProjectLinks } from '@/components/projects'
import type { Project } from '@/components/projects/types'
import { Tags } from '@/components/ui'
import { cn } from '@/lib/cn'
import { lang, localePath } from '@/lib/lang'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

export default function ProjectCard({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  const { id, name, description, tags, url, color, page } = project
  const pagePath = localePath(`/projects/${id}`)

  return (
    <article
      id={id}
      className={cn(
        'relative pb-14',
        '[--project-text:oklch(from_var(--project-color)_0.45_c_h)]',
        'dark:[--project-text:oklch(from_var(--project-color)_0.8_c_h)]',
        className,
      )}
      style={{ '--project-color': color.light } as React.CSSProperties}>
      {color.light && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-[80px]"
          style={{ backgroundColor: color.light }}
        />
      )}

      <div className="relative z-10">
        <div className="sm:container">
          {page ? (
            <Link to={pagePath} className="block">
              <ProjectCover project={project} />
            </Link>
          ) : (
            <a className="block" href={url} target="_blank" rel="noopener noreferrer">
              <ProjectCover project={project} />
            </a>
          )}
        </div>

        <div className="container mt-10 mb-6">
          <h3 className="text-dark dark:text-lightest text-2xl font-medium">
            {page ? <Link to={pagePath}>{name}</Link> : name}
          </h3>
          <h4 className="dark:text-light text-xl font-light">{description[lang]}</h4>
        </div>

        <div className="px-5 sm:container">
          <Tags tags={tags} />
        </div>

        <div className="container mt-6">
          {page ? (
            <Link
              to={pagePath}
              className="flex border-t-(--project-color) text-(--project-text) items-center gap-2 border-t-3 pt-5 text-lg font-medium">
              {lang === 'es' ? 'Ver proyecto' : 'View project'}
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          ) : (
            <ProjectLinks project={project} />
          )}
        </div>
      </div>
    </article>
  )
}
