# How to use it

## Set this up

- Step 0: Fork and clone this repo into your local env
- Step 1: Copy .env.example to .env and replace the OpenAI key (you'll need to sign up)
- Step 2: Run `npm install -g .`
- Step 3: Run `sensei`

## Troubleshooting

Note: I'm using node 17.9.1, npm 8.11.0.

If the above steps don't work, feel free to try the same node version.

## Find a command

sensei -c revert back to a particular commit with git

sensei -c

Describe a command you want to find: npm globally install a package from the current working directory

## Explain a command

sensei -e

Enter a command to explain: git reset --hard <commit-hash>

## Ask anything

sensei -a how to install multiple versions of node

sensei -a syntax for error handling in JS

sensei -a

Ask sensei anything: how to resolve a merge conflict
