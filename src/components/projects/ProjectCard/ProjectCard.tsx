import { ProjectCover } from '@/components/projects'
import type { Project } from '@/components/projects/types'
import { ExternalLink, Tag } from '@/components/ui'

export default function ProjectCard({ project }: { project: Project }) {
  const { name, description, tags, repository, url, color } = project

  return (
    <article className="relative grid place-items-center py-12 md:py-28">
      {color.light && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-[80px]"
          style={{ backgroundColor: color.light }}
        />
      )}

      <div className="relative z-10 container mx-auto space-y-5">
        <a className="block" href={url} target="_blank" rel="noopener noreferrer">
          <ProjectCover project={project} />
        </a>

        {/* Información del proyecto */}
        <div className="sm:px-2">
          <h3 className="text-dark dark:text-lightest text-xl font-medium">{name}</h3>
          <h4 className="text-gray dark:text-light text-xl font-light">{description}</h4>
        </div>

        {/* Etiquetas y enlace al repositorio */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          {repository && <ExternalLink href={repository}>View code</ExternalLink>}
        </div>
      </div>
    </article>
  )
}
