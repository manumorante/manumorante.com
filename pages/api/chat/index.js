import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: 'org-14jbDtx7Z2JtjiTrehN84Icv',
  apiKey: process.env.OPENAI_API_KEY,
})

if (!configuration.apiKey) {
  throw new Error('OPENAI_API_KEY is not set')
}

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  try {
    const openAIResponse = await openai.createCompletion({
      prompt: req.body.prompt,
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 50,
    })
    const { choices } = openAIResponse.data
    const { text } = choices[0]
    res.status(200).json({ data: { error: false, text } })
  } catch (error) {
    res.status(200).json({ data: { error: true, text: error.message } })
  }
}
