var data = { a: 1 }

var vm = new Vue({
  el: '#example',
  data: data
})

vm.a = 2
console.log('vm.a = 2, data.a: ' + data.a) // => 2

data.a = 3
console.log('data.a = 3, v.a: ' + vm.a) // => 3

vm.b = 'hi'
console.log('vm.b = "hi", vm.b: ' + vm.b) 
console.log('data.b: ' + data.b) //not work, not reactive

console.log('vm.a === data.a: ' + (vm.a === data.a)) //true

console.log('vm.$data === data: ' + (vm.$data === data)) // => true

console.log(vm.$el === document.getElementById('example'))

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue ({
  el: '#app',
  data: obj
})

new Vue ({
  data: {
    a: 1
  },
  created: function () {
    console.log('a: ' + this.a)
  }
})
