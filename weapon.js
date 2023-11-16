import { Card } from "./card.js";

export class Weapon extends Card{

    constructor(damage, cost, slotnum, durability,  picpath, id){
        super(cost)
        this.damage = damage;
        this.imagePath = picpath;
        this.durability = durability;
        this.slotMain = slotnum == 0 ? true : false;
        this.slotSecondary = slotnum == 1 ? true : false;
        this.id = id;
    }

    play(target){
        if(this.slotMain == true){
            if(target.slot1){
                target.attackValue -= target.slot1.damage;
            }
            target.slot1 = this;
            target.attackValue += this.damage;
            console.log(target);
        }
        else{
            if(target.slot2){
                target.attackValue -= target.slot2.damage;
            }
            target.slot2 = this;
            target.attackValue += this.damage;
            console.log(target);

        }
    }

}