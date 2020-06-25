document.body.style.margin = 0;
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let backButton = document.getElementById('backToHomePage');

canvas.width = window.innerWidth-8;
canvas.height = window.innerHeight-8;

let backgroundColor = '#212121';
let score = 0;
let killed = false;
let fire = false;
let enemyNum = 3;
let previousGameMode = undefined;

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })
window.addEventListener('resize',
    function () {
    canvas.width = window.innerWidth-8;
    canvas.height = window.innerHeight-8;

     retry = new button(innerWidth-300,innerHeight-200,55,25,'#6E6E6E',"Retry","white","20px",3,6);
    mainMenu = new button(300,innerHeight-200,115,25,'#6E6E6E',"Main menu","white","22px",3,6);
    play = new button(innerWidth/2-100,innerHeight/2-100,200,40,'#6E6E6E',"Play",'white',"35px",65,10);
    settings = new button(innerWidth/2-100,innerHeight/2-25,200,40,'#6E6E6E',"Settings",'white',"35px",40,10);
    returnFromSettings = new button(innerWidth-250,innerHeight-150,200,40,'#6E6E6E',"Return",'white',"35px",40,10);
    tutorial = new button(innerWidth/2-100,innerHeight/2+50,200,40,'#6E6E6E',"Tutorial",'white',"35px",45,10);
    returnFromTutorial = new button(innerWidth-250,innerHeight-150,200,40,'#6E6E6E',"Return",'white',"35px",45,10);
    Normal = new button(innerWidth/2-300,innerHeight/2-100,200,40,'#6E6E6E',"Normal",'white',"35px",45,10);
    Hardcore = new button(innerWidth/2+100,innerHeight/2-100,200,40,'#6E6E6E',"ofek's mod",'white',"35px",15,10);
})
function getRndNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getDistance(x1,y1,x2,y2){
    let xDis = x2 - x1;
    let yDis = y2 - y1;
    return Math.sqrt(Math.pow(xDis,2)+Math.pow(yDis,2))
}
function getAngle(originX, originY, targetX, targetY) {
    var dx = originX - targetX;
    var dy = originY - targetY;
    var angle = Math.atan2(-dy, -dx);
    angle *= 180 / Math.PI;
    if (angle < 0) angle += 360;
    
    return angle;
}




//player: movement 
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 68) {
        player.right = true;
    }
     if(e.keyCode === 65){
        player.left = true;
    }
     if(e.keyCode === 87){
        player.up = true;
    }
     if(e.keyCode === 83){
        player.down = true;
    }
});
window.addEventListener('keyup',(e) => {
    if (e.keyCode === 68) {
        player.right = false;
    }
     if(e.keyCode === 65){
        player.left = false;
    }
     if(e.keyCode === 87){
        player.up = false;
    }
     if(e.keyCode === 83){
        player.down = false;
    }
});

//player: shoot bullet
window.addEventListener('mousedown',() => { 
    if (inGame == true) {
        fire = true;    
    }
    
});

window.addEventListener('mouseup',() => {
    if (inGame == true) {
        fire = false;
    }
    
});


let player;
let bullets = [];
let types = [new eType(0),new eType(1),new eType(2)];
let enemys = [];

function set(){
    //set player
    player = new Player(innerWidth/2,innerHeight/2,40,40,'#7C7C80');

    //set enemy
    let x;
    let y;
    for (let i = 0; i < 3; i++) {
        let type = types[Math.round(Math.random()*2.4999)];
        x = getRndNum(0 + type.radius+5, innerWidth - type.radius+5);
        y = getRndNum(0 + type.radius+5, innerHeight - type.radius-5);
        

        //create the random enemy.
        enemys.push(new Enemy(x,y,type));

        
    }
}

function bulletChecks(){
    //check if enemy's bullet hit the player
    for (let i = 0; i < bullets.length; i++) {
        if(getDistance(player.x,player.y,bullets[i].x,bullets[i].y) < player.width/2 && bullets[i].owner === "Enemy"){
            player.life = player.life-1;
            bullets.splice(i,1);
            console.log("hit player");
            i--;
        }
    }
    //check if bullet hit the enemy.
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].owner === "Player") {
            for (let j = 0; j < enemys.length; j++) {
                if (getDistance(bullets[i].x,bullets[i].y,enemys[j].x,enemys[j].y) < enemys[j].radius) {
                    score += 1;
                    console.log("enemy hit  " + score);
                    bullets.splice(i,1);
                    enemys.splice(j,1);
                    i--;
                }
            }
        }
    }
    
    //check if the bullet out of view.
    for (let i = 0; i < bullets.length; i++) {
        if(bullets[i].x > innerWidth || bullets[i].x < 0 || bullets[i].y < 0 || bullets[i].y > innerHeight){
            bullets.splice(i,1);
            i--;
        }
    }
    

}

function showStats(){
    c.font = "22px Arial";
    c.fillStyle = "white";
    c.fillText("Score: " + score, 10, 20);
    c.fillText("Life: " + player.life, innerWidth-100, 20);    
}

function respawnEnemy(){
    //let Timer = 30;

    if (enemys.length < 3) {
        let type = types[Math.round(Math.random()*2.4999)];
        let x = getRndNum(0 + type.radius+5, innerWidth - type.radius+5);
        let y = getRndNum(0 + type.radius+5, innerHeight - type.radius-5);
        

        //create the random enemy.
        enemys.push(new Enemy(x,y,type));

   
    }
}



let inMainMenu = true;
let inGame = false;
let inSettings = false;
let inTutorial = false ;
let chooseGameMod = false;


//game loop
function game() {
        requestAnimationFrame(game);
        console.log(previousGameMode);

        //main menu
        if (inMainMenu == true) {
            c.clearRect(0,0,innerWidth,innerHeight);
            c.font ="50px Arial";
            c.fillStyle = '#FF0000';
            c.fillText("kentov's tps game", innerWidth/2-200, 40);
            play.show();
            settings.show();
            tutorial.show();
        }
        //gamemode menu
        if (chooseGameMod == true) {
            c.clearRect(0,0,innerWidth,innerHeight);
            Normal.show();
            Hardcore.show();
        }

        //Setting
        if (inSettings == true) {
            c.clearRect(0,0,innerWidth,innerHeight);
            returnFromSettings.show();
        }
        //Tutorial
        if (inTutorial == true) {
            c.clearRect(0,0,innerWidth,innerHeight);
            c.font = "50px Arial";
            c.fillStyle = 'red';
            c.fillText("tutorial", innerWidth/2-80, 60);
            returnFromTutorial.show();
            c.font = "20px Arial";
            c.fillStyle = 'white';
            c.fillText("this is a simple 2d shooter game, u can move the player with W,A,S,D.", 50, 200);
            c.fillText("the player will aim to the mouse and will shoot when you click on the left mouse button.", 50, 230);
            c.fillText("also u can hold click to spray.", 50, 260);
            c.fillText("when u spawn in the field 3 enemies will spawn with you. your mission is simple, take them down.", 50, 290);
            c.fillText("after u kill one another will spawn in a random place so kill as many as you can", 50, 320);
            c.fillText("before all your 10 lifes will end.", 50, 350);
            c.fillText("you can play in hardcore mod too in this mod u have only one life.", 50, 380);
        }
        //game
        if (inGame == true) {
        c.clearRect(0,0,innerWidth,innerHeight);
        
        player.update();
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].update();
        }
        for (let i = 0; i < enemys.length; i++) {
            enemys[i].update();
        }
        
        if (player.life === 0) {
            killed = true;
        }

        bulletChecks();
        respawnEnemy();
        showStats();
    }
    //death screen
    if (killed == true) {
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.font = "40px Arial";
        c.fillText("your score was " + score, 500, 200);
        retry.show();
        mainMenu.show();
    }
}

window.addEventListener('click', () => {
    //death screen buttons 
    if (killed == true) {
        player.life = 10;
        enemys = [];
        bullets = [];
        if (mouse.x> retry.x && mouse.x< retry.x + retry.width && mouse.y > retry.y && mouse.y < retry.y + retry.height) {
            set();
            score = 0;
            if (previousGameMode === "Hardcore") {
                player.life = 1;
            }
            if (previousGameMode === "Normal") {
                player.life = 10;
            }
            killed = false;
        }
        if (mouse.x> mainMenu.x && mouse.x< mainMenu.x + mainMenu.width && mouse.y > mainMenu.y && mouse.y < mainMenu.y + mainMenu.height) {
            killed = false;
            inGame = false;
            inMainMenu = true;
            
        }
        
    }
    //menu buttons
    if (inMainMenu == true) {
            score = 0;
            if (mouse.x > play.x && mouse.x < play.x + play.width && mouse.y > play.y && mouse.y < play.y + play.height) {
                inMainMenu = false;
                chooseGameMod = true;    
            }
            if (mouse.x> settings.x && mouse.x< settings.x + settings.width && mouse.y > settings.y && mouse.y < settings.y + settings.height) {
                inSettings = true;
                inMainMenu = false;
                console.log("settings pressed");
            }
            if (mouse.x> tutorial.x && mouse.x< tutorial.x + tutorial.width && mouse.y > tutorial.y && mouse.y < tutorial.y + tutorial.height) {
                inTutorial = true;
                inMainMenu = false;
                console.log("tutorial pressed");
            }
        }
    //choose gamemode
    if (chooseGameMod == true) {
        if (mouse.x> Hardcore.x && mouse.x< Hardcore.x + Hardcore.width && mouse.y > Hardcore.y && mouse.y < Hardcore.y + Hardcore.height) {
            previousGameMode = "Hardcore";
            set();
            player.life = 1;
            chooseGameMod = false;
            inGame = true;
            
        }
        if (mouse.x> Normal.x && mouse.x< Normal.x + Normal.width && mouse.y > Normal.y && mouse.y < Normal.y + Normal.height) {
            previousGameMode = "Normal";
            set();
            player.life = 10;
            chooseGameMod = false;
            inGame = true;
        }
    }

    //setting button
    if (inSettings == true) {
        if (mouse.x> returnFromSettings.x && mouse.x< returnFromSettings.x + returnFromSettings.width && mouse.y > returnFromSettings.y && mouse.y < returnFromSettings.y + returnFromSettings.height) {
            inSettings = false;
            inMainMenu = true;
            console.log("return pressed");
        }
    }
    //tutorial button
    if (inTutorial == true) {
        if (mouse.x> returnFromSettings.x && mouse.x< returnFromSettings.x + returnFromSettings.width && mouse.y > returnFromSettings.y && mouse.y < returnFromSettings.y + returnFromSettings.height) {
            inTutorial = false;
            inMainMenu = true;
            console.log("return pressed");
        }
    }
})

    game();    
    

