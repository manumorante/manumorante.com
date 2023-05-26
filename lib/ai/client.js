import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: 'org-14jbDtx7Z2JtjiTrehN84Icv',
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function getCompletion(prompt) {
  const response = await openai.createCompletion({
    prompt,
    model: 'text-davinci-003',
    temperature: 0.7,
    max_tokens: 50,
  })

  const { choices } = response.data
  const { text } = choices[0]

  return text
}

