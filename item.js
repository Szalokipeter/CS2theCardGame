import { Card } from "./card.js";

export class Item extends Card {
    constructor(type, cost, picpath) {
        super(cost)
        this.type = type;
        this.imagePath = picpath;
    }


    play(target) {
        // TODO: töröljük a kijátszott kártyát
        // TODO: Az item elhasználódik a targeten
    }
}