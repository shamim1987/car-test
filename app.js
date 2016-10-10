var CarType = require('./car')

var yellowCar = new CarType('yellow', true)

console.log('yellow car speed is ' + yellowCar.speed)
console.log('yellow car color is ' + yellowCar.color)

// the methods that changed the given props
yellowCar.accelerate(40)
yellowCar.setColor('purple')
console.log('yellow car speed now is ' + yellowCar.speed)
console.log('yellow car new color is ' + yellowCar.color)
