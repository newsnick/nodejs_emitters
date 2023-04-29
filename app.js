// EventEmmiter vs EventTarget
const EventEmmiter = require('events')

const myEmmiter = new EventEmmiter()

const logDbConnection = () => {
  console.log('server connected')
}

myEmmiter.addListener('connected', logDbConnection)
myEmmiter.emit('connected')

// how to remove
// myEmmiter.removeListener("connected", logDbConnection);
// myEmmiter.off("connected", logDbConnection);
// myEmmiter.removeAllListeners("connected");
// myEmmiter.emit("connected");

// on()

myEmmiter.on('msg', (data) => {
  console.log('Got:', data)
})

myEmmiter.emit('msg', 'Hi! Get my message')

myEmmiter.once('off', () => {
  console.log('I will be called only once!')
})

myEmmiter.emit('off')
myEmmiter.emit('off')
myEmmiter.emit('off')
