import React from 'react'
import Project from './Project'
import { projects } from '../../public/data.js'

export default function Projects() {
  if (!projects) return null

  return (
    <div className='[Projects] flex flex-col gap-14 md:px-10 py-12'>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}
