exports = module.exports = Obstacle;

var Segment = require('../../resources/js/segment.js');

function Obstacle(startX,startY,endX,endY){
	this.segment = new Segment(startX,startY,endX,endY);
}