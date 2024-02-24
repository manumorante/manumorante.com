"use client"

import image from "../public/wave-sm.png"
const { src, width, height } = image

import cx from "clsx"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { useParallax } from "@/utils/parallax"

export default function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useParallax(scrollYProgress, 400)

  const mainCx = cx("Header relative")
  const containerCx = cx(
    "max-w-3xl mx-auto px-4 mm:px-6 pt-20 sm:pt-40 pb-20 sm:pb-40"
  )

  // Texts
  const hiCx = cx(
    "Hi",
    "w-0 sm:w-2/3", // To force the text to be in one line
    "text-7xl mm:text-8xl font-black leading-none",
    // Light
    "text-neutral-800 [&_strong]:text-neutral-500",
    //
    "dark:text-neutral-500 dark:[&_strong]:text-white"
  )
  const lookCx = cx(
    "Look pt-20 sm:pt-96 pb-20 text-5xl mm:text-6xl font-extralight"
  )

  // Parallax background
  const bgCx = cx(
    "absolute -z-10 top-0 w-full min-safe-h-screen grid place-items-center"
  )
  const imgCx = cx("w-full h-[400px] sm:h-[600px]")

  return (
    <div className={mainCx} ref={ref}>
      <div className={containerCx}>
        <h2 className={hiCx}>
          Hi, <strong>you are great</strong>
          {/* Hola, eres genial */}
        </h2>

        <h3 className={lookCx}>
          Now that you are here,
          <br />
          have a look
          {/* Ya que has venido, echa un vistazo */}
        </h3>
      </div>

      <div className={bgCx}>
        <motion.img
          className={imgCx}
          style={{ y }}
          src={src}
          width={width}
          height={height}
          alt="Background"
        />
      </div>
    </div>
  )
}
