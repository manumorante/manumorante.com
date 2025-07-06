import type { Project } from '../types'

export default function ProjectCover({ project }: { project: Project }) {
  if (!project.image) return null
  const imageLight = project.image.light
  const imageDark = project.image.dark

  return (
    <div className="ProjectCover aspect-og relative z-10 w-full overflow-hidden sm:rounded-2xl">
      <picture>
        {imageDark && <source srcSet={imageDark} media="(prefers-color-scheme: dark)" />}
        <img
          className="relative z-10 h-full w-full object-cover object-center"
          src={imageLight}
          width={1200}
          height={628}
          alt={`Image for ${project.name}`}
        />
      </picture>
    </div>
  )
}
