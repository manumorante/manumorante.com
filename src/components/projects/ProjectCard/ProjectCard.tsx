import { ProjectCover } from '@/components/projects'
import type { Project } from '@/components/projects/types'
import { ButtonLink, Tags } from '@/components/ui'
import { cn } from '@/lib/cn'
import { cuteUrl } from '@/lib/utils'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  const { name, description, tags, repository, url, color } = project

  return (
    <article className={cn('relative pb-14', className)}>
      {color.light && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-[80px]"
          style={{ backgroundColor: color.light }}
        />
      )}

      <div className="relative z-10">
        <div className="sm:container">
          <ProjectCover project={project} />
        </div>

        {/* Información del proyecto */}
        <div className="container mt-10 mb-6">
          <h3 className="text-dark dark:text-lightest text-2xl font-medium">{name}</h3>
          <h4 className="dark:text-light text-xl font-light">{description}</h4>
        </div>

        {/* Etiquetas y enlace al repositorio */}
        <div className="px-5 sm:container">
          <Tags tags={tags} />
        </div>

        <div className="container">
          <div className="border-t-primary mt-6 flex w-full flex-col gap-3 border-t-3 pt-2">
            <div className="border-separate"></div>
            <ButtonLink href={url} icon={<GlobeAltIcon />}>
              {cuteUrl(url)}
            </ButtonLink>

            <ButtonLink href={repository} icon={<CodeBracketIcon />}>
              View code
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  )
}
