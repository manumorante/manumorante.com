import { Avatar } from '@/components/ui'
import { cn } from '@/lib/cn'
import { lang } from '@/lib/lang'

export default function Header() {
  return (
    <div className="Header min-h-[80vh] w-full py-14 sm:pt-16 sm:pb-20">
      <div className="container space-y-8">
        <div className="flex items-start justify-between">
          <Avatar />
          <a href={lang === 'es' ? '/' : '/es'} className="text-primary font-medium">
            {lang === 'es' ? 'English' : 'Español'}
          </a>
        </div>
        <p
          className={cn(
            'text-dark dark:text-lightest',
            'text-4xl lg:text-5xl',
            'leading-none font-bold tracking-tight',
          )}>
          Manu Morante{' '}
          <strong className="text-primary dark:text-primary block font-light">
            {lang === 'es' ? 'Desarrollador frontend' : 'Frontend developer'}
          </strong>
        </p>

        <p className="[&_b]:text-primary max-w-lg text-xl font-light sm:text-2xl [&_b]:font-bold">
          {lang === 'es' ? (
            <>
              He aprendido que una interfaz tiene que funcionar bien y <b>sentirse bien</b>. Conecto
              diseño y código, creo mis propias herramientas <b>con IA</b> y{' '}
              <b>comparto lo que aprendo</b> con el equipo.
            </>
          ) : (
            <>
              I've learned that an interface has to work well and <b>feel right</b>. I connect
              design and code, build my own tools <b>with AI</b>, and <b>share what I learn</b> with
              the team.
            </>
          )}
        </p>
      </div>
    </div>
  )
}
