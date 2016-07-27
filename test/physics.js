/**
 * Created by Miszelek on 14.07.2016.
 */

var test = require('unit.js');
var Victor = require('victor');

describe('Physics tests', function(){
    it('Move object test', function(){

        var physics = new Physics();
        var ball = new Ball();

        ball.setPosition(5.0,15.0);
        ball.setVelocity(-15.0,20.0);
        physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(-10.0);
        test.value(ball.position.y).isEqualTo(35.0);

    });

    it('Objects (ball vs ball) collision test', function(){
        var physics = new Physics();
        var ballOne = new Ball();
        var ballTwo = new Ball();

        ballOne.setRadius(1.0);
        ballTwo.setRadius(2.0);

        ballOne.setPosition(5.0,15.0);
        ballTwo.setPosition(6.0,16.0);

        test.bool(physics.isCollide(ballOne,ballTwo)).isTrue();

    });

    it('Objects (ball vs obstacle) collision test', function(){
        var physics = new Physics();
        var ball = new Ball();
        var obstacle = new Obstacle();

        ball.setRadius(3.0);

        obstacle.setStart(1.0,1.0);
        obstacle.setEnd(5.0,5.0);

        test.bool(physics.isCollide(ball,obstacle)).isTrue();

    })

});

