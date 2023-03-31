import React from 'react'
import ToggleDarkButton from '../components/app/ToggleDarkButton'

import Aside from '../components/ui/Aside'
import Content from '../components/ui/Content'
import Footer from '../components/ui/Footer'

import Avatar from '../components/user/Avatar'
import Projects from '../components/projects/List'
import Container from '../components/ui/Container'
import SocialList from '../components/social/List'

function Home() {
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
        </div>
        <Projects />
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

export default Home
