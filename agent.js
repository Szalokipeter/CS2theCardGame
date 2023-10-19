export class Agent{ 
    //ez nem egy kártyalap
    constructor(team, StartingPistol, picpath) {
        this.team = team;
        this.imagepath = picpath;
        this.hp = 10;
        this.slot1 = undefined;
        this.slot2 = StartingPistol;
    }
    Attack(target){
        
    }
}