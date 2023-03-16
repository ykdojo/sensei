// conversation format: [{role: "user", content: prompt}]
async function callChatGPT(conversation) {
  const { Configuration, OpenAIApi } = require("openai");

  const dotenv = require('dotenv');
  const path = require('path');

  // Get the current directory
  const currentDirectory = path.dirname(require.main.filename);
  
  // Load the .env file from the current directory
  const envFilePath = path.join(currentDirectory, '.env');
  dotenv.config({ path: envFilePath });
  
  const openai_key = process.env.OPENAI_API_KEY
  const configuration = new Configuration({
    apiKey: openai_key,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: conversation,
  });
  let result = completion.data.choices[0].message.content
  // Remove surrounding whitespaces from result
  result = result.trim()
  return result
}

module.exports = callChatGPT
