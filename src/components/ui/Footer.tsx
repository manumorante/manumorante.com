import { cn } from '@/lib/utils'
import { BeakerIcon, BriefcaseIcon, CodeBracketIcon, PhotoIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

type ItemProps = {
  children: ReactNode
  href: string
}

function Item({ children, href }: ItemProps) {
  return (
    <a href={href} target="blank" rel="noopener" className="flex items-center gap-2 sm:gap-3">
      {children}
    </a>
  )
}

export default function Social() {
  return (
    <footer>
      <div className="Social">
        <div
          className={cn(
            'flex flex-col sm:flex-row',
            'w-full justify-around gap-6 py-12 sm:justify-center sm:gap-12',
            'text-lg font-medium',
          )}>
          <Item href="https://github.com/manumorante">
            <CodeBracketIcon className="h-6 w-6" />
            <span>Github</span>
          </Item>

          <Item href="https://codepen.io/manumorante">
            <BeakerIcon className="h-6 w-6" />
            <span>Codepen</span>
          </Item>

          <Item href="https://es.linkedin.com/in/manumorante">
            <BriefcaseIcon className="h-6 w-6" />
            <span>LinkedIn</span>
          </Item>

          <Item href="https://es.linkedin.com/in/manumorante">
            <PhotoIcon className="h-6 w-6" />
            <span>Instagram</span>
          </Item>
        </div>
      </div>

      <div className="py-10 sm:text-center">
        <p>Manu Morante</p>
      </div>
    </footer>
  )
}
