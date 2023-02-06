const findCommandTemplate = `What's a good terminal command to use for the following use case?

Use case: <use case>

Command: `

const explainCommandTemplate = `Explain the following terminal command.

Command: <command>

Explanation: `

const askQuestionTemplate = `Answer the following question regarding a terminal command.

Question: <question>

Answer: `

module.exports = {findCommandTemplate, explainCommandTemplate, askQuestionTemplate}
