'use client'

import ask from 'lib/ai/ask'
import { useState } from 'react'

export default function PromptForm({ template = '', actionName = 'Enviar' }) {
  const [response, setResponse] = useState('')

  const mainCx = 'PromptForm'
  const templateCx = 'block w-full text-base'
  const formCx = 'w-full block mb-4 flex flex-col gap-4 items-end'
  const textareaCx =
    'block w-full p-3 rounded-lg border-2 sm:border-4 focus:outline-none resize-none bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 dark:bg-neutral-800 dark:border-neutral-600/50 dark:focus:bg-neutral-800 dark:focus:border-neutral-600'
  const buttonCx =
    'py-3 px-4 text-base rounded-lg  bg-neutral-300 dark:bg-neutral-700 text-neutral-500 font-semibold'
  const resultBoxCx = 'p-4 text-2xl text-neutral-500'

  function addUserPrompt(template, userPrompt) {
    if (!template) return userPrompt

    const promptIndex = template.indexOf('[[PROMPT]]')
    if (promptIndex === -1) return userPrompt

    const prompt = template.replace('[[PROMPT]]', userPrompt)

    return prompt
  }

  function normaliceValue(value) {
    return value
      .replace(/[\n\r]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const userPrompt = normaliceValue(e.target.promptInput.value)
    if (!userPrompt) return

    const prompt = addUserPrompt(template, userPrompt)
    const response = await ask({ prompt })
    setResponse(response)
  }

  return (
    <div className={mainCx}>
      <form className={formCx} onSubmit={onSubmit}>
        {template && (
          <details className={templateCx}>
            <summary>Template</summary>
            <p>{template}</p>
          </details>
        )}

        <textarea
          spellCheck={false}
          id='promptInput'
          className={textareaCx}
          type='text'
          autoComplete='off'
        />
        <button className={buttonCx} type='submit'>
          {actionName}
        </button>
      </form>
      <div className={resultBoxCx}>{response}</div>
    </div>
  )
}
