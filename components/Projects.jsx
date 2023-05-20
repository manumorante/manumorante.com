import projectsJson from 'projects.json'
import Project from './Project'

export default async function Projects() {
  const published = projectsJson.filter((project) => project.published)

  if (published?.length <= 0) return null

  return (
    <>
      {published.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </>
  )
}
