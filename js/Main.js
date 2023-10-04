import Canvas from "/js/Canvas.js";


class Main {

    static init() {
        this.canvas = new Canvas();
        this.timer  = null;
        this.speed  = 300;

        console.log('Game is init');
        this.loop();
    }

    static loop() {
        this.canvas.update();
 
        this.timer = setTimeout(this.loop.bind(this), this.speed);
    }


}

Main.init();