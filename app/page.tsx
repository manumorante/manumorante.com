import Image from "next/image"
import Header from "@/components/Header"
import Social from "@/components/Social"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />

      <Image
        className="Avatar block w-24 h-24 ml-8 sm:ml-auto sm:mr-auto mt-20 mb-10 sm:mb-20 rounded-full"
        src="https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256"
        width={128}
        height={128}
        loading="eager"
        alt="Manu Morante"
      />

      <Social />

      <footer className="Footer w-full py-20 text-center font-medium opacity-50">
        © 2023 Manu Morante
      </footer>
    </main>
  )
}
