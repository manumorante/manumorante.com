import { Projects } from '@/components/projects'
import { Footer, Header } from '@/components/ui'

export default function Home() {
  return (
    <main className="px-6">
      <Header />
      <Projects />
      <Footer />
    </main>
  )
}
