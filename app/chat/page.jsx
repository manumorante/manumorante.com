'use client'

import cx from 'clsx'
import { Login, PromptForm } from 'components'
import { useEffect, useState } from 'react'

export default function Page() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (typeof localStorage === 'undefined') return
    if (localStorage.getItem('LOCAL_USERPASS') === process.env.NEXT_PUBLIC_USERPASS) {
      setIsAuth(true)
    }
  }, [])

  if (!isAuth) return <Login />

  const mainCx = cx(
    'Chat',
    'pt-8 pb-12 px-6 lg:px-0 sm:py-10 lg:py-14',
    'text-2xl font-extralight text-neutral-400 md:leading-relaxed'
  )
  const subtitleCx = cx('text-2xl font-light text-neutral-500 dark:text-neutral-300 mb-3')

  return (
    <div className={mainCx}>
      <h2 className={subtitleCx}>Consulta directa</h2>
      <PromptForm placeholder='difine cube at a glance' />

      <h2 className={subtitleCx}>Convierte a mi mi mi</h2>
      <PromptForm
        placeholder='Mi bicicleta llega antes que tu coche nuevo'
        template={`
Según los siguientes ejemplos, reemplaza las vocales por la letra 'i',

- La palabra 'que' se convierte en 'qui' en lugar de en 'qi' debido a que 'qi' no existe en castellano.
- A partir de la cuarta palabra, se dejan algunas vocales sin reemplazar.
- Si la frase es mayor de 6 palabras se corta y se añade 'mi mi mi' al final.

Responde solamente el texto que corresponde a la ultima 'Salida'.

Ejemplos:
Entrada: 'Hola, cómo estás?'
Salida: 'hili, kimi istis?'

Entrada: 'Al final tengo que volver a casa por el documento'
Salida: 'il finil tingui qui vilver a quisi mi mi mi'

Entrada: [[PROMPT]]
Salida:
    `}
      />

      <h2 className={subtitleCx}>Ejemplos donde responder con mi mi mi</h2>
      <PromptForm
        placeholder='new house'
        template={`List 3 short ironic sentences to annoy a friend on the subject [[PROMPT]]`}
      />
    </div>
  )
}
