import cx from 'clsx'
import {
  Aside,
  Avatar,
  Content,
  Projects,
  Statement,
  Social,
  Footer,
  Container,
  ToggleDarkButton,
} from 'components'

export default function Home() {
  return (
    <>
      <Aside>
        <Avatar />
        <Social className='hidden sm:flex' />
      </Aside>

      <Content>
        <Statement />

        <div className='Projects flex flex-col gap-20 min-h-screen'>
          <Projects />
        </div>

        <Footer>
          <Container>
            <Social className='sm:hidden mt-12' />
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

      <ToggleDarkButton />
    </>
  )
}
