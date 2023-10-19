export class Enemy{
    // ez nem egy kártyalap
    constructor(hp, Weaponslot1, Weaponslot2, picpath) {
        this.imagePath = picpath; 
        this.hp = hp;
        this.slot1 = Weaponslot1;
        this.slot2 = Weaponslot2;
    }
    Attack(target){
        
    }
}