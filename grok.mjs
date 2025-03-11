console.log(`grok.mjs imported \nat ${Date}`);

const key = 'someSecretToken'
let hello = `hello world, at ${Date()}`

export {
    hello,
    key
}