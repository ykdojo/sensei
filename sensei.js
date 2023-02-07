#!/usr/bin/env node
const call_davinci = require('./call_davinci')
const {findCommandTemplate, explainCommandTemplate, askQuestionTemplate} = require('./prompts')
const promptSync = require('prompt-sync')()

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -e or -a")
 .option("e", { alias: "explain", describe: "Explain a terminal command", type: "string", demandOption: false })
 .option("a", { alias: "ask", describe: "Ask anything", type: "string", demandOption: false })
 .argv;

async function sensei() {
  let prompt

  // TODO: When none of the correct flags are selected, explain the flags.
  if (options.hasOwnProperty('a')) {
    console.log("Ask sensei anything: ")
    const question = promptSync("")
    const askQuestionPrompt = askQuestionTemplate.replace('<question>', question)
    prompt = askQuestionPrompt
  }

  let result
  try {
    // console.log('Calling Davinci')
    result = await call_davinci(prompt)
  } catch(e) {
    console.log('Encountered an error! Please try again.')
  }
  console.log(result)
}
sensei()