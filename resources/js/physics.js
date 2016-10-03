exports = module.exports = Physics;

function Physics() {
  
};

Physics.prototype.moveObject = function(ball){
	ball.position = ball.position.add(ball.velocity);
}