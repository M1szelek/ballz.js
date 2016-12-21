exports = module.exports = Point;

var Victor = require('victor');

function Point(positionX, positionY){
	this.position = new Victor(positionX, positionY);
}