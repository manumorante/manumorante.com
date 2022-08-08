import { PROJECTS } from '../public/data.js'

import React from 'react'
import cx from 'classnames'
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
    <>
      <div
        className={cx(
          '[Aside] md:fixed md:top-0 md:left-0',
          'md:w-[320px] md:h-full',
          'bg-white dark:bg-neutral-900 bg-[url("/waves.svg")] dark:bg-[url("/dark-waves.svg")] bg-[length:100%] bg-bottom bg-no-repeat'
        )}>
        <div className='md:h-full flex flex-col justify-between p-10'>
          <Main />

          <div className='hidden md:block'>
            <SocialList />
          </div>
        </div>
      </div>

      <div className='md:ml-[320px]'>
        <div className='md:p-14'>
          <Projects projects={projects} />
        </div>

        <Container>
          <div className='md:hidden py-12'>
            <SocialList />
          </div>
        </Container>
      </div>
    </>
  )
}
