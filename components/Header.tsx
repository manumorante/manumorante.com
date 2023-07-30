"use client"

import image from "../public/wave-sm.png"
const { src, width, height } = image

import cx from "clsx"
import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance])
}

export default function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const y = useParallax(scrollYProgress, 300)

  const mainCx = cx("Header relative w-full")
  const containerCx = cx("max-w-3xl mx-auto px-4 mm:px-6 pt-20 pb-20")

  // Texts
  const hiCx = cx(
    "Hi",
    "w-0", // To force the text to be in one line
    "text-7xl mm:text-8xl font-black leading-none",
    // Light
    "text-neutral-800 [&_strong]:text-neutral-500",
    //
    "dark:text-neutral-500 dark:[&_strong]:text-white"
  )
  const lookCx = cx("Look pt-20 pb-20 text-5xl mm:text-6xl font-extralight")

  // Parallax background
  const bgCx = cx("fixed -z-10 inset-0 grid place-items-center")
  const imgCx = cx("w-full h-[400px]")

  return (
    <>
      <div className={bgCx}>
        <motion.img
          className={imgCx}
          style={{ y, opacity }}
          src={src}
          width={width}
          height={height}
          alt="Background"
        />
      </div>
      <div className={mainCx} ref={ref}>
        <div className={containerCx}>
          <h2 className={hiCx}>
            Hi, <strong>you are great</strong> for being here
            {/* Hola, eres genial por estar aquí */}
          </h2>

          <h3 className={lookCx}>
            Now that you are here,
            <br />
            have a look
            {/* Ya que has venido, echa un vistazo */}
          </h3>
        </div>
      </div>
    </>
  )
}
