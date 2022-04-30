import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'

const FILE_PATH =
  'https://raw.githubusercontent.com/manumorante/manumorante.com/main/data.json'

const myDataContext = createContext()

export function useMyData() {
  return useContext(myDataContext)
}

export default function AppProvider({ children }) {
  const [myData, setMyData] = useState(false)

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(FILE_PATH)
        .then((res) => res.data)
        .catch((err) => console.log(err))

      const social = result.social
      const projects = result.projects.filter((item) => item.show)

      setMyData({ projects, social })
    }

    fetchData()
  }, [])

  return (
    <myDataContext.Provider value={myData}>{children}</myDataContext.Provider>
  )
}
