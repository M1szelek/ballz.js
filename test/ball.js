var Ball = require('../resources/js/ball.js');



describe('Ball object', function(){
    var _r = 2;
    var _px = 100;
    var _py = 200;
    var _vx = 20;
    var _vy = 30;

    before(function() {
            r = _r;
            px = _px;
            py = _py;
            vx = _vx;
            vy = _vy;
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

    it('should have proper values', function(){
        ball.radius.should.equal(_r);
        ball.position.x.should.equal(_px);
        ball.position.y.should.equal(_py);
        ball.velocity.x.should.equal()
    });

});