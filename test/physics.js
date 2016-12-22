/**
 * Created by Miszelek on 14.07.2016.
 */


var test = require('unit.js');

var Ball = require('../resources/js/ball.js');
var Physics = require('../resources/js/physics.js');



describe('Physics test', function(){

    it('Move object test', function(){
        var ball = new Ball(0.0,0.0,0.0,0.0,0.0);

        Physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(0.0);
        test.value(ball.position.y).isEqualTo(0.0);

        var ball = new Ball(0.0,0.0,0.0,2.0,3.0);
        Physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(2.0);
        test.value(ball.position.y).isEqualTo(3.0);

        var ball = new Ball(0.0,0.0,0.0,-2.0,3.0);
        Physics.moveObject(ball);

        test.value(ball.position.x).isEqualTo(-2.0);
        test.value(ball.position.y).isEqualTo(3.0);

    });

    it('Objects (ball vs ball) collision test - collision case', function(){
        
        var radius1 =   2.0;
        var posX1 =     0.0;
        var posY1 =     0.0;

        var radius2 =   2.0;
        var posX2   =   1.0;
        var posY2   =   1.0; 

        var ballOne = new Ball( radius1,
                                posX1,
                                posY1);

        var ballTwo = new Ball( radius2,
                                posX2,
                                posY2);

        test.bool(Physics.isBallsCollide(ballOne,ballTwo)).isTrue();

        
    });

    it('Objects (ball vs ball) collision test - collision boundary case', function(){
        var radius1 =   2.0;
        var posX1 =     0.0;
        var posY1 =     0.0;

        var radius2 =   2.0;
        var posX2   =   4.0;
        var posY2   =   0.0; 

        var ballOne = new Ball( radius1,
                                posX1,
                                posY1);

        var ballTwo = new Ball( radius2,
                                posX2,
                                posY2);

        test.bool(Physics.isBallsCollide(ballOne,ballTwo)).isTrue();
    });

    it('Objects (ball vs ball) collision test - no collision', function(){
        var radius1 =   2.0;
        var posX1 =     0.0;
        var posY1 =     0.0;

        var radius2 =   2.0;
        var posX2   =   5.0;
        var posY2   =   0.0; 

        var ballOne = new Ball(radius1, posX1, posY1);
        var ballTwo = new Ball(radius2, posX2, posY2);

        test.bool(Physics.isBallsCollide(ballOne,ballTwo)).isFalse();
    });

    it('Objects (ball vs obstacle) collision test', function(){      
        var rad  = 2.0;
        var posX = 0.0;
        var posY = 0.0;

        var ball = new Ball(rad,posX,posY);
        
        var obsStartX = 0.0;
        var obsStartY = 0.0;
        var obsEndX =   3.0;
        var obsEndY =   3.0;

        var obstacle = new Obstacle(obsStartX, obsStartY, obsEndX, obsEndY);

        test.bool(Physics.isCollide(ball,obstacle)).isTrue();

    });

    it('Objects (ball vs obstacle) reflection', function(){
        var rad  = 2.0;
        var posX = 1.0;
        var posY = 0.0;
        var velX = 0.0;
        var velY = -1.0;

        var ball = new Ball(rad,posX,posY,velX,velY);
        
        var obsStartX = 0.0;
        var obsStartY = 0.0;
        var obsEndX =   3.0;
        var obsEndY =   3.0;

        var obstacle = new Obstacle(obsStartX, obsStartY, obsEndX, obsEndY);

        Physics.reflectBallAgainstObstacle(ball, obstacle);

        test.value(ballOne.velocity.x).isEqualTo(0.0);
        test.value(ballOne.velocity.y).isEqualTo(-1.0);

        test.value(ballTwo.velocity.x).isEqualTo(0.0);
        test.value(ballTwo.velocity.y).isEqualTo(1.0);
    });

    it('Objects (ball vs ball) reflection', function(){
        var rad1  = 2.0;
        var posX1 = 1.0;
        var posY1 = 0.0;
        var velX1 = 0.0;
        var velY1 = -1.0;

        var ballOne = new Ball(rad1,posX1,posY1,velX1,velY1);

        var rad2  = 2.0;
        var posX2 = 1.0;
        var posY2 = 0.0;
        var velX2 = 0.0;
        var velY2 = -1.0;

        
        var ballTwo = new Ball(rad2,posX2,posY2,velX2,velY2);

        Physics.reflectBallAgainstBall(ballOne, ballTwo);

        test.value(ballOne.getVelocity().getX()).isEqualTo(0.0);
        test.value(ballOne.getVelocity().getY()).isEqualTo(-1.0);

        test.value(ballTwo.getVelocity().getX()).isEqualTo(0.0);
        test.value(ballTwo.getVelocity().getY()).isEqualTo(1.0);
    });

    




});

