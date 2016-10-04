/**
 * Created by Miszelek on 14.07.2016.
 */


var test = require('unit.js');

var Ball = require('../resources/js/ball.js');
var Physics = require('../resources/js/physics.js');



describe('Physics tests', function(){

    it('Move object test', function(){

        var physics = new Physics();
        var ball = new Ball(0.0,0.0,0.0,0.0,0.0);

        physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(0.0);
        test.value(ball.position.y).isEqualTo(0.0);

        var ball = new Ball(0.0,0.0,0.0,2.0,3.0);
        physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(2.0);
        test.value(ball.position.y).isEqualTo(3.0);

        var ball = new Ball(0.0,0.0,0.0,-2.0,3.0);
        physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(-2.0);
        test.value(ball.position.y).isEqualTo(3.0);

    });

    it('Objects (ball vs ball) collision test', function(){
        var physics = new Physics();
        var ballOne = new Ball(2.0,0.0,0.0);
        var ballTwo = new Ball(2.0,1.0,1.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isTrue();

        ballOne.setPosition(0.0,0.0);
        ballTwo.setPosition(4.0,0.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isTrue();

        ballOne.setPosition(0.0,0.0);
        ballTwo.setPosition(5.0,0.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isFalse();
    });

    it('Objects (ball vs obstacle) collision test', function(){
        var physics = new Physics();
        var ball = new Ball();
        var obstacle = new Obstacle();

        obstacle.setStart(-5.0,0.0);
        obstacle.setEnd(5.0,5.0);

        ball.setRadius(2.0);
        ball.setPosition(0.0);

        test.bool(physics.isCollide(ball,obstacle)).isTrue();

        ball.setRadius(2.0);
        ball.setPosition(2.0);

        test.bool(physics.isCollide(ball,obstacle)).isTrue();

        ball.setRadius(2.0);
        ball.setPosition(3.0);

        test.bool(physics.isCollide(ball,obstacle)).isFalse();

    })

    it('Objects (ball vs ball) reflection', function(){
        var physics = new Physics();
        var ballOne = new Ball();
        var ballTwo = new Ball();

        ballOne.setRadius(2.0);
        ballTwo.setRadius(2.0);

        ballOne.setVelocity(0.0,1.0);
        ballTwo.setVelocity(0.0,-1.0);

        physics.reflection(ballOne, ballTwo);

        test.value(ballOne.getVelocity().getX()).isEqualTo(0.0);
        test.value(ballOne.getVelocity().getY()).isEqualTo(-1.0);

        test.value(ballTwo.getVelocity().getX()).isEqualTo(0.0);
        test.value(ballTwo.getVelocity().getY()).isEqualTo(1.0);
    })


});

