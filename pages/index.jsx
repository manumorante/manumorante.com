import cx from 'clsx'
import ToggleDarkButton from '../components/app/ToggleDarkButton'

import Statement from '../components/ui/Statement'
import Aside from '../components/ui/Aside'
import Content from '../components/ui/Content'
import Footer from '../components/ui/Footer'

import Avatar from '../components/ui/Avatar'
import Projects from '../components/projects/Projects'
import Container from '../components/ui/Container'
import SocialList from '../components/Social'

function Home() {
  return (
    <>
      <ToggleDarkButton />

      <Aside>
        <div
          className={cx(
            'px-8 sm:px-10 pt-10 sm:p-10 sm:h-full',
            'flex flex-col gap-10 justify-between'
          )}>
          <Avatar />
          <SocialList className='hidden sm:block' />
        </div>
      </Aside>

      <Content>
        <Statement />
        <Projects />
        <Footer>
          <Container>
            <SocialList className='sm:hidden mt-12' />
          </Container>

          <div
            className={cx('mt-12 mb-12', 'border-t border-neutral-200 dark:border-neutral-700')}
          />

          <Container>
            <p className={cx('mb-12', 'text-neutral-300 dark:text-neutral-500', 'text-center')}>
              © 2023 Manu Morante
            </p>
          </Container>
        </Footer>
      </Content>
    </>
  )
}

export default Home
