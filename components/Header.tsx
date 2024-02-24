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
  const y = useParallax(scrollYProgress, 200)

  const mainCx = cx("Header pt-16")

  // Texts
  const hiCx = cx(
    "Hi",
    "w-0 sm:w-2/3", // force one line
    "text-6xl mm:text-7xl font-black leading-none",
    // Light
    "text-neutral-800 [&_strong]:text-neutral-500",
    "dark:text-neutral-500 dark:[&_strong]:text-white"
  )
  const lookCx = cx(
    "Look",
    "pt-20 sm:py-24",
    "text-4xl mm:text-5xl font-extralight"
  )

  const imgCx = cx(
    "BgImg",
    "absolute z-0 top-0",
    "w-full",
    "h-[400px] max-h-[400px]"
  )

  return (
    <div className={mainCx} ref={ref}>
      <div className="container relative z-10">
        <p className={hiCx}>
          Hi, <strong>you are great</strong>
        </p>

        <p className={lookCx}>
          Now that you are here,
          <br />
          have a look
        </p>
      </div>

      <motion.img
        className={imgCx}
        style={{ y }}
        src={src}
        width={width}
        height={height}
        alt="Background"
      />
    </div>
  )
}
