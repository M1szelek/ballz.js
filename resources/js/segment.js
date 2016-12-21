exports = module.exports = Segment;

var Point = require('./point.js');

function Segment(pointOneX,pointOneY,pointTwoX,pointTwoY){
	this.pointOne = new Point(pointOneX,pointOneY);
	this.pointTwo = new Point(pointTwoX,pointTwoY);
}