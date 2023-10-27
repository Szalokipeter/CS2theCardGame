import { Card } from "./card.js";

export class Weapon extends Card{

    constructor(damage, cost, slotnum, durability,  picpath, clicked){
        super(cost)
        this.damage = damage;
        this.imagepath = picpath;
        this.durability = durability;
        this.slotMain = slotnum == 0 ? true : false;
        this.slotSecondary = slotnum == 1 ? true : false;
        this.clicked = clicked;
    }

    play(target){
        
    }

}