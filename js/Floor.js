import GameObject from "/js/GameObject.js";

export default class Floor extends GameObject {

    constructor(x,y,size) {
        super(x,y,size);

        this.sprite.src = 'sprites/floor-1.png';
    }

}