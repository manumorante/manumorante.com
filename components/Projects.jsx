import { meta } from 'config'

import Project from './Project'

async function getProjects() {
  const res = await fetch(meta.projects.url)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Projects() {
  const { projects } = await getProjects()
  const published = projects.filter((project) => project.published)

  if (published?.length <= 0) return null

  return (
    <>
      {published.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </>
  )
}
