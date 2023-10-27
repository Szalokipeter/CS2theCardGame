import { Item } from "./item.js";
import { Weapon } from "./weapon.js";

export class Agent{ 
    //ez nem egy kártyalap
    constructor(team, StartingPistol, picpath, clicked) {
        this.team = team;
        this.imagepath = picpath;
        this.hp = 10;
        this.slot1 = undefined;
        this.slot2 = StartingPistol;
        this.AttackValue = StartingPistol.damage;
    }
    Attack(target){
        target.hp -= this.AttackValue;
        if (this.slot1){
            this.slot1.durability -= 1;
        }
        if(this.slot2){
            this.slot2.durability -= 1;
        }
    }
}