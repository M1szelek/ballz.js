var test = require('unit.js');
var Ball = require('../resources/js/ball.js');

describe('Balls objects', function(){
    before(function() {
            r = 100
            px = 100;
            py = 200;
            vx = 20;
            vy = 30;
            ball = new Ball(r, px, py, vx, vy);
    });

    it('should be an instance of Ball', function(){
        ball.should.be.an.instanceOf(Ball);
    });

    it('should have position', function(){
        ball.should.have.property('position');
    });

    it('should have velocity', function(){
        ball.should.have.property('velocity');
    });

    it('should have radius', function(){
        ball.should.have.property('radius');
    });

});