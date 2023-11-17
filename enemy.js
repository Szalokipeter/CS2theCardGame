export class Enemy{
    // ez nem egy kártyalap
    constructor(hp, Weaponslot1, Weaponslot2, picpath, id) {
        this.imagePath = picpath; 
        this.hp = hp;
        this.slot1 = Weaponslot1;
        this.slot2 = Weaponslot2;
        this.id = id;
        this.canAttack = true;
        if(this.slot1 != undefined && this.slot2 != undefined){
            this.attackValue = (this.slot1.damage + this.slot2.damage);
        }
        else if(this.slot1 != undefined && this.slot2 == undefined){
            this.attackValue = this.slot1.damage;
        }
        else if (this.slot1 == undefined && this.slot2 != undefined){
            this.attackValue =this.slot2.damage;
        }
        else{
            this.attackValue = 0;
        }
    }
    Attack(target){
        if(this.slot1 != undefined && this.slot2 != undefined){
            target.hp -= (this.slot1.damage+ this.slot2.damage);
        }
        else if(this.slot1 != undefined && this.slot2 == undefined){
            target.hp -= this.slot1.damage;
        }
        else if (this.slot1 == undefined && this.slot2 != undefined){
            target.hp -=this.slot2.damage;
        }
        else{
            alert("The enemy dosent have any attack value!")
        }
        
        if (this.slot1 != undefined){
            this.slot1.durability -= 1;
        }
        if(this.slot2 != undefined){
            this.slot2.durability -= 1;
        }
    }
}