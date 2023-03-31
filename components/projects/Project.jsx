import cx from 'clsx'
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import New from './New'
import Cover from './Cover'

export default function Project({ project }) {
  const url = project?.url || ''
  const cuteUrl = url.replace(/^https?:\/\//, '')

  const repository = project?.repository || '/'
  const cuteRepository = repository.split('/').at(-1)

  const mainCx = cx('Project', 'flex flex-col gap-4')
  const contentCx = cx('Content', 'px-6 lg:px-0')
  const nameCx = cx('Name', 'font-medium text-xl text-neutral-800 dark:text-neutral-100')
  const descriptionCx = cx('Description', 'text-xl text-neutral-600 dark:text-neutral-300 mb-4')
  const linkCx = cx('Link', 'block my-1 hover:underline underline-offset-1 text-neutral-400')
  const mediaCx = cx('Media', 'flex gap-1 items-center')
  const iconCx = cx('w-5 h-5 text-neutral-400')

  return (
    <div className={mainCx}>
      <a href={project?.url} target='_blank' rel='noreferrer'>
        <Cover alt={project?.name} image={project?.image} imageDark={project?.imageDark} />
      </a>

      <div className={contentCx}>
        {project.featured && <New />}

        <div className={nameCx}>{project.name}</div>
        <div className={descriptionCx}>{project.description}</div>

        {project?.url && (
          <a className={linkCx} href={url} target='_blank' rel='noreferrer'>
            <div className={mediaCx}>
              <GlobeAltIcon className={iconCx} />
              {cuteUrl}
            </div>
          </a>
        )}

        {project?.repository && (
          <a className={linkCx} href={project.repository} target='_blank' rel='noreferrer'>
            <div className={mediaCx}>
              <CodeBracketIcon className={iconCx} />
              {cuteRepository}
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
