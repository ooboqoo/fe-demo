const EventEmitter = require('events')

const logger = {
  get log () { return (...args) => console.log(...args) },
  set log (value) { console.log(value) }
}

function handler1 () { logger.log('handler1') }
function handler2 () { logger.log('handler2') }
function handler3 () { logger.log('handler3') }
function handler4 () { logger.log('handler4') }

const emitter = new EventEmitter()

;[handler1, handler2, handler3, handler4].forEach(element => {
  emitter.on('event', element)
})

emitter.emit('event')
