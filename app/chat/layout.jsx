'use client'

import { Login } from 'components'

export default function Layout({ children }) {
  const savedPassword = localStorage.getItem('password')
  if (savedPassword !== process.env.PASSWORD) {
    return <Login />
  }

  return children
}
