import cx from "clsx"
import { Project } from "@/types"
import Cover from "@/components/Cover"
import Link from "next/link"
import Image from "next/image"

export default function Project({ project }: { project: Project }) {
  const { name, description, url, image, imageDark } = project

  const sectionCx = cx("relative w-full h-[80vh] grid place-items-center")
  const bgCx = cx(
    "Image absolute right-0 bottom-0 left-0",
    "w-full h-full z-0 object-center object-cover",
    "blur-3xl opacity-20"
  )

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
    <section className={sectionCx}>
      <Image
        className={bgCx}
        alt=""
        src={project.image}
        width={1200}
        height={630}
      />
      <div className="container">
        <Link className={coverCx} href={url} target="_blank">
          <Cover alt={name} image={image} imageDark={imageDark} />
        </Link>

        <div className={contentCx}>
          <h3 className={nameCx}>
            <span>{name}</span>
          </h3>

          <h4 className={descriptionCx}>{description}</h4>
        </div>
      </div>
    </section>
  )
}
