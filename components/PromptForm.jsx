'use client'

import ask from 'lib/ai/ask'
import { useState } from 'react'

export default function PromptForm({ placeholder = '', template = '', actionName = 'Enviar' }) {
  const [response, setResponse] = useState('')

  const mainCx = 'PromptForm'
  const templateBoxCx = 'block w-full text-base'
  const templateCx = 'whitespace-pre-line'
  const formCx = 'w-full block mb-4 flex flex-col gap-4 items-end'
  const textareaCx =
    'block w-full p-3 rounded-lg border-2 sm:border-4 focus:outline-none resize-none bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 dark:bg-neutral-800 dark:border-neutral-600/50 dark:focus:bg-neutral-800 dark:focus:border-neutral-600'
  const buttonCx =
    'py-3 px-4 text-base rounded-lg  bg-neutral-300 dark:bg-neutral-700 text-neutral-500 font-semibold'
  const responseBoxCx = 'p-4'
  const responseCx = 'text-2xl text-neutral-500 whitespace-pre-line'

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
    setResponse(response.trim())
  }

  return (
    <div className={mainCx}>
      <form className={formCx} onSubmit={onSubmit}>
        {template && (
          <details className={templateBoxCx}>
            <summary>Template</summary>
            <div className={templateCx}>{template}</div>
          </details>
        )}

        <textarea
          placeholder={placeholder}
          defaultValue={placeholder}
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
      <div className={responseBoxCx}>
        <div className={responseCx}>{response}</div>
      </div>
    </div>
  )
}
