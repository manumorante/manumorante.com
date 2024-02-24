import { getProjects } from "@/utils/projects"
import cx from "clsx"
import Project from "@/components/Project"

export default function Projects() {
  const projects = getProjects()

  const mainCx = cx("Projects grid grid-cols-1")

  return (
    <div className={mainCx}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
