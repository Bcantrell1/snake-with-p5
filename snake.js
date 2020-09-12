class Snake {
    constructor() {
        this.verticalDirction = 0;
        this.horizontalDirction = 0;
        this.bodyLength = [];
        this.bodyLength[0] = createVector(floor(w/2), floor(h/2));
        this.tailLength = 0;
    }

    move(xDirection, yDirection) {
        this.verticalDirction = xDirection;
        this.horizontalDirction = yDirection;
    }

    update() {
        let mouth = this.bodyLength[this.bodyLength.length-1].copy();
        this.bodyLength.shift();
        mouth.x += this.verticalDirction;
        mouth.y += this.horizontalDirction;
        this.bodyLength.push(mouth);
    }

    grow(){
        let mouth = this.bodyLength[this.bodyLength.length-1].copy();
        this.tailLength++;
        this.bodyLength.push(mouth);
    } 

    gameOver() {
        if (this.bodyLength[0].x >= w || this.bodyLength[0].y >= h  || this.bodyLength[0].x < 0 || this.bodyLength[0].y < 0) {
            console.log('True');
            return true;
        }
        else {
            console.log('False');
            return false;
        }
    }

    eat(foodLocation) {
        let snakeXLocation = this.bodyLength[this.bodyLength.length -1].x;
        let snakeYLocation = this.bodyLength[this.bodyLength.length - 1].y;
        if(snakeXLocation == foodLocation.x && snakeYLocation == foodLocation.y){
          this.grow();
          console.log('grow');
            return true;
        }else {
            return false;
        }
    }

    show() {
        for(let i = 0; i < this.bodyLength.length; i++) {
            fill(255);
            noStroke();
            rect(this.bodyLength[i].x, this.bodyLength[i].y, 1, 1);
        }
    }
}