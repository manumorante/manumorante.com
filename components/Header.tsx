import Image from "next/image"

import cx from "clsx"

export default function Header() {
  const mainCx = cx("Header w-full py-10 sm:py-16")

  return (
    <div className={mainCx}>
      <div className="container relative z-10">
        <div className="space-y-8">
          <Image
            className="Avatar block w-24 h-24 rounded-full"
            src="https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256"
            width={128}
            height={128}
            loading="eager"
            alt="Manu Morante"
          />
          <p className="text-4xl tracking-tight text-neutral-800 dark:text-neutral-200 font-extrabold leading-none">
            Manu Morante <br />
            <strong className="text-neutral-500 font-extrabold">
              Frontend developer
            </strong>
          </p>

          <p className="text-2xl dark:text-neutral-200 font-light max-w-sm">
            Extensive experience in both product-based companies, focusing on
            scalable components, and consulting firms, where speed and
            reusability have been prioritized.
          </p>
        </div>
      </div>
    </div>
  )
}
