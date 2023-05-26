'use client'
import { useState } from 'react'

import cx from 'clsx'
export default function Chat() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const mainCx = cx(
    'Chat',
    'pt-8 pb-12 px-6 lg:px-0 sm:py-10 lg:py-14',
    'text-2xl font-extralight text-neutral-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-neutral-500 dark:text-neutral-300'
  const inputCx = 'w-full px-3 py-2 bg-neutral-600 rounded-md'

  const handleOnSubmit = (e) => {
    e.preventDefault()

    fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (data.error) {
          setResponse(data.text)
        } else {
          setResponse(data.text)
        }
      })
  }

  return (
    <h1 className={mainCx}>
      <strong className={strongCx}>Chat</strong>.
      <form className='w-full' onSubmit={handleOnSubmit}>
        <input className={inputCx} type='text' onChange={(e) => setPrompt(e.target.value)} />
        <button type='submit'>Enviar</button>
      </form>
      <div className='p-4'>{response}</div>
    </h1>
  )
}
