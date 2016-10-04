exports = module.exports = Physics;

function Physics() {
  
};

Physics.prototype.moveObject = function(ball){
	ball.position = ball.position.add(ball.velocity);
}

Physics.prototype.isCollide = function(ballOne, ballTwo){
	var distance = ballOne.position.distance(ballTwo.position);
	var sumRadius = ballOne.radius + ballTwo.radius;
	if(distance <= sumRadius){
		return true;
	}else{
		return false;
	}
}