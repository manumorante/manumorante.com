import image from "../public/wave-sm.png"
const { src, width, height } = image

import cx from "clsx"

export default function Header() {
  const mainCx = cx("Header w-full h-screen py-10 sm:py-16")
  const textCx = cx("Text container relative z-10")
  const waveCx = cx("Wave", "absolute z-0 top-1/2 left-0", "w-full", "h-1/2")

  // Texts
  const hiCx = cx(
    "w-0 sm:w-2/3", // force one line
    "text-5xl mm:text-7xl font-black leading-none",
    // Light
    "text-neutral-800 [&_strong]:text-neutral-500",
    "dark:text-neutral-500 dark:[&_strong]:text-white"
  )
  const lookCx = cx("pt-20 sm:py-24", "text-4xl mm:text-5xl font-extralight")

  return (
    <div className={mainCx}>
      <div className={textCx}>
        <p className={hiCx}>
          Hi, <strong>you are great</strong>
        </p>

        <p className={lookCx}>
          Now that you are here,
          <br />
          have a look
        </p>
      </div>

      <img
        className={waveCx}
        src={src}
        width={width}
        height={height}
        alt="Background"
      />
    </div>
  )
}
