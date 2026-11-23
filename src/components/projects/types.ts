import type { Lang } from '@/lib/lang'

type ProjectImage = {
  light: string
  dark?: string
}

type ProjectColor = {
  light: string
  dark: string
}

type Localized = Record<Lang, string>

export type ProjectPageSection = {
  title: Localized
  body: Localized
  image?: {
    src: string
    alt: Localized
  }
}

export type ProjectPageStat = {
  value: string
  label: Localized
}

export type ProjectPageContent = {
  intro: Localized
  sections: ProjectPageSection[]
  stats?: ProjectPageStat[]
}

export type Project = {
  id: string
  name: string
  image: ProjectImage
  color: ProjectColor
  description: Record<Lang, string>
  tags: string[]
  url: string
  repository?: string
  featured?: boolean
  page?: ProjectPageContent
}

export type ProjectsData = {
  projects: Project[]
}
