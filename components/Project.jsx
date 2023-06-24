'use client'

import { motion } from 'framer-motion'
import cx from 'clsx'
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { New, Cover } from 'components'
import Link from 'next/link'

export default function Project({ project, index }) {
  const url = project?.url || ''
  const cuteUrl = url.replace(/^https?:\/\//, '')

  const repository = project?.repository || '/'
  const cuteRepository = repository.split('/').at(-1)

  const mainCx = 'Project'
  const contentCx = cx('Content', 'p-7 sm:p-9')
  const nameCx = cx(
    'Name',
    'flex items-center gap-2',
    'font-medium text-2xl text-slate-800 dark:text-slate-100'
  )
  const descriptionCx = cx(
    'Description',
    'text-2xl lg:text-xl text-slate-600 dark:text-slate-300 font-light mb-6'
  )
  const mediaCx = cx('Media', 'flex gap-1 items-center')
  const linkCx = cx(
    'Link',
    'block my-1 hover:underline underline-offset-2 text-md text-slate-400',
    mediaCx
  )
  const iconCx = cx('w-6 h-6 lg:w-5 lg:h-5 text-slate-400')

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <motion.article
      className={mainCx}
      initial={index === 0 ? variants.visible : variants.hidden}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}>
      <Link href={project?.url} target='_blank' rel='noreferrer'>
        <Cover alt={project?.name} image={project?.image} imageDark={project?.imageDark} />
      </Link>

      <div className={contentCx}>
        <h3 className={nameCx}>
          <span>{project.name}</span>
          {project.featured && <New />}
        </h3>

        <h4 className={descriptionCx}>{project.description}</h4>

        {project?.url && (
          <Link className={linkCx} href={url} target='_blank' rel='noreferrer'>
            <GlobeAltIcon className={iconCx} />
            {cuteUrl}
          </Link>
        )}

        {project?.repository && (
          <Link className={linkCx} href={project.repository} target='_blank' rel='noreferrer'>
            <CodeBracketIcon className={iconCx} />
            {cuteRepository}
          </Link>
        )}
      </div>
    </motion.article>
  )
}
