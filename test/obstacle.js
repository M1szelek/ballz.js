var Obstacle = require('../resources/js/obstacle.js');

describe('Obstacle object', function(){
	before(function() {
            sx = 100;
            sy = 200;
            ex = 20;
            ey = 30;
            obstacle = new Obstacle(sx,sy,ex,ey);
    });

    it('should be an instance of Obstacle', function(){
        obstacle.should.be.an.instanceOf(Obstacle);
    });

    it('should have segment', function(){
        obstacle.should.have.property('segment');
    });


});