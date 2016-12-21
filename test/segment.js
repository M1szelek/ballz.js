var test = require('unit.js');
var Segment = require('../resources/js/segment.js');

var _sx = 100;
var _sy = 200;
var _ex = 20;
var _ey = 30;

describe('Segment object', function(){
	before(function() {
            sx = _sx;
            sy = _sy;
            ex = _ex;
            ey = _ey;
            segment = new Segment(sx,sy,ex,ey);
    });

    it('should be an instance of Segment', function(){
        segment.should.be.an.instanceOf(Segment);
    });

    it('should have pointOne', function(){
        segment.should.have.property('pointOne');
    });

    it('should have pointTwo', function(){
        segment.should.have.property('pointTwo');
    });

    it('should have proper values', function(){
        (segment.pointOne.position.x).should.be.equal(_sx);
        (segment.pointOne.position.y).should.be.equal(_sy);
        (segment.pointTwo.position.x).should.be.equal(_ex);
        (segment.pointTwo.position.y).should.be.equal(_ey);
    });



});