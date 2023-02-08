#!/usr/bin/env node
const call_davinci = require('./call_davinci')
const {findCommandTemplate, explainCommandTemplate, askQuestionTemplate} = require('./prompts')
const promptSync = require('prompt-sync')()

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -c, -e or -a")
 .option("c", { alias: "command", describe: "Find a terminal command", type: "array", demandOption: false })
 .option("e", { alias: "explain", describe: "Explain a terminal command", type: "array", demandOption: false })
 .option("a", { alias: "ask", describe: "Ask anything", type: "array", demandOption: false })
 .argv;

// Input:
//   options: an object containing the arguments
//   command: 'c', 'e', or 'a'
//   promptStr: a string to use to ask the user for input
// Output:
//   the string to use in the prompt
function getInput(options, command, promptStr) {
  let strToReturn
  if (options[command].length > 0) {
    strToReturn = options[command].join(' ')
  } else {
    console.log(promptStr)
    strToReturn = promptSync("")
  }
  return strToReturn
}

async function sensei() {
  let prompt

  // TODO: When none of the correct flags are selected, explain the flags.
  if (options.hasOwnProperty('a')) {
    const question = getInput(options, 'a', "Ask sensei anything: ")
    const askQuestionPrompt = askQuestionTemplate.replace('<question>', question)
    prompt = askQuestionPrompt
  } else if (options.hasOwnProperty('e')) {
    const command = getInput(options, 'e', "Enter a command to explain: ")
    const explainCommandPrompt = explainCommandTemplate.replace('<command>', command)
    prompt = explainCommandPrompt
  } else if (options.hasOwnProperty('c')) {
    const command = getInput(options, 'c', "Describe a command you want to find: ")
    const description = promptSync("")
    const findCommandPrompt = findCommandTemplate.replace('<use case>', description)
    prompt = findCommandPrompt
  } else {
    console.log("\nHow to use sensei:")
    console.log("")
    console.log("sensei -c to find a terminal command")
    console.log("sensei -e to explain a terminal command")
    console.log("sensei -a to ask sensei anything")
    console.log("")
    console.log("Example 1:")
    console.log("sensei -c revert back to a particular commit with git")
    console.log("")
    console.log("Example 2:")
    console.log("sensei -e")
    console.log("Enter a command to explain: git reset --hard <commit-hash>\n")
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