import { PROJECTS } from '../public/data.js'

import React from 'react'
import UserCard from '../components/user/Card'
import SocialList from '../components/social/List'
import Projects from '../components/projects/List'

export async function getStaticProps() {
  const projects = PROJECTS.filter((project) => project?.show)
  return { props: { projects } }
}

export default function Home(props) {
  const { projects } = props
  return (
    <div className='grid grid-cols-1 md:grid-cols-[320px_auto] items-start'>
      <div className='p-10 bg-white h-full'>
        <UserCard />
        <SocialList />
      </div>

      <Projects projects={projects} />
    </div>
  )
}
