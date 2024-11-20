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
    "pointer-events-none",
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
    "font-medium text-2xl dark:text-neutral-200"
  )

  const descriptionCx = cx(
    "Description",
    "text-2xl font-light dark:text-neutral-200",
    "mb-3"
  )

  const tagCx = cx(
    "Tag",
    "text-sm font-medium text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full"
  )

  const repoCx = cx("Repo", "ml-3 dark:text-neutral-200")
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

        <div className="Tags flex flex-wrap gap-2 mt-4 items-center">
          {project.tags.map((tag) => (
            <span key={tag} className={tagCx}>
              {tag}
            </span>
          ))}

          <Link className={repoCx} href={project.repository} target="_blank">
            View code →
          </Link>
        </div>
      </div>
    </article>
  )
}
