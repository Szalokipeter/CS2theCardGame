import { Item } from "./item.js";
import { Weapon } from "./weapon.js";

export class Agent{ 
    //ez nem egy kártyalap
    constructor(team, picpath) {
        this.team = team;
        this.imagepath = picpath;
        this.hp = 10;
        this.slot1 = undefined;
        if (team == 'T'){
            this.slot2 = new Weapon(2, 0, 1, 8, 'img/Glock.img');
        }
        else {
            this.slot2 = new Weapon(3, 0, 1, 4, 'img/USP.img');
        }
        this.attackValue = this.slot2.damage;
    }
    Attack(target){
        if(this.slot1 != undefined && this.slot2 != undefined){
            target.hp -= (this.slot1.damage+ this.slot2.damage);
            this.slot1
        }
        else if(this.slot1 != undefined && this.slot2 == undefined){
            target.hp -= this.slot1.damage;
        }
        else if (this.slot1 == undefined && this.slot2 != undefined){
            target.hp -=this.slot2.damage;
        }
        else{
            alert("The minion dosent have any attack value!")
        }
        
        if (this.slot1 != undefined){
            this.slot1.durability -= 1;
        }
        if(this.slot2 != undefined){
            this.slot2.durability -= 1;
        }
    }
}