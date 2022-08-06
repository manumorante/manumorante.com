import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'
const isProduction = process.env.NODE_ENV === 'production'
const local_file = '../../data.json'
const remote_file =
  'https://raw.githubusercontent.com/manumorante/manumorante.com/main/data.json'
const file = isProduction ? remote_file : local_file

const myDataContext = createContext()

export function useMyData() {
  return useContext(myDataContext)
}

export default function AppProvider({ children }) {
  const [myData, setMyData] = useState(false)

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(file)
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
