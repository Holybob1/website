function Bullet(x, y, xTarget, yTarget, width, height, color, angle, owner) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.xTarget = xTarget;
    this.yTarget = yTarget;
    this.owner = owner;
    
    this.draw = () => {
        c.fillStyle = this.color;
        c.fillRect(this.width/2,this.height/2,-this.width,-this.height);
    }
    this.rotate = () => {
        c.translate(this.x,this.y);
        c.rotate(this.angle);
    }
    this.calculateDir = () => {
        this.xDis = this.xTarget - this.x;
        this.yDis = this.yTarget - this.y;   
        this.distance = getDistance(this.xTarget,this.yTarget,this.x,this.y);
        this.xSide = undefined;
        this.ySide = undefined;
        
        if( this.xDis > 0 && this.yDis < 0){
            this.xSide = 1;
            this.ySide = -1;
        }
        if(this.xDis < 0 && this.yDis < 0 ){
            this.xSide = -1;
            this.ySide = -1
        }  
        if(this.xDis > 0 && this.yDis > 0){
            this.xSide = 1;
            this.ySide = 1;
        } 
        if(this.xDis < 0 && this.yDis > 0){
            this.xSide = -1;
            this.ySide = 1;
        }
        
        this.positiveY = Math.sqrt(Math.pow(this.yDis, 2));
        this.positiveX = Math.sqrt(Math.pow(this.xDis,2));
         
        this.dx = ((this.positiveX / this.distance) * this.xSide) * 15; 
        this.dy = ((this.positiveY / this.distance) * this.ySide) * 15; 

    }
    this.update =  () => {
        c.save();
        this.rotate();
        this.draw();
        c.restore();
        
        this.x += this.dx;
        this.y += this.dy;
    }

    this.calculateDir();
}