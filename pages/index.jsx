import { PROJECTS } from '../public/data.js'

import React from 'react'
import ToggleDarkButton from '../components/app/ToggleDarkButton'

import Aside from '../components/ui/Aside'
import Content from '../components/ui/Content'
import Footer from '../components/ui/Footer'

import Avatar from '../components/user/Avatar'
import Projects from '../components/projects/List'
import Container from '../components/ui/Container'
import SocialList from '../components/social/List'

export async function getStaticProps() {
  const projects = PROJECTS.filter((project) => project?.show)
  return { props: { projects } }
}

export default function Home(props) {
  const { projects } = props

  return (
    <>
      <ToggleDarkButton />

      <Aside>
        <div className='sm:h-full flex flex-col justify-between px-10 pt-10 sm:p-10'>
          <Avatar />

          <div className='hidden sm:block'>
            <SocialList />
          </div>
        </div>
      </Aside>

      <Content>
        <div className='talk my-12'>
          <p>
            <span className='block'>¡Hola!,</span> soy <strong>Manu Morante</strong>, programador{' '}
            <strong>frontend</strong> en <strong>Domestika</strong>.
          </p>

          <p>
            He juntado en esta web algunas de las cosas que hago <strong>por diversión</strong>.
          </p>
        </div>
        <Projects projects={projects} />
      </Content>

      <Footer>
        <Container>
          <div className='sm:hidden py-12'>
            <SocialList />
          </div>
        </Container>
      </Footer>
    </>
  )
}
