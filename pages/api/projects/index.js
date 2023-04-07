import { projects } from 'projects.js'
export default function handler(req, res) {
  const published = projects.filter((project) => project.published)
  res.status(200).json(published)
}
