import { Card } from "./card.js";
import { Agent } from "./agent.js";
import { Item } from "./item.js";
import { Weapon } from "./weapon.js";
import { Enemy } from "./enemy.js";

let CTCards = [
    new Weapon(8,8,0,2, "img/AWP.png"),
    new Weapon(5,5,0,5, "img/M4A4.png"),
    new Weapon(6,5,0,4, "img/M4A1.png"),
    new Weapon(4,3,0,6, "img/MP5SD.png"),
    new Weapon(2,2,1,10, "img/FIVESEVEN.png"),
    new Weapon(4,2,1,2, "img/CZ75.png"),
    new Weapon(4,3,0,3, "img/MP9.png"),
    new Weapon(6,6,0,5, "img/AUG.png"),
    new Weapon(8,8,0,2, "img/AWP.png"),
    new Weapon(5,5,0,5, "img/M4A4.png"),
    new Weapon(6,5,0,4, "img/M4A1.png"),
    new Weapon(4,3,0,6, "img/MP5SD.png"),
    new Weapon(2,2,1,10, "img/FIVESEVEN.png"),
    new Weapon(4,2,1,2, "img/CZ75.png"),
    new Weapon(4,3,0,3, "img/MP9.png"),
    new Weapon(6,6,0,5, "img/AUG.png"),
    new Weapon(5,5,0,5, "img/M4A4.png"),
    new Weapon(6,5,0,4, "img/M4A1.png"),
    new Item("Molotov", 2, "img/incendiary"),
    new Item("HE", 2, "img/HE"),
    new Item("Flash", 1, "img/flash"),
    new Item("Smoke", 2, "img/Smoke"),
    new Item("Heal", 3, "img/heal"),
    new Item("Molotov", 2, "img/incendiary"),
    new Item("HE", 2, "img/HE"),
    new Item("Flash", 1, "img/flash"),
    new Item("Smoke", 2, "img/Smoke"),
    new Item("Heal", 3, "img/heal")
];
let TCards = [
    new Weapon(8,8,0,2, "img/AWP.png"),
    new Weapon(6,5,0,5, "img/AK47.png"),
    new Weapon(4,5,0,4, "img/GALIL.png"),
    new Weapon(4,3,0,7, "img/MP7.png"),
    new Weapon(3,2,1,8, "img/TEC9.png"),
    new Weapon(6,2,1,2, "img/DESERT.png"),
    new Weapon(4,3,0,4, "img/MAC10.png"),
    new Weapon(6,6,0,5, "img/SG.png"),
    new Weapon(8,8,0,2, "img/AWP.png"),
    new Weapon(6,5,0,5, "img/AK47.png"),
    new Weapon(4,5,0,4, "img/GALIL.png"),
    new Weapon(4,3,0,7, "img/MP7.png"),
    new Weapon(3,2,1,8, "img/TEC9.png"),
    new Weapon(6,2,1,2, "img/DESERT.png"),
    new Weapon(4,3,0,4, "img/MAC10.png"),
    new Weapon(6,6,0,5, "img/SG.png"),
    new Weapon(6,5,0,5, "img/AK47.png"),
    new Weapon(4,5,0,4, "img/GALIL.png"),
    new Item("Molotov", 2, "img/incendiary"),
    new Item("HE", 2, "img/HE"),
    new Item("Flash", 1, "img/flash"),
    new Item("Smoke", 2, "img/Smoke"),
    new Item("Heal", 3, "img/heal"),
    new Item("Molotov", 2, "img/incendiary"),
    new Item("HE", 2, "img/HE"),
    new Item("Flash", 1, "img/flash"),
    new Item("Smoke", 2, "img/Smoke"),
    new Item("Heal", 3, "img/heal")
];
let EnemyWeapons = [
    new Weapon(8,8,0,2, "img/AWP.png", undefined),
    new Weapon(6,5,0,4, "img/AK47.png", undefined),
    new Weapon(4,5,0,4, "img/GALIL.png", undefined),
    new Weapon(3,2,1,8, "img/TEC9.png", undefined),
    new Weapon(4,3,0,2, "img/SAWNOFF.png", undefined),
    new Weapon(4,3,0,3, "img/MP9.png", undefined),
    new Weapon(6,2,1,2, "img/DESERT.png", undefined),
    new Weapon(6,5,0,5, "img/AK47.png", undefined),
    new Weapon(4,5,0,4, "img/GALIL.png", undefined),
    new Weapon(2,0,1,8, "img/Glock.png", undefined)
];
let Enemyboard = [];
let Ourboard = [];
let playerTeam = DecideTeam();
let playerCase = generateCase(playerTeam);
let selectedAgent = undefined;
let selectedItem = undefined;
let selectedWeapon = undefined;
let Ourhand = [];
let currentmaxmoney = 1;
let currentmoney = 1;
let fatigue = 0;
let bossspawned = false;

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
            agent = new Agent(team, 'img/TAgent.img', `agent${i}`);
        } else {
            agent = new Agent(team, 'img/CTAgent.img', `agent${i}`);
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
        div.addEventListener("click", AgentClicked);
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

function WeaponClicked(event){
    selectedAgent = undefined;
    
}

function ItemClicked(event){
    selectedAgent = undefined;

}

function AgentClicked(event){

    let clickedAgent = Ourboard.find(agent => agent.id === event.target.id);
    if (selectedAgent === clickedAgent) {
        selectedAgent = undefined;
    } 
    else {
        selectedAgent = clickedAgent;
    }
}
function EnemyClicked(event) {
    const clickedEnemy = Enemyboard.find(enemy => enemy.id === event.target.id);
    if (selectedAgent instanceof Agent) {
            console.log(clickedEnemy)
            selectedAgent.Attack(clickedEnemy);
            selectedAgent = undefined;
        } 
        else {
            console.log("No Agent Selected!");
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
    
    // TODO: Megcsinálni a html elemeket és berakni a "player_hand" divbe




}
function UpdateHand(playedcard){
    let indexofplayedcard = Ourhand.indexOf(playedcard);
    Ourhand.splice(indexofplayedcard, 1);
    //TODO: Kivenni a Card div-et a kézből
}
function UpdateOurBoard(){
    //TODO: Levenni a meghalt agenteket újraindexelés nem kell, mert újat nem summonolhatunk.
}
function UpdateEnemyBoard(){
    //TODO: Levenni a meghalt enemyket, "újraindexelni" az enemyket
}

function StartGame(){
    DrawCard();
    DrawCard();
    DrawCard();
    DrawCard();
    DrawCard();
}

function StartTurn(){
    DrawCard();
    currentmaxmoney++;
    currentmoney = currentmaxmoney;
    UpdateMoney();
}

function EndTurn(){
    EnemysAttack();
    //existing enemys will attack
    //THEN enemys will spawn
    SpawnEnemy();
    StartTurn();
}

function UpdateMoney(){
    let moneydiv = document.querySelector(".money_counter");
    moneydiv.innerHTML = `${currentmoney}$`;
}

function Fatigue(){
    fatigue++;
    console.log("Fatigue Level Increased!");
}

function SpawnEnemy(){
    let spawnboss = Math.floor(Math.random()*20);
    if(bossspawned == false && spawnboss == 19){
        SpawnBoss();
        bossspawned = true;
    }
    else if (bossspawned == false){
    let r = Math.floor((Math.random()*10));
    let enemyweapon = EnemyWeapons[r];
    let enemyhp = Math.floor((Math.random()+1)*5);
    let i = Enemyboard.length+1;
    
    let enemy;
    if(enemyweapon.slotMain == true){
        enemy = new Enemy(enemyhp, enemyweapon, undefined, "img/enemy.png", `enemy${i}`);
        Enemyboard.push(enemy);
    }
    else{
        enemy = new Enemy(enemyhp, undefined, enemyweapon, "img/enemy.png", `enemy${i}`);
        Enemyboard.push(enemy);
    }
    console.log(Enemyboard);
    
    let div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i}`
    document.querySelector('.enemy_cards').appendChild(div);

    let infobar = document.createElement('div');
    infobar.classList.add('infobar')
    document.querySelector(`#enemy${i}`).appendChild(infobar);
    
    let slot1 = document.createElement('div');
    slot1.classList.add('slot1');
    document.querySelector(`#enemy${i} > .infobar`).appendChild(slot1)
    
    let slot2 = document.createElement('div');
    slot2.classList.add('slot2');
    document.querySelector(`#enemy${i} > .infobar`).appendChild(slot2);
    
    let hp = document.createElement('div');
    hp.classList.add('hpCounter');
    hp.innerHTML = enemy.hp;
    document.querySelector(`#enemy${i} > .infobar`).appendChild(hp);


    let attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    document.querySelector(`#enemy${i} > .infobar`).appendChild(attackValue);
    div.addEventListener("click", EnemyClicked);
    }
}

function SpawnBoss(){
    let i = Enemyboard.length+1;
    let bossweapon = new Weapon(6,5,0,10, "img/AK47.png", undefined);
    let bosssecondary = new Weapon(2,0,1,10, "img/Glock.png", undefined);
    let enemy = new Enemy(10, bossweapon, undefined, "img/mini.png", `enemy${i}`);
    Enemyboard.push(enemy);

    let div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i}`
    document.querySelector('.enemy_cards').appendChild(div);

    let infobar = document.createElement('div');
    infobar.classList.add('infobar')
    document.querySelector(`#enemy${i}`).appendChild(infobar);
    
    let slot1 = document.createElement('div');
    slot1.classList.add('slot1');
    document.querySelector(`#enemy${i} > .infobar`).appendChild(slot1)
    
    let slot2 = document.createElement('div');
    slot2.classList.add('slot2');
    document.querySelector(`#enemy${i} > .infobar`).appendChild(slot2);
    
    let hp = document.createElement('div');
    hp.classList.add('hpCounter');
    hp.innerHTML = enemy.hp;
    document.querySelector(`#enemy${i} > .infobar`).appendChild(hp);


    let attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    document.querySelector(`#enemy${i} > .infobar`).appendChild(attackValue);
    div.addEventListener("click", EnemyClicked);

    // and 2 mini-bosses
    enemy = new Enemy(50, bossweapon, bosssecondary, "img/boss.png", `enemy${i+1}`);
    Enemyboard.push(enemy);

    div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i+1}`
    document.querySelector('.enemy_cards').appendChild(div);

    infobar = document.createElement('div');
    infobar.classList.add('infobar')
    document.querySelector(`#enemy${i+1}`).appendChild(infobar);
    
    slot1 = document.createElement('div');
    slot1.classList.add('slot1');
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(slot1)
    
    slot2 = document.createElement('div');
    slot2.classList.add('slot2');
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(slot2);
    
    hp = document.createElement('div');
    hp.classList.add('hpCounter');
    hp.innerHTML = enemy.hp;
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(hp);


    attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(attackValue);
    div.addEventListener("click", EnemyClicked);


    enemy = new Enemy(10, bossweapon, undefined, "img/mini.png", `enemy${i+2}`);
    Enemyboard.push(enemy);

    div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i+2}`
    document.querySelector('.enemy_cards').appendChild(div);

    infobar = document.createElement('div');
    infobar.classList.add('infobar')
    document.querySelector(`#enemy${i+2}`).appendChild(infobar);
    
    slot1 = document.createElement('div');
    slot1.classList.add('slot1');
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(slot1)
    
    slot2 = document.createElement('div');
    slot2.classList.add('slot2');
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(slot2);
    
    hp = document.createElement('div');
    hp.classList.add('hpCounter');
    hp.innerHTML = enemy.hp;
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(hp);


    attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(attackValue);
    div.addEventListener("click", EnemyClicked);

    console.log(Enemyboard);
}

function EnemysAttack(){
    //TODO: enemys attack a random agent



}
