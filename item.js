import { Card } from "./card.js";

export class Item extends Card {
    constructor(type, cost, picpath, id) {
        super(cost)
        this.type = type;
        this.imagePath = picpath;
        this.id = id;
    }


    play(target) {
        // TODO: töröljük a kijátszott kártyát
        // TODO: Az item elhasználódik a targeten
    }
}