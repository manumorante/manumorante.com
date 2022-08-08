import { PROJECTS } from '../public/data.js'

import React from 'react'
import Main from '../components/Main'
import Projects from '../components/projects/List'
import SocialList from '../components/social/List'
import Container from '../components/Container.jsx'

export async function getStaticProps() {
  const projects = PROJECTS.filter((project) => project?.show)
  return { props: { projects } }
}

export default function Home(props) {
  const { projects } = props
  return (
    <div className='md:grid md:grid-cols-[320px_auto] md:items-start'>
      <div>
        <Main />
        <div className='hidden md:block'>
          <SocialList />
        </div>
      </div>
      <div>
        <Projects projects={projects} />
        <Container>
          <div className='md:hidden py-12'>
            <SocialList />
          </div>
        </Container>
      </div>
    </>
  )
}
