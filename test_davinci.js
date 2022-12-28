async function test_davinci() {
  const { Configuration, OpenAIApi } = require("openai")
  require('dotenv').config()
  const openai_key = process.env.OPENAI_API_KEY
  if (!openai_key) {
    return
  }
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(config)
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Dear recruiter",
    max_tokens: 300,
    temperature: 0,
  })
  console.log(response.data.choices[0].text)
}

test_davinci()
