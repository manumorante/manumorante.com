import { getProjects } from "@/utils/projects"
import cx from "clsx"
import Project from "@/components/Project"

export default function Projects() {
  const projects = getProjects()

  const mainCx = cx("Projects grid grid-cols-1 gap-24 sm:gap-6")

  return (
    <div className={mainCx}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
