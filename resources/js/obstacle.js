exports = module.exports = Obstacle;

var Victor = require('victor');

function Obstacle(startX,startY,endX,endY){
	this.start = new Victor(startX,startY);
	this.end = new Victor(endX,endY);
}