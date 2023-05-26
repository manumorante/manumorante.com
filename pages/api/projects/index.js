import data from 'projects.json'
const projects = data.projects
export default function handler(req, res) {
  const published = projects.filter((project) => project.published)
  res.status(200).json({ projects: published })
}
