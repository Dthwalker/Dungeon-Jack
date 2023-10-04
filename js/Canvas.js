export default class Canvas {

    constructor() {
        this.canvas    = document.querySelector('#game');
        this.ctx       = this.canvas.getContext('2d');
        this.w         = null;
        this.h         = null;
        this.ratio     = 70/100;
        this.btnHover  = 0;
        this.closeMenu = false;
        this.img       = {
            menu: new Image(),
            startBtn: new Image(),
        }

        this.img.menu.src = 'sprites/menu.png';
        this.img.startBtn.src = 'sprites/newGameBtn.png'
    }

    resize() {
        this.w = this.canvas.width = innerWidth - 80;
        this.h = this.canvas.height = this.w * this.ratio;
        this.ctx.imageSmoothingEnabled = false;
    }

    drawMenu() {
        this.ctx.drawImage(this.img.menu, 
                           0, 0, 100, 70,
                           0, 0, this.w, this.h);
        let btnRatio = 11 / (96 / 2)
        
        let startPath = new Path2D()
        this.ctx.beginPath(startPath);
        startPath.rect(this.w*0.05, this.h - this.h*0.2,
                       this.w * 0.4, this.w * 0.4 * btnRatio)
        this.ctx.closePath(startPath)

        this.canvas.addEventListener('mousemove', ({offsetX, offsetY}) => {
            if (this.ctx.isPointInPath(startPath, offsetX, offsetY)) {
                this.btnHover = 96/2;
            } else {
                this.btnHover = 0;
            }
        })

        this.ctx.drawImage(this.img.startBtn,
            this.btnHover,0,96/2,11,
            this.w*0.05, this.h - this.h*0.2,
            this.w * 0.4, this.w * 0.4 * btnRatio);

        let removeMenu = (e) => {
            if (this.ctx.isPointInPath(startPath, e.offsetX, e.offsetY)) {
                this.closeMenu = true
            }
            this.canvas.removeEventListener('click', removeMenu)
        }
        this.canvas.addEventListener('click', removeMenu)
        return this.closeMenu
    }

    update() {
        this.resize()
    }

}