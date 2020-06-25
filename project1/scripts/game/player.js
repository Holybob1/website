function Player(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.dx = 0;
    this.acceleration = 1;
    this.friction = 0.94;
    this.width = width;
    this.height = height;
    this.color = color;
    this.angle = 0;
    this.up = false;
    this.down = false;
    this.right = false;
    this.left = false;
    this.life = 10
    this.fireTime = 10;
    this.fireCounter = this.fireTime;

    this.draw = () => {
        //draw body
        c.fillStyle = this.color;
        c.fillRect(this.width/2,this.height/2,-this.width,-this.height);

        //draw eye1
        c.fillStyle = '#fff000';
        c.fillRect(this.width/12+8,this.height/12+8,-this.width/6,-this.height/6);

         //draw eye2
        c.fillStyle = '#30a1fa';
        c.fillRect(this.width/12+8,this.height/12-8,-this.width/6,-this.height/6);       
    }
    this.rotate = () => {
        //calculate where the player supposed to face According to the mouse pos. 
        c.translate(this.x,this.y);
        c.rotate(getAngle(this.x,this.y,mouse.x,mouse.y)* Math.PI / 180);
        this.angle = getAngle(this.x,this.y,mouse.x,mouse.y)* Math.PI / 180;
    }
    this.move = () => {

        //speed limit
        if (this.dy < 7 && this.dy > -7) {
            if (this.up === true) {
                this.dy -= 1;
            } 
            if (this.down === true) {
                this.dy += 1;
            }    
        }
        if (this.dx < 7 && this.dx > -7) {
            if (this.left === true) {
                this.dx -= 1;
            } 
            if (this.right === true) {
                this.dx += 1;
            }    
        }    


        //adding friction
        this.dx = this.dx * this.friction;
        this.dy = this.dy * this.friction;
        
        //bounce of wall
        if (this.x + this.width/2 >= innerWidth || this.x - this.width/2 <= 0 ) {
            if (this.x + this.width/2 >= innerWidth) {
                this.x -= 1
            }else if (this.x - this.width/2 <= 0) {
                this.x += 1
            }
            this.dx = -this.dx;
        }
        if (this.y + this.height/2 >= innerHeight || this.y - this.height/2 <= 0) {
            if (this.y + this.height/2 >= innerHeight) {
                this.y -= 1
            }else if (this.y - this.height/2 <= 0) {
                this.y += 1
            }
            this.dy = -this.dy;
        }
        //accelerate
        this.x += this.dx;
        this.y += this.dy;
    }
    this.update =  () => {
        c.save();
        this.rotate();
        this.draw();
        c.restore();
        this.move();
        if (fire == true && this.fireCounter < 0) {
            bullets.push(new Bullet(this.x,this.y, mouse.x, mouse.y,5,5,'yellow',this.angle,"Player"));
            this.fireCounter = this.fireTime;
        }
        this.fireCounter--;
    }
}

