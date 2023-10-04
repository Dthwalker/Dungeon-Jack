import MapMaker from "/js/MapMaker.js";
import Floor from "/js/Floor.js";
import Jack from "/js/Jack.js";

export default class Game {

    constructor(cnv) {
        this.cnv = cnv;
        this.map = new MapMaker();
        this.data = this.map.getMap(1)
        this.player = null;

        this.makeMap();
    }

    makeMap() {
        this.data = this.data.map((a,y) => a.map((el, x) => {
            if (el == ' ') return new Floor(x, y, this.cnv.w / 10);
            if (el == 'J') return new Jack(x, y, this.cnv.w / 10);
            return el
        }))
    }

    draw() {
        let ctx = this.cnv.ctx;
        this.data.forEach(a=> a.forEach(el => {
            if (typeof el != 'string'){
                el.size = this.cnv.w / 10
                el.draw(ctx);
            }
        }))
    }

    update() {
        this.draw();
    }

}