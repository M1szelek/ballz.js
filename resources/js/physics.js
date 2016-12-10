exports = module.exports = Physics;

function Physics() {
  
};

Physics.prototype.moveObject = function(ball){
	ball.position = ball.position.add(ball.velocity);
}

Physics.prototype.isBallsCollide = function(ballOne, ballTwo){
	var distance = ballOne.position.distance(ballTwo.position);
	var sumRadius = ballOne.radius + ballTwo.radius;	
	return distance <= sumRadius;
}

Physics.prototype.isBallCollideObstacle = function(ballOne, ballTwo){
	var distance = ballOne.position.distance(ballTwo.position);
	var sumRadius = ballOne.radius + ballTwo.radius;	
	return distance <= sumRadius;
}