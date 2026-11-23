import { ProjectCover, ProjectLinks, ProjectSection } from '@/components/projects'
import { Footer, Tags } from '@/components/ui'
import { projects } from '@/data/projects'
import { lang, localePath } from '@/lib/lang'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link, Navigate, useParams } from 'react-router'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project?.page) return <Navigate to={localePath('/')} replace />

  const { name, page, tags, color } = project
  const withPage = projects.filter((p) => p.page)
  const next = withPage[(withPage.indexOf(project) + 1) % withPage.length]

  return (
    <>
      <nav className="container flex items-center justify-between py-8">
        <Link
          to={`${localePath('/')}#${project.id}`}
          className="text-primary flex items-center gap-2 font-medium">
          <ArrowLeftIcon className="h-5 w-5" />
          {lang === 'es' ? 'Proyectos' : 'Projects'}
        </Link>
        <a
          href={localePath(`/projects/${project.id}`, lang === 'es' ? 'en' : 'es')}
          className="text-primary font-medium">
          {lang === 'es' ? 'English' : 'Español'}
        </a>
      </nav>

      <header className="relative pb-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 blur-[80px]"
          style={{ backgroundColor: color.light }}
        />
        <div className="relative z-10">
          <div className="container py-10">
            <h1 className="text-dark dark:text-lightest text-4xl leading-none font-bold tracking-tight lg:text-6xl">
              {name}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-light sm:text-2xl">{page.intro[lang]}</p>
          </div>
          <div className="sm:container">
            <ProjectCover project={project} />
          </div>
          <div className="mt-8 px-5 sm:container">
            <Tags tags={tags} />
          </div>
        </div>
      </header>

      <main>
        {page.sections.map((section, index) => (
          <ProjectSection key={section.title.en} section={section} index={index} />
        ))}

        {page.stats && (
          <dl className="container grid gap-10 py-16 sm:grid-cols-3">
            {page.stats.map((stat) => (
              <div key={stat.label.en} className="flex flex-col-reverse gap-1">
                <dt className="text-xl font-light">{stat.label[lang]}</dt>
                <dd className="text-primary text-6xl font-bold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <section className="container py-16">
          <ProjectLinks project={project} />

          {next !== project && (
            <Link
              to={localePath(`/projects/${next.id}`)}
              className="text-dark dark:text-lightest mt-16 flex items-center gap-2 text-2xl font-medium">
              {lang === 'es' ? 'Siguiente proyecto' : 'Next project'}: {next.name}
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
