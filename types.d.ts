export interface Project {
  id: string
  name: string
  description: string
  url: string
  image: string
  imageDark?: string
  colors?: {
    light: string
    dark: string
  }
}

export interface Projects {
  projects: Project[]
}
