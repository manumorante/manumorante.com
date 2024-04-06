import data from "@/public/projects.json"
import cx from "clsx"
import Project from "@/components/Project"

export default function Projects() {
  const projects = data?.projects || []

  const mainCx = cx("Projects")

  return (
    <div className={mainCx}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
