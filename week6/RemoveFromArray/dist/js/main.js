var Ball = (function () {
    function Ball() {
    }
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = new Array();
        var a = new Ball();
        var b = new Ball();
        var c = new Ball();
        var d = new Ball();
        this.balls.push(a, b, c, d);
        console.log("Aantal ballen :" + this.balls.length);
        this.removeFromArray(b);
        console.log("Aantal ballen :" + this.balls.length);
    }
    Game.prototype.removeFromArray = function (removeMe) {
        for (var i = 0; i < this.balls.length; i++) {
            if (this.balls[i] === removeMe) {
                console.log("Bal gevonden!");
                this.balls.splice(i, 1);
            }
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map