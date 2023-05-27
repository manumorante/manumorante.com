'use client'

import { useState, useEffect } from 'react'

export default function Login() {
  const [password, setPassword] = useState('')

  useEffect(() => {
    const savedPassword = localStorage.getItem('password')
    if (savedPassword !== null) {
      setPassword(savedPassword)
    }
  }, [])

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password.trim() !== '') {
      localStorage.setItem('password', password)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Password' type='password' onChange={handleChange} />
    </form>
  )
}
