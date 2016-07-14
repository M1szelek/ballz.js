/**
 * Created by Miszelek on 14.07.2016.
 */

var test = require('unit.js');
var Victor = require('victor');

describe('Ball tests', function(){
    it('Move test', function(){

        var ball = new Ball();

        ball.setPosition(5.0,15.0);
        ball.setVelocity(-15.0,20.0);
        ball.move();

        test.value(ball.position.x).isEqualTo(-10.0);
        test.value(ball.position.y).isEqualTo(35.0);

    });

});

