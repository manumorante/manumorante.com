import React from 'react'
import New from './New'
import Name from './Name'
import Description from './Description'
import Cover from './Cover'
import ProjectLink from './Link'

export default function Project({ project }) {
  return (
    <div className='flex flex-col gap-4'>
      <a href={project?.url}>
        <Cover name={project?.name} image={project?.image} imageDark={project?.imageDark} />
      </a>

      <div className='px-6 lg:px-0'>
        <New project={project} />
        <Name project={project} />
        <Description project={project} />
        <ProjectLink url={project?.url} />
      </div>
    </div>
  )
}
