export interface Project {
  id: string
  name: string
  description: string
  url: string
  image: string
  imageDark: string
}

export interface Projects {
  projects: Project[]
}
