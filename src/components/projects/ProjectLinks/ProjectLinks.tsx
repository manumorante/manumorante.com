import type { Project } from '@/components/projects/types'
import { ButtonLink } from '@/components/ui'
import { lang } from '@/lib/lang'
import { cuteUrl } from '@/lib/utils'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function ProjectLinks({ project }: { project: Project }) {
  const { url, repository } = project

  return (
    <div className="border-t-primary flex w-full flex-col gap-3 border-t-3 pt-5">
      <ButtonLink href={url} icon={<GlobeAltIcon />}>
        {cuteUrl(url)}
      </ButtonLink>

      {repository && (
        <ButtonLink href={repository} icon={<CodeBracketIcon />}>
          {lang === 'es' ? 'Ver código' : 'View code'}
        </ButtonLink>
      )}
    </div>
  )
}
