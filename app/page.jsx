// This can go to a server js I think.
import data from 'projects.json'
const projects = data.projects.filter((project) => project.published)

import Project from 'components/Project'

export default function Home() {
  if (projects?.length <= 0) return null

  const mainCx = 'Main relative z-20 bg-white dark:bg-slate-700'

  return (
    <main className={mainCx}>
      <div className='Projects'>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </main>
  )
}
