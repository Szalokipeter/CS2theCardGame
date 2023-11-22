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
    new Weapon(8,8,0,2, "img/awp.png", undefined),
    new Weapon(6,5,0,4, "img/ak47.png", undefined),
    new Weapon(4,5,0,4, "img/galil.png", undefined),
    new Weapon(3,2,1,8, "img/tec9.png", undefined),
    new Weapon(4,3,0,2, "img/mac10.png", undefined),
    new Weapon(4,3,0,3, "img/mp9.png", undefined),
    new Weapon(6,2,1,2, "img/desert_eagle.png", undefined),
    new Weapon(6,5,0,5, "img/ak47.png", undefined),
    new Weapon(4,5,0,4, "img/galil.png", undefined),
    new Weapon(2,0,1,8, "img/glock.png", undefined)
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
let currentmaxmoney = 5;
let currentmoney = 5;
let fatigue = 0;
let bossspawned = false;
let burndmg = 0;

SetBackground();
MakeStartButton();

function StartButtonPressed() {
document.getElementById("start").remove();

MakeAgents(playerTeam);
UpdateOurBoard();
StartGame();

    document.querySelector('#EndButton').addEventListener("click", EndTurn);
    document.querySelector('#case').addEventListener("click", CaseClicked);

    UpdateMoney();

}

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
        } else if(playerTeam == 'CT') {
            div.classList.add('counterTerrorist');
        }
        div.id = `agent${i}`
        document.querySelector('.player_cards').appendChild(div);

        let infobar = document.createElement('div');
        infobar.classList.add('infobar')
        infobar.style.backgroundColor = "black";
        document.querySelector(`#agent${i}`).appendChild(infobar);
        
        let slot1 = document.createElement('div');
        slot1.classList.add('slot1')
        document.querySelector(`#agent${i} > .infobar`).appendChild(slot1)
        
        let slot2 = document.createElement('div');
        slot2.classList.add('slot2');
        document.querySelector(`#agent${i} > .infobar`).appendChild(slot2);
        
        let hp = document.createElement('div');
        hp.classList.add('hpCounter');
        hp.innerHTML = agent.hp;
        hp.style.backgroundColor = "red";
        document.querySelector(`#agent${i} > .infobar`).appendChild(hp);


        let attackValue = document.createElement('div');
        attackValue.classList.add('attackValue');
        attackValue.innerHTML = agent.attackValue;
        attackValue.style.backgroundColor = "#8B8000";
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
        PrintInMessageArea("Weapon unselected.");
    }
    else{
        selectedWeapon = clickedWeapon;
        PrintInMessageArea("Weapon selected.");
    }


}

function ItemClicked(event){
    selectedAgent = undefined;
    selectedWeapon = undefined;
    let clickedItem = Ourhand.find(item => item.id === event.currentTarget.id);
    if(selectedItem === clickedItem){
        selectedItem = undefined;
        PrintInMessageArea("Item unselected.");
    }
    else{
        selectedItem = clickedItem;
        PrintInMessageArea("Item selected.");
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
            PrintInMessageArea("Item played.");
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
            PrintInMessageArea("Weapon played");
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
        PrintInMessageArea("No Agent Selected!");
    }

    if(selectedItem && selectedenemy){
        if(selectedItem.cost <= currentmoney)
        {
            currentmoney = currentmoney - selectedItem.cost;
            UpdateMoney();
            selectedItem.play(selectedenemy, Enemyboard);
            PrintInMessageArea("Item played on enemy.");
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
        DrawCard();
        UpdateMoney();
    }
    else{
        PrintInMessageArea("Not enough money.")
    }

}
function DrawCard(){
    if(Ourhand.length >= 5){
        let drawnCard = playerCase[0];
        playerCase.splice(0,1);
        PrintInMessageArea(`Card burned: ${(drawnCard.imagePath).substring(4, drawnCard.imagePath.length - 4)}`);
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
        infobar.style.backgroundColor = "gray";
        document.querySelector(`#item${Ourhand.length}`).appendChild(infobar);
        
    
        if (drawnCard instanceof Item) {
            document.querySelector(`#item${Ourhand.length}`).addEventListener("click", ItemClicked);
            let type = document.createElement('div');
            type.classList.add('type');
            type.style.backgroundColor = "wheat";
            type.innerHTML = drawnCard.type;
            document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(type)
        } 
        else {

        document.querySelector(`#item${Ourhand.length}`).addEventListener("click", WeaponClicked);
        let damage = document.createElement('div');
        damage.classList.add('damage');
        damage.innerHTML = `Damage: ${drawnCard.damage}`;
        damage.style.backgroundColor = "darkred";
        document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(damage)
    
        let durability = document.createElement('div');
        durability.classList.add('durability');
        durability.innerHTML = `Durability: ${drawnCard.durability}`;
        durability.style.backgroundColor = "purple";
        document.querySelector(`#item${Ourhand.length} > .infobar_item`).appendChild(durability);
        }
    
        let cost = document.createElement('div');
        cost.classList.add('cost');
        cost.innerHTML = `Cost: ${drawnCard.cost}`;
        cost.style.backgroundColor = "yellow";
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
                let slot1 = agentDiv.querySelector('.slot1');
                if (slot1 && agent.slot1) {
                slot1.style.backgroundImage = `url(${agent.slot1.imagePath})`;
                }
                let slot2 = agentDiv.querySelector('.slot2');
                if (slot2 && agent.slot2) {
                slot2.style.backgroundImage = `url(${agent.slot2.imagePath})`;
                }
            }
        }
        const dmgDiv = document.querySelector(`#${agent.id} .infobar .attackValue`);
        if(dmgDiv){
            dmgDiv.textContent = agent.attackValue;
        }
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
                const dmgcounter = enemydiv.querySelector(".attackValue");
                if(dmgcounter){
                    dmgcounter.textContent = enemy.attackValue;
                }
                let slot1 = enemydiv.querySelector('.slot1');
                if (slot1 && enemy.slot1) {
                slot1.style.backgroundImage = `url(${enemy.slot1.imagePath})`;
                }
                let slot2 = enemydiv.querySelector('.slot2');
                if (slot2 && enemy.slot2) {
                slot2.style.backgroundImage = `url(${enemy.slot2.imagePath})`;
                }
            }
        }
    });

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
    UpdateEnemyBoard();
    SpawnEnemy();
    StartTurn();
}

function UpdateMoney(){
    let moneydiv = document.querySelector(".money_counter");
    moneydiv.innerHTML = `${currentmoney}$`;
}

function Fatigue(){
    fatigue++;
    PrintInMessageArea("Fatigue Level Increased!");
}

function SpawnEnemy(){
    UpdateEnemyBoard();
    if(Enemyboard.length <= 3){
        let spawnboss = Math.floor(Math.random()*20);
        if(bossspawned == false && spawnboss == 19){
            SpawnBoss();
            bossspawned = true;
        }
    }
    if (bossspawned == false && Enemyboard.length < 6){
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
    infobar.style.backgroundColor = "black";
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
    hp.style.backgroundColor = "red";
    document.querySelector(`#enemy${i} > .infobar`).appendChild(hp);


    let attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    attackValue.style.backgroundColor = "#8B8000";
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
    UpdateEnemyBoard();
    }
}

function SpawnBoss(){
    UpdateEnemyBoard();
    let i = Enemyboard.length+1;
    let bossweapon = new Weapon(6,5,0,10, "img/ak47.png", undefined);
    let bosssecondary = new Weapon(2,0,1,10, "img/glock.png", undefined);
    let enemy = new Enemy(10, bossweapon, undefined, "img/mini.png", `enemy${i}`);
    Enemyboard.push(enemy);

    let div = document.createElement('div');
    div.classList.add('enemy');
    div.id = `enemy${i}`
    if (playerTeam == 'T') {
        div.classList.add('counterTerrorist', 'counterTerroristBoss');
    } else {
        div.classList.add('terrorist', 'terroristBoss');
    }
    document.querySelector('.enemy_cards').appendChild(div);

    let infobar = document.createElement('div');
    infobar.classList.add('infobar')
    infobar.style.backgroundColor = "black";
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
    hp.style.backgroundColor = "red";
    document.querySelector(`#enemy${i} > .infobar`).appendChild(hp);


    let attackValue = document.createElement('div');
    attackValue.classList.add('attackValue');
    attackValue.innerHTML = enemy.attackValue;
    attackValue.style.backgroundColor = "#8B8000";
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

    enemy = new Enemy(20, bossweapon, bosssecondary, "img/boss.png", `enemy${i+1}`);
    Enemyboard.push(enemy);


    let div2 = document.createElement('div');
    div2.classList.add('enemy');
    div2.id = `enemy${i+1}`
    if (playerTeam == 'T') {
        div2.classList.add('counterTerrorist', 'counterTerroristBoss');
    } else {
        div2.classList.add('terrorist', 'terroristBoss')
    }
    document.querySelector('.enemy_cards').appendChild(div2);

    let infobar2 = document.createElement('div');
    infobar2.classList.add('infobar')
    infobar2.style.backgroundColor = "black";
    document.querySelector(`#enemy${i+1}`).appendChild(infobar2);
    
    let slot1_2 = document.createElement('div');
    slot1_2.classList.add('slot1');
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(slot1_2)
    
    let slot2_2 = document.createElement('div');
    slot2_2.classList.add('slot2');
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(slot2_2);
    
    let hp2 = document.createElement('div');
    hp2.classList.add('hpCounter');
    hp2.innerHTML = enemy.hp;
    hp2.style.backgroundColor = "red";
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(hp2);


    let attackValue2 = document.createElement('div');
    attackValue2.classList.add('attackValue');
    attackValue2.innerHTML = enemy.attackValue;
    attackValue2.style.backgroundColor = "#8B8000";
    document.querySelector(`#enemy${i+1} > .infobar`).appendChild(attackValue2);

    let agentImage2 = document.createElement('img');
    agentImage2.classList.add('agentImage');
    let rnd2 = Math.floor(Math.random() * 8) + 1;
    let enemyTeam2 = null;
    if (playerTeam == 'T') {
        enemyTeam2 = 'ct';
    } else {
        enemyTeam2 = 't';
    }
    agentImage2.src = `img/${enemyTeam2}${rnd2}.png`;
    document.querySelector(`#enemy${i+1}`).appendChild(agentImage2);

    div2.addEventListener("click", EnemyClicked);


    enemy = new Enemy(10, bossweapon, undefined, "img/mini.png", `enemy${i+2}`);
    Enemyboard.push(enemy);

    let div3 = document.createElement('div');
    div3.classList.add('enemy');
    div3.id = `enemy${i+2}`
    if (playerTeam == 'T') {
        div3.classList.add('counterTerrorist', 'counterTerroristBoss');
    } else {
        div3.classList.add('terrorist', 'terroristBoss')
    }
    document.querySelector('.enemy_cards').appendChild(div3);

    let infobar3 = document.createElement('div');
    infobar3.classList.add('infobar')
    infobar3.style.backgroundColor = "black";
    document.querySelector(`#enemy${i+2}`).appendChild(infobar3);
    
    let slot1_3 = document.createElement('div');
    slot1_3.classList.add('slot1');
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(slot1_3)
    
    let slot2_3 = document.createElement('div');
    slot2_3.classList.add('slot2');
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(slot2_3);
    
    let hp3 = document.createElement('div');
    hp3.classList.add('hpCounter');
    hp3.innerHTML = enemy.hp;
    hp3.style.backgroundColor = "red";
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(hp3);


    let attackValue3 = document.createElement('div');
    attackValue3.classList.add('attackValue');
    attackValue3.innerHTML = enemy.attackValue;
    attackValue3.style.backgroundColor = "#8B8000";
    document.querySelector(`#enemy${i+2} > .infobar`).appendChild(attackValue3);

    let agentImage3 = document.createElement('img');
    agentImage3.classList.add('agentImage');
    let rnd3 = Math.floor(Math.random() * 8) + 1;
    let enemyTeam3 = null;
    if (playerTeam == 'T') {
        enemyTeam3 = 'ct';
    } else {
        enemyTeam3 = 't';
    }
    agentImage3.src = `img/${enemyTeam3}${rnd3}.png`;
    document.querySelector(`#enemy${i+2}`).appendChild(agentImage3);

    div3.addEventListener("click", EnemyClicked);
    UpdateEnemyBoard();
}

function EnemysAttack(){
    Enemyboard.forEach(enemy => {
        let selectedrandomfriendlyagent = randomIntFromInterval(1, Ourboard.length);
        let attackedagent = Ourboard.find(agent => agent.id === Ourboard[selectedrandomfriendlyagent-1].id)
        enemy.Attack(attackedagent);

    });

    UpdateEnemyBoard();
    UpdateOurBoard();
}

function GameEndedcheck(){
    if(Ourboard.length == 0 && bossspawned == true && Enemyboard.length == 0){
        PrintInMessageArea("Draw.")
        EndGame();
        return;
    }
    else if(Ourboard.length == 0){
        PrintInMessageArea("You lost.");
        EndGame();
        return;
    }
    else if(bossspawned == true && Enemyboard.length == 0){
        PrintInMessageArea("You won!")
        EndGame();
        return;
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

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

function EndGame(){
    if(document.querySelector('.sidebar').children.length <= 3){
        let button = document.createElement("button");
        button.addEventListener("click", StartAnotherGame);
        button.innerHTML = "Go Back";
        button.classList.add("restartbutton");
        document.querySelector('.sidebar').appendChild(button);
    }
}

function StartAnotherGame(){
    location.reload();
}

function PrintInMessageArea(message) {
    if(document.querySelector('.messageArea').innerHTML != "You won!" && document.querySelector('.messageArea').innerHTML != "You lost." && document.querySelector('.messageArea').innerHTML != "Draw.!"){
        document.querySelector('.messageArea').innerHTML = message;
    }
}

function MakeStartButton() {
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.innerHTML = "Start game"
    btn.addEventListener("click", StartButtonPressed);
    document.querySelector('.sidebar').appendChild(btn);
}