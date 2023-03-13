// conversation format: [{role: "user", content: prompt}]
async function callChatGPT(conversation) {
  const { Configuration, OpenAIApi } = require("openai");

  require('dotenv').config()
  const openai_key = process.env.OPENAI_API_KEY
  const configuration = new Configuration({
    apiKey: openai_key,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: conversation,
  });
  let result = completion.data.choices[0].message.content
  // Remove surrounding whitespaces from result
  result = result.trim()
  return result
}

module.exports = callChatGPT
