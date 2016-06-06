/// <reference path="ball.ts"/>

class Game {

    private balls: Array<Ball> = new Array<Ball>();//

    constructor() {
        let a:Ball = new Ball();
        let b:Ball = new Ball();
        let c:Ball = new Ball();
        let d:Ball = new Ball();
        
        this.balls.push(a,b,c,d);
        
        // aantal
        console.log("Aantal ballen :" + this.balls.length);
        
        // de tweede ball verwijderen
        this.removeFromArray(b);
        
        // aantal
        console.log("Aantal ballen :" + this.balls.length);
    }

    public removeFromArray(removeMe: Ball): void {
       for (let i = 0;i<this.balls.length;i++) {
            // kijk of dit de apple is die weg moet
            if (this.balls[i] === removeMe) {
                console.log("Bal gevonden!");
                // verwijderen met array.splice
                this.balls.splice(i, 1);
            }
        }
    }
}

