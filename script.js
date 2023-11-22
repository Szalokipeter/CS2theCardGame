import { Card } from "./card.js";
import { Agent } from "./agent.js";
import { Item } from "./item.js";
import { Weapon } from "./weapon.js";
import { Enemy } from "./enemy.js";

let CTCards = [
    new Weapon(8,8,0,2, "img/awp.png"),
    new Weapon(5,5,0,5, "img/m4a4.png"),
    new Weapon(6,5,0,4, "img/m4a1.png"),
    new Weapon(4,3,0,6, "img/mp5.png"),
    new Weapon(2,2,1,10, "img/fiveseven.png"),
    new Weapon(4,2,1,2, "img/cz75a.png"),
    new Weapon(4,3,0,3, "img/mp9.png"),
    new Weapon(6,6,0,5, "img/aug.png"),
    new Weapon(8,8,0,2, "img/awp.png"),
    new Weapon(5,5,0,5, "img/m4a4.png"),
    new Weapon(6,5,0,4, "img/m4a1.png"),
    new Weapon(4,3,0,6, "img/mp5.png"),
    new Weapon(2,2,1,10, "img/fiveseven.png"),
    new Weapon(4,2,1,2, "img/cz75a.png"),
    new Weapon(4,3,0,3, "img/mp9.png"),
    new Weapon(6,6,0,5, "img/aug.png"),
    new Weapon(5,5,0,5, "img/m4a4.png"),
    new Weapon(6,5,0,4, "img/m4a1.png"),
    new Item("Molotov", 2, "img/molotov.png"),
    new Item("HE", 2, "img/explosive_grenade.png"),
    new Item("Flash", 1, "img/flash_grenade.png"),
    new Item("Smoke", 2, "img/smoke_grenade.png"),
    new Item("Heal", 3, "img/citemhealthshot.png"),
    new Item("Molotov", 2, "img/molotov.png"),
    new Item("HE", 2, "img/explosive_grenade.png"),
    new Item("Flash", 1, "img/flash_grenade.png"),
    new Item("Smoke", 2, "img/smoke_grenade.png"),
    new Item("Heal", 3, "img/citemhealthshot.png")
];
let TCards = [
    new Weapon(8,8,0,2, "img/awp.png"),
    new Weapon(6,5,0,5, "img/ak47.png"),
    new Weapon(4,5,0,4, "img/galil.png"),
    new Weapon(4,3,0,7, "img/mp7.png"),
    new Weapon(3,2,1,8, "img/tec9.png"),
    new Weapon(6,2,1,2, "img/desert_eagle.png"),
    new Weapon(4,3,0,4, "img/mac10.png"),
    new Weapon(6,6,0,5, "img/sg553.png"),
    new Weapon(8,8,0,2, "img/awp.png"),
    new Weapon(6,5,0,5, "img/ak47.png"),
    new Weapon(4,5,0,4, "img/galil.png"),
    new Weapon(4,3,0,7, "img/mp7.png"),
    new Weapon(3,2,1,8, "img/tec9.png"),
    new Weapon(6,2,1,2, "img/desert_eagle.png"),
    new Weapon(4,3,0,4, "img/mac10.png"),
    new Weapon(6,6,0,5, "img/sg553.png"),
    new Weapon(6,5,0,5, "img/ak47.png"),
    new Weapon(4,5,0,4, "img/galil.png"),
    new Item("Molotov", 2, "img/molotov.png"),
    new Item("HE", 2, "img/explosive_grenade.png"),
    new Item("Flash", 1, "img/flash_grenade.png"),
    new Item("Smoke", 2, "img/smoke_grenade.png"),
    new Item("Heal", 3, "img/citemhealthshot.png"),
    new Item("Molotov", 2, "img/molotov.png"),
    new Item("HE", 2, "img/explosive_grenade.png"),
    new Item("Flash", 1, "img/flash_grenade.png"),
    new Item("Smoke", 2, "img/smoke_grenade.png"),
    new Item("Heal", 3, "img/citemhealthshot.png")
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
let selectedenemy = undefined;
let Ourhand = [];
let currentmaxmoney = 1;
let currentmoney = 1;
let fatigue = 0;
let bossspawned = false;
let burndmg = 0;

SetBackground();

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
        if (playerTeam == 'T') {
            div.classList.add('terrorist');
        } else if(playerTeam = 'CT') {
            div.classList.add('counterTerrorist');
        }
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
        
        let agentImage = document.createElement('img');
        agentImage.classList.add('agentImage');
        let rnd = Math.floor(Math.random() * 8) + 1;
        agentImage.src = `img/${playerTeam.toLowerCase()}${rnd}.png`;
        document.querySelector(`#agent${i}`).appendChild(agentImage);
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
    selectedItem = undefined;
    
    let clickedWeapon = Ourhand.find(weapon => weapon.id === event.currentTarget.id);
    if(selectedWeapon === clickedWeapon){
        selectedWeapon = undefined;
        console.log("Weapon unselected.");
    }
    else{
        selectedWeapon = clickedWeapon;
        console.log("Weapon selected.");
    }


}

function ItemClicked(event){
    selectedAgent = undefined;
    selectedWeapon = undefined;
    let clickedItem = Ourhand.find(item => item.id === event.currentTarget.id);
    if(selectedItem === clickedItem){
        selectedItem = undefined;
        console.log("Item unselected.");
    }
    else{
        selectedItem = clickedItem;
        console.log("Item selected.");
    }
}

function AgentClicked(event){
    let clickedAgent = Ourboard.find(agent => agent.id === event.currentTarget.id);
    if (selectedAgent === clickedAgent) {
        selectedAgent = undefined;
    } 
    else {
        selectedAgent = clickedAgent;
    }


    if(selectedAgent && selectedItem){
        if(selectedItem.cost <= currentmoney)
        {
            currentmoney = currentmoney - selectedItem.cost;
            UpdateMoney();
            selectedItem.play(selectedAgent, Ourboard);
            console.log("Item played.");
            UpdateOurBoard();
            UpdateHand(selectedItem);
            if(selectedItem.type == "Molotov"){
                burndmg = 2;
            }
            selectedItem = undefined;
            selectedAgent = undefined;
        }
    }
    else if(selectedAgent && selectedWeapon){
        if(selectedWeapon.cost <= currentmoney){
            currentmoney = currentmoney - selectedWeapon.cost;
            UpdateMoney();
            selectedWeapon.play(selectedAgent);
            selectedAgent.SetAttackValue();
            console.log("Weapon played");
            UpdateOurBoard();
            UpdateHand(selectedWeapon);
            selectedWeapon = undefined;
            selectedAgent = undefined;
        }
    }
}
function EnemyClicked(event) {
    selectedWeapon = undefined;
    const clickedEnemy = Enemyboard.find(enemy => enemy.id === event.currentTarget.id);
    selectedenemy = clickedEnemy;
    if (selectedAgent instanceof Agent && selectedenemy instanceof Enemy) {
            selectedAgent.Attack(clickedEnemy);
            selectedAgent.SetAttackValue();
            selectedAgent = undefined;
            UpdateEnemyBoard();
            UpdateOurBoard();
    } 
    else if(!selectedItem){
        console.log("No Agent Selected!");
    }

    if(selectedItem && selectedenemy){
        if(selectedItem.cost <= currentmoney)
        {
            currentmoney = currentmoney - selectedItem.cost;
            UpdateMoney();
            selectedItem.play(selectedenemy, Enemyboard);
            console.log("Item played on enemy.");
            UpdateEnemyBoard();
            if(selectedItem.type == "Molotov"){
                burndmg = 2;
            }
            UpdateHand(selectedItem);
            selectedItem = undefined;
            selectedenemy = undefined;
        }
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
    if(Ourhand.length >= 10){
        let drawnCard = playerCase[0];
        playerCase.splice(0,1);
        alert(`Card burned: ${drawnCard.imagePath}`);
        console.log(drawnCard);
    }
    else if(playerCase.length != 0){
        let drawnCard = playerCase[0];
        UpdateHandwithoutPlayedCard();
        drawnCard.id = `item${Ourhand.length+1}`;
        Ourhand.push(drawnCard);
        playerCase.splice(0,1);
    
        let div = document.createElement('div');
        div.classList.add('cardInHand');
        div.id = `item${Ourhand.length}`
        document.querySelector('.player_hand').appendChild(div);

        let infobar = document.createElement('div');
        infobar.classList.add('infobar_item')
        document.querySelector(`#item${Ourhand.length}`).appendChild(infobar);
        
    
        if (drawnCard instanceof Item) {
            document.querySelector(`#item${Ourhand.length}`).addEventListener("click", ItemClicked);
            let type = document.createElement('div');
            type.classList.add('type');
            type.innerHTML = drawnCard.type;
            document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(type)
        } 
        else {

        document.querySelector(`#item${Ourhand.length}`).addEventListener("click", WeaponClicked);
        let damage = document.createElement('div');
        damage.classList.add('damage');
        damage.innerHTML = `Damage: ${drawnCard.damage}`;
        document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(damage)
    
        let durability = document.createElement('div');
        durability.classList.add('durability');
        durability.innerHTML = `Durability: ${drawnCard.durability}`;
        document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(durability);
        }
    
        let cost = document.createElement('div');
        cost.classList.add('cost');
        cost.innerHTML = `Cost: ${drawnCard.cost}`;
        document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(cost);

        let img = document.createElement('img');
        img.src = drawnCard.imagePath;
        document.querySelector(`#item${Ourhand.length}`).appendChild(img);
    }
    if(playerCase.length == 0){
        Fatigue();
    }
    
}
function UpdateHand(playedcard){
    let indexofplayedcard = Ourhand.indexOf(playedcard);
    Ourhand.splice(indexofplayedcard, 1);

    const handdiv = document.getElementById(`item${indexofplayedcard+1}`);
            if (handdiv) {
                handdiv.remove();
            }
    let i = 1;
    Ourhand.forEach(card =>{
        const handdivI = document.getElementById(card.id);
        card.id = `item${i}`;
        handdivI.id = `item${i}`;
        i++;
    });
}
function UpdateHandwithoutPlayedCard(){
    let i = 1;
    Ourhand.forEach(card =>{
        const handdivI = document.getElementById(card.id);
        card.id = `item${i}`;
        handdivI.id = `item${i}`;
        i++;
    });
}
function UpdateOurBoard(){
    Ourboard.forEach(agent => {
        if(agent.hp <= 0){
            let index = Ourboard.indexOf(agent);
            Ourboard.splice(index, 1);

            const agentDiv = document.getElementById(agent.id);
            if (agentDiv) {
                agentDiv.remove();
            }
        }
        else {
            const agentDiv = document.getElementById(agent.id);
            if (agentDiv) {
                const healthCounter = agentDiv.querySelector('.hpCounter');
                if (healthCounter) {
                    healthCounter.textContent = agent.hp;
                }
            }
        }
        const dmgDiv = document.querySelector(`#${agent.id} .infobar .attackValue`);
        dmgDiv.textContent = agent.attackValue;
        //TODO: KÉP!!!
    });
    GameEndedcheck();
}
function UpdateEnemyBoard(){
    Enemyboard.forEach(enemy => {
        if(enemy.hp <= 0){
            let index = Enemyboard.indexOf(enemy);
            Enemyboard.splice(index, 1);

            const enemydiv = document.getElementById(enemy.id);
            if (enemydiv) {
                enemydiv.remove();
            }
        }
        else {
            const enemydiv = document.getElementById(enemy.id);
            if (enemydiv) {
                const healthCounter = enemydiv.querySelector('.hpCounter');
                if (healthCounter) {
                    healthCounter.textContent = enemy.hp;
                }
            }
        }
    });
    GameEndedcheck();

    let i = 1;
    Enemyboard.forEach(enemy =>{
        const enemydiv = document.getElementById(enemy.id);
        enemy.id = `enemy${i}`;
        enemydiv.id = `enemy${i}`;
        i++;
    });
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
    Enemyboard.forEach(minion => {
        minion.canAttack = true;
    });
}

function EndTurn(){
    burn();
    EnemysAttack();
    //existing enemys will attack
    //THEN enemys will spawn
    UpdateEnemyBoard();
    UpdateOurBoard();
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
    UpdateEnemyBoard();
    if(Enemyboard.length <= 4){
        let spawnboss = Math.floor(Math.random()*20);
        if(bossspawned == false && spawnboss == 19){
            SpawnBoss();
            bossspawned = true;
        }
    }
    if (bossspawned == false && Enemyboard.length < 7){
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
    
    let div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i}`
    if (playerTeam == 'T') {
        div.classList.add('counterTerrorist');
    } else {
        div.classList.add('terrorist');
    }
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

    let agentImage = document.createElement('img');
    agentImage.classList.add('agentImage');
    let rnd = Math.floor(Math.random() * 8) + 1;
    let enemyTeam = null;
    if (playerTeam == 'T') {
        enemyTeam = 'ct';
    } else {
        enemyTeam = 't';
    }
    agentImage.src = `img/${enemyTeam}${rnd}.png`;
    document.querySelector(`#enemy${i}`).appendChild(agentImage);

    div.addEventListener("click", EnemyClicked);
    }
}

function SpawnBoss(){
    UpdateEnemyBoard();
    let i = Enemyboard.length+1;
    let bossweapon = new Weapon(6,5,0,10, "img/AK47.png", undefined);
    let bosssecondary = new Weapon(2,0,1,10, "img/Glock.png", undefined);
    let enemy = new Enemy(10, bossweapon, undefined, "img/mini.png", `enemy${i}`);
    Enemyboard.push(enemy);

    let div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i}`
    if (playerTeam == 'T') {
        div.classList.add('counterTerrorist', 'counterTerroristBoss')
    } else {
        div.classList.add('terrorist', 'terroristBoss')
    }
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
    enemy = new Enemy(20, bossweapon, bosssecondary, "img/boss.png", `enemy${i+1}`);
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

}

function EnemysAttack(){
    //TODO: enemys attack a random agent


    UpdateEnemyBoard();
    UpdateOurBoard();
}

function GameEndedcheck(){
    if(Ourboard.length == 0 && bossspawned == true && Enemyboard.length == 0){
        alert("Draw.")
    }
    else if(Ourboard.length == 0){
        alert("You lost lol");
    }
    else if(bossspawned == true && Enemyboard.length == 0){
        alert("You won... nothing.")
    }
}

function burn(){
    if(burndmg != 0){
        Enemyboard.forEach(enemy => {
            enemy.hp -= burndmg;
        });
        Ourboard.forEach(agent=>{
            agent.hp -= burndmg;
        });
        burndmg--;
    }
}

function SetBackground() {
    let r = Math.floor(Math.random() * 4) + 1;
    document.querySelector('body').style.backgroundImage = `url(img/bg${r}.png)`;
    
}