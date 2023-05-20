import { projects } from 'projects.json'
export default function handler(req, res) {
  const published = projects.filter((project) => project.published)
  res.status(200).json({ projects: published })
}
