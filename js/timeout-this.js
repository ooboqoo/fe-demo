class Test {
  constructor () {
    this.name = 'a'
  }
  method1 () {
    setTimeout(() => console.log('method1', this.name), 20)
  }

  method2 () {
    ;((self) => {
      setTimeout(() => {
        console.log('method2-this', this.name)
        console.log('method2-self', self.name)
      }, 20)
    })(this)
  }

  method3 () {
    ;(function (self) {
      setTimeout(() => {
        console.log('method3-this', this.name)
        console.log('method3-self', self.name)
      }, 20)
    })(this)
  }
}

let test = new Test()

test.method1()
test.method2()
test.method3()
