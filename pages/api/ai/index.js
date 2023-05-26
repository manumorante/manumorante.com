// Esta ruta (/chat) pasa directamente el prompt a la API de OpenAI, y devuelve la respuesta.
import { getCompletion } from 'lib/ai/client'

export default async function handler(req, res) {
  const text = await getCompletion(req.body.prompt)
  res.status(200).json({ data: { text } })
}
