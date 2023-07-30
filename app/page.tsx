import { getProjects } from "@/utils/projects"
import cx from "clsx"

import Project from "@/components/Project"

export default function Home() {
  const projects = getProjects()

  const mainCx = cx(
    "Home max-w-3xl mx-auto grid grid-cols-1 gap-24 sm:gap-6 p-6 sm:p-0"
  )

  return (
    <div className={mainCx}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
