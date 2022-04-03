import { useEffect, useState } from 'react'

// Un simple JSON plano con las cosas que deseo mostar en mi porfolio.
// En principio tiene listados com el de links sociales o el de proyectos.
const DATA_PATH = '../data.json'

function parseData(data) {
  // Personal info
  //  ...

  // Social links
  function social() {
    if (!data.social) throw new Error('No social object found')
    if (data.social.length <= 0) throw new Error('social has no items')
    return data.social
  }

  // Projects
  function projects() {
    if (!data.projects) throw new Error('No projects object found')
    if (data.projects.length <= 0) throw new Error('Projects has no items')
    return data.projects
  }

  return {
    projects: projects(),
    social: social(),
  }
}

export function useData() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(DATA_PATH)
      .then((res) => res.json())
      .then((data) => {
        setData(parseData(data))
      })
  }, [])

  return data
}
