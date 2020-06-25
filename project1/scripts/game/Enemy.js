function Enemy(x,y,type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.radius = this.type.radius;
    this.color = this.type.color;
    this.angle;
    this.defaultShootingTime = 75;
    this.shootingTimer = this.defaultShootingTime;

    this.draw = () =>{
        //draw body
        c.beginPath();
        c.arc(0, 0, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        //draw eye
        c.beginPath();
        c.arc(4, 1, this.radius/6, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.fillStyle = '#000000';
        c.fill();
        c.stroke();

    }
    this.rotate = () => {
        c.translate(this.x,this.y);
        c.rotate(getAngle(this.x,this.y,player.x,player.y)* Math.PI / 180);
        this.angle = getAngle(this.x,this.y,player.x,player.y)* Math.PI / 180;
    }
    this.shoot = () => {
        bullets.push(new Bullet(this.x,this.y, player.x, player.y,5,5,'red',this.angle,"Enemy"));
    }
    this.update = () => {
        if (this.shootingTimer < 0) {
            this.shoot();
            this.shootingTimer = this.defaultShootingTime
        }
        c.save();
        this.rotate();
        this.draw();
        c.restore();
        this.shootingTimer = this.shootingTimer - 1;
    }
}

function eType(type) {
    this.radius;
    this.color;
    if (type === 0) {
        this.radius = 10;
        this.color = '#ff0000';
    }
    if (type === 1) {
        this.radius = 20;
        this.color = '#19FF5A';
    }
    if (type === 2) {
        this.radius = 15;
        this.color = '#0D22FF'
    }
}
