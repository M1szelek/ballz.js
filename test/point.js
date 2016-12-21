var test = require('unit.js');
var Point = require('../resources/js/point.js');

var _x = 100;
var _y = 200;

describe('Point object', function(){
	before(function() {
            px = _x;
            py = _y;
            point = new Point(px,py);
    });

    it('should be an instance of Point', function(){
        point.should.be.an.instanceOf(Point);
    });

    it('should have position', function(){
        point.should.have.property('position');
    });

    it('should have proper values', function(){
        (point.position.x).should.be.equal(_x);
        (point.position.y).should.be.equal(_y);
    });


});