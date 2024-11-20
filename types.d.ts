export interface Project {
  id: string
  name: string
  description: string
  url: string
  image: string
  repository: string
  tags: Array<string>
  imageDark?: string
  colors?: {
    light: string
    dark: string
  }
}

export interface Projects {
  projects: Project[]
}
