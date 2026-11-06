import type { Lang } from '@/lib/lang'

type ProjectImage = {
  light: string
  dark?: string
}

type ProjectColor = {
  light: string
  dark: string
}

export type Project = {
  id: string
  name: string
  image: ProjectImage
  color: ProjectColor
  description: Record<Lang, string>
  tags: string[]
  url: string
  repository: string
  featured?: boolean
}

export type ProjectsData = {
  projects: Project[]
}
