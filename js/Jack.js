import GameObject from "/js/GameObject.js";

export default class Jack extends GameObject {

    constructor(x,y,size) {
        super(x,y,size);

        this.sprite.src = 'sprites/jack.png';
    }

}