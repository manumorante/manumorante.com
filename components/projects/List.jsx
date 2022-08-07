import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
  return (
    <div className='[Projects] flex flex-col gap-20 md:px-10'>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}
