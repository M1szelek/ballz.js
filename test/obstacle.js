var test = require('unit.js');
var Obstacle = require('../resources/js/obstacle.js');

describe('Obstacle objects', function(){
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

    it('should have start', function(){
        obstacle.should.have.property('start');
    });

    it('should have end', function(){
        obstacle.should.have.property('end');
    });



});