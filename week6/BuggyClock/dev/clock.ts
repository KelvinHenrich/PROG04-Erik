/**
 * Clock
 */
class Clock {
    
    private div: HTMLElement;
    private timerid: number;
    
    constructor() {
        this.div = document.createElement("clock");
        document.body.appendChild(this.div);
        
        this.showTime();
        this.timerid = setInterval(this.showTime.bind(this), 1000);
    }
    
    private showTime() : void {
        var today = new Date();
        var h:number = today.getHours();
        var m:number = today.getMinutes();
        var s:number = today.getSeconds();
        // add a zero in front of numbers<10
        this.div.innerHTML = this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s);
        
        console.log("The time is " + this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s);
    }
    
    private addZero(i:number):string {
        return (i < 10) ? "0" + i : i.toString();
    }
}