import { Card } from "./card.js";

export class Item extends Card {
    constructor(type, cost, picpath, clicked) {
        super(cost)
        this.type = type;
        this.imagePath = picpath;
        this.clicked = clicked;
    }


    play(target) {
        // töröljük a kijátszott kártyát
        // function
    }
}