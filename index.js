const EventEmitter = require('events')

const myEmitter = new EventEmitter()

// console.log(myEmitter.getMaxListeners())

// myEmitter.setMaxListeners(1)

// console.log(myEmitter.getMaxListeners())

myEmitter.addListener('msg', () => {})
myEmitter.addListener('msg', () => {})
myEmitter.addListener('msg', () => {})
myEmitter.addListener('hi', () => {})
console.log(myEmitter.listenerCount('msg'))
