#!/usr/bin/env node
const call_davinci = require('./call_davinci')
const {findCommandTemplate, explainCommandTemplate, askQuestionTemplate} = require('./prompts')

const description = 'revert back to a particular commit with git'
const findCommandPrompt = findCommandTemplate.replace('<use case>', description)

const command = 'git reset --hard <commit-hash>'
const explainCommandPrompt = explainCommandTemplate.replace('<command>', command)

const question = `About the following command: "git reset --hard <commit-hash>", is there a way to achieve the same thing in a way that's reversible?`
const askQuestionPrompt = askQuestionTemplate.replace('<question>', question)

// TODO: ask a follow-up question?
const prompt = askQuestionPrompt

async function sensei() {
  console.log(prompt)
  const result = await call_davinci(prompt)
  console.log(result)
}
sensei()