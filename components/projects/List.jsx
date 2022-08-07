import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
  return (
    <div className='[Projects] flex flex-col gap-14 md:px-10 py-12'>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}
