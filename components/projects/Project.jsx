import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import New from './New'
import Cover from './Cover'

export default function Project({ project }) {
  const url = project?.url || ''
  const cuteUrl = url.replace(/^https?:\/\//, '')

  const repository = project?.repository || '/'
  const cuteRepository = repository.split('/').at(-1)

  return (
    <div className='flex flex-col gap-4'>
      <a href={project?.url} target='_blank' rel='noreferrer'>
        <Cover name={project?.name} image={project?.image} imageDark={project?.imageDark} />
      </a>

      <div className='px-6 lg:px-0'>
        {project.featured && <New />}

        <div className='flex gap-2 items-center'>
          <div className='font-medium text-xl text-neutral-800 dark:text-neutral-100'>
            {project.name}
          </div>
        </div>

        <div className='Description text-xl text-neutral-600 dark:text-neutral-300 mb-4'>
          {project.description}
        </div>

        {project?.url && (
          <div className='flex gap-1 text-neutral-400 items-center'>
            <GlobeAltIcon className='w-4 h-4' />
            <a
              className='block sm:inline-block hover:underline underline-offset-1'
              href={url}
              target='_blank'
              rel='noreferrer'>
              {cuteUrl}
            </a>
          </div>
        )}

        {project?.repository && (
          <div className='flex gap-1 text-neutral-400 items-center'>
            <CodeBracketIcon className='w-4 h-4' />
            <a
              className='block sm:inline-block hover:underline underline-offset-1'
              href={project.repository}
              target='_blank'
              rel='noreferrer'>
              {cuteRepository}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
