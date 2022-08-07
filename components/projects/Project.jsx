import React from 'react'
import Container from '../Container'
import New from './New'
import Name from './Name'
import Description from './Description'
import Cover from './Cover'
import Links from './Links.jsx'
import Link from './Link.jsx'

export default function Project({ project }) {
  return (
    <div className='flex flex-col gap-4'>
      <Container>
        <New project={project} />
        <Name project={project} />
      </Container>

      <div className='w-full max-w-3xl'>
        <Cover project={project} />
      </div>

      <Container>
        <Description project={project} />
        <Link project={project} />
      </Container>
    </div>
  )
}
