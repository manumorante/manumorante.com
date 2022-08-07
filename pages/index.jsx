import { PROJECTS } from '../public/data.js'

import React from 'react'
import Main from '../components/Main'
import Projects from '../components/projects/List'

export async function getStaticProps() {
  const projects = PROJECTS.filter((project) => project?.show)
  return { props: { projects } }
}

export default function Home(props) {
  const { projects } = props
  return (
    <div className='md:grid md:grid-cols-[320px_auto] md:items-start'>
      <Main />
      <Projects projects={projects} />
    </div>
  )
}
