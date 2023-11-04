import { Card } from "./card.js";
import { Agent } from "./agent.js";
import { Item } from "./item.js";
import { Weapon } from "./weapon.js";
import { Enemy } from "./enemy.js";




let CTCards = [
    new Weapon(8,8,0,2, "img/AWP.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(5,5,0,5, "img/M4A4.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,4, "img/M4A1.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,6, "img/MP5SD.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(2,2,1,10, "img/FIVESEVEN.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,2,1,2, "img/CZ75.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,3, "img/MP9.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,6,0,5, "img/AUG.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(8,8,0,2, "img/AWP.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(5,5,0,5, "img/M4A4.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,4, "img/M4A1.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,6, "img/MP5SD.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(2,2,1,10, "img/FIVESEVEN.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,2,1,2, "img/CZ75.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,3, "img/MP9.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,6,0,5, "img/AUG.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(5,5,0,5, "img/M4A4.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,4, "img/M4A1.png", (ag) => this.WeaponClicked(ag)),
    new Item("Molotov", 2, "img/incendiary", (item) => this.ItemClicked(item)),
    new Item("HE", 2, "img/HE", (item) => this.ItemClicked(item)),
    new Item("Flash", 1, "img/flash", (item) => this.ItemClicked(item)),
    new Item("Smoke", 2, "img/Smoke", (item) => this.ItemClicked(item)),
    new Item("Heal", 3, "img/heal", (item) => this.ItemClicked(item)),
    new Item("Molotov", 2, "img/incendiary", (item) => this.ItemClicked(item)),
    new Item("HE", 2, "img/HE", (item) => this.ItemClicked(item)),
    new Item("Flash", 1, "img/flash", (item) => this.ItemClicked(item)),
    new Item("Smoke", 2, "img/Smoke", (item) => this.ItemClicked(item)),
    new Item("Heal", 3, "img/heal", (item) => this.ItemClicked(item))
];
let TCards = [
    new Weapon(8,8,0,2, "img/AWP.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,5, "img/AK47.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,5,0,4, "img/GALIL.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,7, "img/MP7.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(3,2,1,8, "img/TEC9.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,2,1,2, "img/DESERT.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,4, "img/MAC10.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,6,0,5, "img/SG.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(8,8,0,2, "img/AWP.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,5, "img/AK47.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,5,0,4, "img/GALIL.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,7, "img/MP7.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(3,2,1,8, "img/TEC9.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,2,1,2, "img/DESERT.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,3,0,4, "img/MAC10.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,6,0,5, "img/SG.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(6,5,0,5, "img/AK47.png", (ag) => this.WeaponClicked(ag)),
    new Weapon(4,5,0,4, "img/GALIL.png", (ag) => this.WeaponClicked(ag)),
    new Item("Molotov", 2, "img/incendiary", (item) => this.ItemClicked(item)),
    new Item("HE", 2, "img/HE", (item) => this.ItemClicked(item)),
    new Item("Flash", 1, "img/flash", (item) => this.ItemClicked(item)),
    new Item("Smoke", 2, "img/Smoke", (item) => this.ItemClicked(item)),
    new Item("Heal", 3, "img/heal", (item) => this.ItemClicked(item)),
    new Item("Molotov", 2, "img/incendiary", (item) => this.ItemClicked(item)),
    new Item("HE", 2, "img/HE", (item) => this.ItemClicked(item)),
    new Item("Flash", 1, "img/flash", (item) => this.ItemClicked(item)),
    new Item("Smoke", 2, "img/Smoke", (item) => this.ItemClicked(item)),
    new Item("Heal", 3, "img/heal", (item) => this.ItemClicked(item))
];
let Enemyboard = [];
let Ourboard = [];
let playerTeam = DecideTeam();
let playerCase = generateCase(playerTeam);
let selectedAgent = undefined;
let Ourhand = [];
let currentmaxmoney = 1;
let currentmoney = 1;
let fatigue = 0;

MakeAgents(playerTeam);

StartGame();

document.querySelector('#EndButton').addEventListener("click", EndTurn);
document.querySelector('#case').addEventListener("click", CaseClicked);

UpdateMoney();



function DecideTeam() {
    if (Math.random() > 0.5) {
        return 'T';
    } else {
        return 'CT';
    }
}

function MakeAgents(team) {
    for (let i = 1; i < 6; i++) {
        let agent;
        if (playerTeam == 'T') {
            agent = new Agent(team, 'img/TAgent.img');
        } else {
            agent = new Agent(team, 'img/CTAgent.img');
        }
        Ourboard.push(agent);

        let div = document.createElement('div');
        div.classList.add('agent');
        div.id = `agent${i}`
        document.querySelector('.player_cards').appendChild(div);

        let infobar = document.createElement('div');
        infobar.classList.add('infobar')
        document.querySelector(`#agent${i}`).appendChild(infobar);
        
        let slot1 = document.createElement('div');
        slot1.classList.add('slot1');
        document.querySelector(`#agent${i} > .infobar`).appendChild(slot1)
        
        let slot2 = document.createElement('div');
        slot2.classList.add('slot2');
        document.querySelector(`#agent${i} > .infobar`).appendChild(slot2);
        
        let hp = document.createElement('div');
        hp.classList.add('hpCounter');
        hp.innerHTML = agent.hp;
        document.querySelector(`#agent${i} > .infobar`).appendChild(hp);


        let attackValue = document.createElement('div');
        attackValue.classList.add('attackValue');
        attackValue.innerHTML = agent.attackValue;
        document.querySelector(`#agent${i} > .infobar`).appendChild(attackValue);
        
    }
}

function generateCase(team) {
    let generatedCase = []
    if (team == 'CT') {
        generatedCase = CTCards;
    } 
    else {
        generatedCase = TCards;
    }
    //shuffle
    for (var i = generatedCase.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = generatedCase[i];
        generatedCase[i] = generatedCase[j];
        generatedCase[j] = temp;
    }
    return generatedCase;
}

function Crit(){
    
}

function WeaponClicked(wp){
    selectedAgent = undefined;

}

function ItemClicked(item){
    selectedAgent = undefined;

}

function AgentClicked(ag){
    if(selectedAgent){
        if(selectedAgent == ag){
            selectedAgent = undefined;
        }
        else{
            selectedAgent = ag;
        }
    }
    else{
        agentselected = ag;
    }
}

function CaseClicked(){
    if(currentmoney >= 2){
        currentmoney -= 2;
        //Ha akarunk animot ide rakjuk
        DrawCard();
        UpdateMoney();
    }
    else{
        alert("Nincs elég zsetta papi.")
    }

}
function DrawCard(){
    if(playerCase.length != 0){
        let tempcard = playerCase[0];
        Ourhand.push(tempcard);
        playerCase.splice(0,1);
    }
    else{
        Fatigue();
    }
    console.log(playerCase);
    console.log(Ourhand);
    
}

function StartGame(){
    DrawCard();
    DrawCard();
    DrawCard();
    DrawCard();
    DrawCard();
    console.log(Ourhand);
}

function StartTurn(){
    DrawCard();
    currentmaxmoney++;
    currentmoney = currentmaxmoney;
    UpdateMoney();
    console.log(currentmoney);
}

function EndTurn(){
    //existing enemys will attack
    //THEN enemys will spawn
    StartTurn();
}

function UpdateMoney(){
    let moneydiv = document.querySelector(".money_counter");
    moneydiv.innerHTML = `${currentmoney}$`;
}

function Fatigue(){
    fatigue++;
    alert("Fatigue Level Increased!")
    console.log(fatigue);
}

function UpdateHand(){

}
function UpdateBoard(){

}

