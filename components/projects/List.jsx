var DB_JSON = 'https://raw.githubusercontent.com/manumorante/db/main/db.json'

import React, { useEffect, useState } from 'react'
import Project from './Project'

export default function Projects() {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (loading || projects?.length > 0) return

    setLoading(true)

    fetch(DB_JSON)
      .then((response) => response.json())
      .then((data) => {
        if (data?.projects && data.projects.length) {
          setProjects(data.projects)
          setLoading(false)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (projects?.length <= 0) return null

  return (
    <div className='Projects flex flex-col gap-20'>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}
