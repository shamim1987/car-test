var Car = function (){
  this.hello = 0
}

var Car = function (color, convertible) {
  this.speed = 0
  this.color = color
  this.convertible = convertible
}

Car.prototype.accelerate = function (num) {
  this.speed += num
}

Car.prototype.setColor = function(newColor) {
  this.color = newColor
  this.color = newColor
}


module.exports = Car
