import { Statement, Projects } from 'components'

export default function Home() {
  return (
    <>
      <Statement />

      <div className='Projects flex flex-col gap-20 min-h-screen'>
        <Projects />
      </div>
    </>
  )
}
