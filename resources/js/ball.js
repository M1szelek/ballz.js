exports = module.exports = Ball;

var Victor = require('victor');

function Ball (radius, positionX, positionY, velocityX, velocityY) {
  this.radius = radius;
  this.position = new Victor(positionX, positionY);
  this.velocity = new Victor(velocityX, velocityY);
};