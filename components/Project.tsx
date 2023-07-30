import cx from "clsx"
import { Project } from "@/types"

import Cover from "@/components/Cover"
import Link from "next/link"

export default function Project({ project }: { project: Project }) {
  const { name, description, url, image, imageDark } = project

  const mainCx = cx("Project", "w-full h-auto sm:aspect-square")
  const coverCx = cx("Cover relative z-10 block w-full h-auto aspect-og")
  const contentCx = cx("py-6")
  const nameCx = cx(
    "Name",
    "flex items-center gap-2",
    "font-medium text-xl mm:text-2xl opacity-90"
  )

  const descriptionCx = cx(
    "Description",
    "text-xl mm:text-2xl lg:text-xl font-light opacity-60"
  )

  return (
    <article className={mainCx}>
      <Link className={coverCx} href={url} target="_blank">
        <Cover alt={name} image={image} imageDark={imageDark} />
      </Link>

      <div className={contentCx}>
        <h3 className={nameCx}>
          <span>{name}</span>
        </h3>

        <h4 className={descriptionCx}>{description}</h4>
      </div>
    </article>
  )
}
