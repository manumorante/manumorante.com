export default async function ask({ prompt }) {
  const response = await fetch('/api/ai', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const { data } = await response.json()

  // return
  if (data.error) {
    return data.text
  }

  return data.text
}
