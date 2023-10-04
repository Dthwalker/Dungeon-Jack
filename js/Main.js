import Canvas from "/js/Canvas.js";
import Game from "/js/Game.js";

class Main {

    static init() {
        this.canvas = new Canvas();
        this.game   = null;
        this.timer  = null;
        this.speed  = 300;
        this.menu   = true;

        console.log('Game is init');
        this.loop();
    }

    static loop() {
        this.canvas.update();
        if (this.menu) {
            if (this.canvas.drawMenu()) {
                this.menu = false;
                this.game = new Game(this.canvas);
            }
        } else {
            this.game.update();
        }
 
        this.timer = setTimeout(this.loop.bind(this), this.speed);
    }


}

Main.init();