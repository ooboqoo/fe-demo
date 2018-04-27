const {Transform} = require('stream')

process.stdin
  .pipe(new Transform({
    transform (chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase())
    }
  }))
  .on('data', data => console.log(data))
  .pipe(process.stdout)
