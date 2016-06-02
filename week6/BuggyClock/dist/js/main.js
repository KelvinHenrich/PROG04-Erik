var Clock = (function () {
    function Clock() {
        this.div = document.createElement("clock");
        document.body.appendChild(this.div);
        this.showTime();
        this.timerid = setInterval(this.showTime.bind(this), 1000);
    }
    Clock.prototype.showTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        this.div.innerHTML = this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s);
        console.log("The time is " + this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s));
    };
    Clock.prototype.addZero = function (i) {
        return (i < 10) ? "0" + i : i.toString();
    };
    return Clock;
}());
var Game = (function () {
    function Game() {
        this.clock = new Clock();
        this.stopGame();
    }
    Game.prototype.stopGame = function () {
        this.clock = null;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map