import { avatar } from '@/data/config'
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

export default function Info() {
  return (
    <div className="bg-gray-100 p-5 text-left md:col-span-4 lg:p-14 dark:bg-gray-900">
      <h1 className="leading-tighter mt-5 text-4xl font-extrabold lg:text-6xl">
        Manu
        <br />
        Morante
      </h1>
      <h2 className="mt-3 text-xl text-purple-600 dark:text-purple-500">
        Senior Frontend Developer
      </h2>
      <div className="-mx-5 mt-10 lg:-mx-16">
        <img src={avatar.large} className="inline-block lg:rounded-xs" alt="Manu Morante photo" />
      </div>
      <p className="mt-10 leading-relaxed text-balance text-gray-700 dark:text-gray-300">
        20+ years of frontend experience. Expert in React, TypeScript, HTML/CSS, and testing. Strong
        grasp of UI/UX, design systems, and scalable CSS (BEM, Sass, responsive design).
      </p>
      <div className="mt-10 space-y-5">
        <div className="flex items-center gap-5">
          <MapPinIcon className="h-6 w-6 text-purple-600 dark:text-purple-500" />
          <span className="truncate font-medium">Granada, Spain</span>
        </div>
        <div className="flex items-center gap-5">
          <DevicePhoneMobileIcon className="h-6 w-6 text-purple-600 dark:text-purple-500" />
          <span className="truncate font-medium">(+34) 600 00 00 00</span>
        </div>
        <div className="flex items-center gap-5">
          <EnvelopeIcon className="h-6 w-6 text-purple-600 dark:text-purple-500" />
          <a
            href="mailto:manu@estadologico.com"
            className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75">
            manu@example.com
          </a>
        </div>
        <div className="flex items-center gap-5">
          <GlobeEuropeAfricaIcon className="h-6 w-6 text-purple-600 dark:text-purple-500" />
          <a
            className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
            href="https://manumorante.com"
            target="_blank">
            manumorante.com
          </a>
        </div>
      </div>
    </div>
  )
}
