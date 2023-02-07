# How to use it

## Set this up

- Step 1: Copy .env.example to .env and replace the OpenAI key (you'll need to sign up)
- Step 2: Run `npm install -g .`
- Step 3: Run `sensei`

## Find a command

sensei -c revert back to a particular commit with git

sensei -c nvm install a specific version of node

sensei -c npm install a package from the current working directory

## Explain a command

sensei -e

Enter a command to explain:

git reset --hard <commit-hash>

## Ask anything (TODO: use Codex?)

sensei -a

Ask sensei anything: how to install multiple versions of node

sensei -a

Ask sensei anything: syntax for error handling in JS

sensei -a

Ask sensei anything: how to resolve a merge conflict
