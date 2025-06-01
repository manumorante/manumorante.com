import { ProjectCard } from '@/components/projects'
import { projects } from '@/data/projects'
import './projects.css'

export default function Projects() {
  return (
    <div className="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
