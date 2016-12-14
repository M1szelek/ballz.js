exports = module.exports = Physics;

function Physics() {
  
};

Physics.moveObject = function(ball){
	ball.position = ball.position.add(ball.velocity);
}

Physics.isBallsCollide = function(ballOne, ballTwo){
	var distance = ballOne.position.distance(ballTwo.position);
	var sumRadius = ballOne.radius + ballTwo.radius;	
	return distance <= sumRadius;
}

Physics.isBallCollideObstacle = function(ball, obstacle){

}