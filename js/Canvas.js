export default class Canvas {

    constructor() {
        this.canvas = document.querySelector('#game');
        this.ctx    = this.canvas.getContext('2d');
        this.w      = null;
        this.h      = null;
        this.ratio  = 70/100;
    }

    resize() {
        this.w = this.canvas.width = innerWidth - 80;
        this.h = this.canvas.height = this.w * this.ratio;
        this.imageSmoothingEnabled = false;
    }

    update() {
        this.resize()
    }

}