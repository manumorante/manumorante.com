import { avatar } from '@/data/config'

export default function Header() {
  return (
    <div className="Header w-full py-10 sm:py-16">
      <div className="relative z-10 container mx-auto">
        <div className="space-y-8">
          <img
            className="Avatar block h-36 w-36 rounded-full"
            src={avatar.medium}
            width={144}
            height={144}
            loading="eager"
            alt="Manu Morante"
          />
          <p className="text-4xl leading-none font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
            Manu Morante <br />
            <strong className="font-extrabold text-neutral-500">Frontend developer</strong>
          </p>

          <p className="max-w-lg text-2xl font-light dark:text-neutral-200">
            Extensive experience in both product-based companies, focusing on scalable components,
            and consulting firms, where speed and reusability have been prioritized.
          </p>
        </div>
      </div>
    </div>
  )
}
