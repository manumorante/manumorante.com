import { ProjectCard } from '@/components/projects'
import { projects } from '@/data/projects'
import './projects.css'

export default function Projects() {
  return (
    <div className="Projects space-y-12 md:space-y-28">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} className="min-h-[90vh]" />
      ))}
    </div>
  )
}
