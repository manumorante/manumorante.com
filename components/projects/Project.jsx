import React from 'react'
import New from './New'
import Name from './Name'
import Description from './Description'
import Cover from './Cover'
import Link from './Link'

export default function Project({ project }) {
  return (
    <div className='flex flex-col gap-4'>
      <Cover project={project} />

      <div className='px-6 lg:px-0'>
        <New project={project} />
        <Name project={project} />
        <Description project={project} />
        <Link project={project} />
      </div>
    </div>
  )
}
