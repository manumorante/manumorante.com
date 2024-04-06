import cx from "clsx"
import { Project } from "@/types"
import Cover from "@/components/Cover"
import Link from "next/link"

export default function ProjectItem({ project }: { project: Project }) {
  const mainCx = cx(
    "Project relative w-full grid place-items-center py-12 md:py-28"
  )
  const bgCx = cx(
    "Image absolute right-0 bottom-0 left-0",
    "w-full h-full z-0 object-center object-cover",
    "blur-3xl opacity-30"
  )

  const coverCx = cx(
    "ProjectCover",
    "relative z-10",
    "block w-full h-auto aspect-og mb-6",
    "rounded-lg sm:rounded-2xl overflow-hidden",
    { "bg-neutral-300": !project.image }
  )

  const coverStyle = project?.colors?.light
    ? { backgroundColor: project?.colors?.light }
    : {}

  const nameCx = cx(
    "Name",
    "flex items-center gap-2",
    "font-medium text-xl mm:text-2xl opacity-90"
  )

  const descriptionCx = cx(
    "Description",
    "text-xl mm:text-2xl lg:text-xl font-light opacity-60"
  )
  return (
    <article className={mainCx}>
      <div className={bgCx} style={coverStyle} />

      <div className="container">
        {project.url ? (
          <Link className={coverCx} href={project.url} target="_blank">
            <Cover
              alt={project.name}
              image={project.image}
              imageDark={project.imageDark}
            />
          </Link>
        ) : (
          <div className={coverCx}>
            <Cover
              alt={project.name}
              image={project.image}
              imageDark={project.imageDark}
            />
          </div>
        )}

        <h3 className={nameCx}>{project.name}</h3>
        <h4 className={descriptionCx}>{project.description}</h4>
      </div>
    </article>
  )
}
