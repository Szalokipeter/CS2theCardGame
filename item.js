import { Agent } from "./agent.js";
import { Card } from "./card.js";
import { Enemy } from "./enemy.js";

export class Item extends Card {
    constructor(type, cost, picpath, id) {
        super(cost)
        this.type = type;
        this.imagePath = picpath;
        this.id = id;
    }

// molotov, heal, flash, he, smoke
    play(target, boardIsPlayedOn) {
       if(this.type == "Molotov"){
        boardIsPlayedOn.forEach(entity => {
            entity.hp -= 3;
        });

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
            target.canAttack = false;
       }
       else if(this.type == "HE"){
            boardIsPlayedOn.forEach(entity => {
                entity.hp -= 5;
            });
       }
       else if (this.type == "Smoke"){
            if(target instanceof Agent){
                target.shield = true;
            }
            else if(target instanceof Enemy){
                boardIsPlayedOn.forEach(enemy => {
                    enemy.canAttack = false;
                });
            }
       }
    }
}