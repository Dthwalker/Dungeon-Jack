export default class GameObject {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.sprite = new Image();
    }

    draw(ctx) {
        ctx.drawImage(this.sprite,
            0,0,20,20,
            Math.floor(this.x * this.size),
            Math.floor(this.y * this.size),
            this.size,this.size)
    }

}