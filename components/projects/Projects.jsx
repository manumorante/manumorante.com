var DB_JSON = 'https://raw.githubusercontent.com/manumorante/db/main/db.json'

import cx from 'clsx'
import { useEffect, useState } from 'react'
import Project from './Project'

export default function Projects() {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  const mainCx = cx('Projects', 'flex flex-col gap-20')

  useEffect(() => {
    if (loading || projects?.length > 0) return

    setLoading(true)

    fetch(DB_JSON)
      .then((response) => response.json())
      .then((data) => {
        if (data?.projects && data.projects.length) {
          const published = data.projects.filter((project) => project.published)
          setProjects(published)
          setLoading(false)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (projects?.length <= 0) return null

  return (
    <div className={mainCx}>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}
