/**
 * Created by Miszelek on 14.07.2016.
 */

var test = require('unit.js');

describe('Physics tests', function(){
    it('Move object test', function(){

        var physics = new Physics();
        var ball = new Ball();

        ball.setPosition(0.0,0.0);
        ball.setVelocity(0.0,0.0);
        physics.moveObject(ball);

        test.value(ball.getPosition().getX()).isEqualTo(0.0);
        test.value(ball.getPosition().getY()).isEqualTo(0.0);

        ball.setPosition(0.0,0.0);
        ball.setVelocity(2.0,3.0);
        physics.moveObject(ball);

        test.value(ball.getPosition().getX()).isEqualTo(2.0);
        test.value(ball.getPosition().getY()).isEqualTo(3.0);

        ball.setPosition(0.0,0.0);
        ball.setVelocity(-2.0,3.0);
        physics.moveObject(ball);

        test.value(ball.getPosition().getX()).isEqualTo(-2.0);
        test.value(ball.getPosition().getY()).isEqualTo(3.0);

    });

    it('Objects (ball vs ball) collision test', function(){
        var physics = new Physics();
        var ballOne = new Ball();
        var ballTwo = new Ball();

        ballOne.setRadius(2.0);
        ballTwo.setRadius(2.0);

        ballOne.setPosition(0.0,0.0);
        ballTwo.setPosition(1.0,0.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isTrue();

        ballOne.setPosition(0.0,0.0);
        ballTwo.setPosition(2.0,0.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isTrue();

        ballOne.setPosition(0.0,0.0);
        ballTwo.setPosition(3.0,0.0);

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

        ballOne.setPosition(5.0,15.0);
        ballTwo.setPosition(6.0,16.0);

        ballOne.setVelocity()
    })


});

