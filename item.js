import { Card } from "./card.js";

export class Item extends Card {
    constructor(type, cost, picpath, id) {
        super(cost)
        this.type = type;
        this.imagePath = picpath;
        this.id = id;
    }

// molotov, heal, flash, he, smoke
    play(target) {
       if(this.type == "Molotov"){
            
       }
       else if(this.type == "Heal"){
            if(target.hp < 5 ){
                target.hp += 10;
            }
            else{
                target.hp = 15;
            }
       }
       else if(this.type == "Flash"){
        
       }
       else if(this.type == "HE"){
        
       }
       else if (this.type == "Smoke"){

       }
    }
}