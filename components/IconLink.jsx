import cx from 'clsx'
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function IconLink({ url, repo = false }) {
  if (!url) return null

  const cute = url.replace(/^https?:\/\//, '')

  const mainCx = cx(
    'IconLink',
    'block my-1 hover:underline underline-offset-2',
    'text-md text-slate-400',
    'flex gap-1 items-center'
  )
  const iconCx = 'w-6 h-6 lg:w-5 lg:h-5 text-inherit'

  return (
    <a className={mainCx} href={url} target='_blank' rel='noreferrer'>
      {repo && <CodeBracketIcon className={iconCx} />}
      {repo || <GlobeAltIcon className={iconCx} />}
      <span>{cute}</span>
    </a>
  )
}
