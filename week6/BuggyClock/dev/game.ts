/// <reference path="clock.ts"/>

class Game {
    
    private clock:Clock;
     
    constructor() {
        this.clock = new Clock();
        this.stopGame();
    }
    
    public stopGame():void {
       // HALPS! THE CLOCK JUST KEEPS TICKING !!!
       this.clock = null;
    }
} 

