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
  } else if (options.hasOwnProperty('e')) {
    console.log("Enter a command to explain: ")
    const command = promptSync("")
    const explainCommandPrompt = explainCommandTemplate.replace('<command>', command)
    prompt = explainCommandPrompt
  } else if (options.hasOwnProperty('c')) {
    console.log("Describe a command you want to find: ")
    const description = promptSync("")
    const findCommandPrompt = findCommandTemplate.replace('<use case>', description)
    prompt = findCommandPrompt
  } else {
    console.log("How to use sensei:")
    console.log("sensei -c to find a terminal command")
    console.log("sensei -e to explain a terminal command")
    console.log("sensei -a to ask sensei anything")
  }

  let result
  try {
    // console.log('Calling Davinci')
    if (prompt) {
      result = await call_davinci(prompt)
    }
  } catch(e) {
    console.log('Encountered an error! Please try again.')
  }
  if (result) {
    console.log(result)
  }
}
sensei()