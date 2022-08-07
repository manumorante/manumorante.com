import { PROJECTS } from '../../public/data.js'

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({
      params: { id: project.id },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = PROJECTS.find((project) => project?.id === params.id)
  return { props: { project } }
}

export default function Project({ project }) {
  return <div>{project.name}</div>
}
