import { Card } from "./card.js";
import { Agent } from "./agent.js";
import { Item } from "./item.js";
import { Weapon } from "./weapon.js";
import { Enemy } from "./enemy.js";


let CTCards = [];
let TCards = [];
let Enemyboard = [];
let Ourboard = [];
let playerTeam = DecideTeam();
let playerCase = generateCase(playerTeam);
let startpistol;
let EnemyWeapons = [
    new Weapon(8,5,0,5, "img/AWP.png"),
    new Weapon(8,5,0,5, "img/AWP.png"),
    new Weapon(8,5,0,5, "img/AWP.png")
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
            agent = new Agent(team, new Weapon(2, 0, 1, 8, 'img/Glock.img'), 'img/Agent.img');
        } else {
            agent = new Agent(team, new Weapon(3, 0, 1, 4, 'img/USP.img'), 'img/Agent.img');
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