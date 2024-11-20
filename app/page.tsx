import Header from "@/components/Header"
import Social from "@/components/Social"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main>
      <Header />

      <Projects />

      <Social />

      <div className="scroll-watcher"></div>
    </main>
  )
}
