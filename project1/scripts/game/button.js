function button(x,y,width,height,color,text,textColor,fontSize,textX,textY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
    this.textX = this.x+textX;
    this.textY = this.y+this.height-textY;
    this.textColor = textColor;
    this.fontSize = fontSize;
    
    this.show = () => {
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
        c.font = this.fontSize + " Arial";
        c.fillStyle = this.textColor;
        c.fillText(this.text, this.textX, this.textY);
    }
}

let retry = new button(innerWidth-300,innerHeight-200,55,25,'#6E6E6E',"Retry","white","20px",3,6);
let mainMenu = new button(300,innerHeight-200,115,25,'#6E6E6E',"Main menu","white","22px",3,6);
let play = new button(innerWidth/2-100,innerHeight/2-100,200,40,'#6E6E6E',"Play",'white',"35px",65,10);
let settings = new button(innerWidth/2-100,innerHeight/2-25,200,40,'#6E6E6E',"Settings",'white',"35px",40,10);
let returnFromSettings = new button(innerWidth-250,innerHeight-150,200,40,'#6E6E6E',"Return",'white',"35px",40,10);
let tutorial = new button(innerWidth/2-100,innerHeight/2+50,200,40,'#6E6E6E',"Tutorial",'white',"35px",45,10);
let returnFromTutorial = new button(innerWidth-250,innerHeight-150,200,40,'#6E6E6E',"Return",'white',"35px",45,10);
let Normal = new button(innerWidth/2-300,innerHeight/2-100,200,40,'#6E6E6E',"Normal",'white',"35px",45,10);
let Hardcore = new button(innerWidth/2+100,innerHeight/2-100,200,40,'#6E6E6E',"ofek's mod",'white',"35px",15,10);