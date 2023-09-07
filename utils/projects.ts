import data from "@/public/projects.json"
import { Project } from "@/types"

export function getProjects(): Project[] {
  try {
    return data.projects.filter((project) => project.published)
  } catch (error) {
    console.error(error)
    return []
  }
}
