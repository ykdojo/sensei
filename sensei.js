#!/usr/bin/env node
const prompt = require('prompt-sync')()
const call_davinci = require('./call_davinci')
const {prompt1, prompt2} = require('./prompts')

async function sensei() {
  console.log("yo I'm a bot")
  // console.log(prompt1)
  // console.log(prompt2)
  // console.log("anything you want to say to me?")
  // const user_input = prompt("")
  // const result = await call_davinci(user_input)
  // console.log(result)
}
sensei()