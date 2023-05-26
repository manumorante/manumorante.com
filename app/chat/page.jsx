'use client'

import cx from 'clsx'

import { PromptForm } from 'components'

export default function Page() {
  const mainCx = cx(
    'Chat',
    'pt-8 pb-12 px-6 lg:px-0 sm:py-10 lg:py-14',
    'text-2xl font-extralight text-neutral-400 md:leading-relaxed'
  )
  const subtitleCx = cx('text-2xl font-light text-neutral-500 dark:text-neutral-300 mb-3')

  return (
    <div className={mainCx}>
      <h2 className={subtitleCx}>Consulta directa</h2>
      <PromptForm />

      <h2 className={subtitleCx}>Convierte a "mimimi"</h2>
      <PromptForm
        template={`Aprende de este ejemplo donde se convierte texto reemplazando las vocales por la letra i pero de forma que se lea correcto. Responde solamente el texto que corresponde a la ultima respuesta:
Prompt: Hola, cómo estás?
Respuesta: hili, kimi istis?
Prompt: [[PROMPT]]
Respuesta: `}
      />
    </div>
  )
}
