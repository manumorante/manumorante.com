import cx from 'clsx'
// This can go to a server js I think.
import data from 'projects.json'
const projects = data.projects.filter((project) => project.published)
import { Header } from 'components'

import Project from 'components/Project'

export default function Home() {
  if (projects?.length <= 0) return null

  const mainCx = cx('Home max-w-3xl mx-auto grid grid-cols-1 gap-24 sm:gap-6 p-6 sm:p-0')

  return (
    <div className={mainCx}>
      <Header />
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </div>
  )
}
