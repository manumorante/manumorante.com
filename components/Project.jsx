import cx from 'clsx'
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import New from 'components/New'
import Cover from 'components/Cover'

export default function Project({ project }) {
  const url = project?.url || ''
  const cuteUrl = url.replace(/^https?:\/\//, '')

  const repository = project?.repository || '/'
  const cuteRepository = repository.split('/').at(-1)

  const mainCx = cx('Project', 'flex flex-col gap-4')
  const coverCx = cx('mb-3')
  const contentCx = cx('Content', 'px-6 lg:px-0')
  const nameCx = cx(
    'Name',
    'flex items-center gap-2',
    'font-medium text-xl text-neutral-800 dark:text-neutral-100'
  )
  const descriptionCx = cx(
    'Description',
    'text-2xl lg:text-xl text-neutral-600 dark:text-neutral-300 font-light mb-6'
  )
  const linkCx = cx(
    'Link',
    'block my-1 hover:underline underline-offset-2 text-md text-neutral-400'
  )
  const mediaCx = cx('Media', 'flex gap-1 items-center')
  const iconCx = cx('w-6 h-6 lg:w-5 lg:h-5 text-neutral-400')

  return (
    <article className={mainCx}>
      <a className={coverCx} href={project?.url} target='_blank' rel='noreferrer'>
        <Cover alt={project?.name} image={project?.image} imageDark={project?.imageDark} />
      </a>

      <footer className={contentCx}>
        <div className={nameCx}>
          <span>{project.name}</span>
          {project.featured && <New />}
        </div>
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
      </footer>
    </article>
  )
}
