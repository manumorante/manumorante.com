import data from 'projects.json'
const projects = data.projects
import cx from 'clsx'
import Project from './Project'

export default function Projects({ className }) {
  const published = projects.filter((project) => project.published)
  if (published?.length <= 0) return null

  const mainCx = cx('Projects', className)

  return (
    <div className={mainCx}>
      {published.map((project, i) => (
        <Project key={i} index={i} project={project} />
      ))}
    </div>
  )
}
