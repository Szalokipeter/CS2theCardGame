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
let EnemyWeapons = [
    new Weapon(8,8,0,2, "img/AWP.png", undefined),
    new Weapon(6,5,0,4, "img/AK47.png", undefined),
    new Weapon(4,3,0,6, "img/MP5SD.png", undefined),
    new Weapon(4,5,0,4, "img/GALIL.png", undefined),
    new Weapon(2,2,1,10, "img/FIVESEVEN.png", undefined)
    
];

MakeAgents(playerTeam);

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
            agent = new Agent(team, new Weapon(2, 0, 1, 8, 'img/Glock.img', (wp) => this.WeaponClicked(wp)), 'img/TAgent.img', (ag) => this.AgentClicked(ag));
        } else {
            agent = new Agent(team, new Weapon(3, 0, 1, 4, 'img/USP.img', (wp) => this.WeaponClicked(wp)), 'img/CTAgent.img', (ag) => this.AgentClicked(ag));
        }
        Ourboard.push(agent);

        let div = document.createElement('div');
        div.classList.add('agent');
        div.id = `agent${i}`
        document.querySelector('.player_cards').appendChild(div);

        let hp = document.createElement('div');
        hp.classList.add('hpCounter');
        hp.innerHTML = agent.hp;
        document.querySelector(`#agent${i}`).appendChild(hp)

        let slot1 = document.createElement('div');
        slot1.classList.add('slot1');
        document.querySelector(`#agent${i}`).appendChild(slot1)

        let slot2 = document.createElement('div');
        slot2.classList.add('slot2');
        document.querySelector(`#agent${i}`).appendChild(slot2);
        
        console.log(agent.slot2);
    }
}

function generateCase(team) {
    let generatedCase = []
    if (team = 'T') {
        generatedCase = TCards;
    } else {
        generatedCase = CTCards;
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

