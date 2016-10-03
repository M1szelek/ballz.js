exports = module.exports = Ball;

var Victor = require('victor');

function Ball (positionX, positionY, velocityX, velocityY) {
  this.position = new Victor(positionX, positionY);
  this.velocity = new Victor(velocityX, velocityY);
};