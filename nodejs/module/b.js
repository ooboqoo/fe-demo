const a = require('./a')

a.count++

exports = {
  a: 123
}

module.exports = {
  name: 'b',
  count: 1
}

console.log(this)
