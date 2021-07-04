import class Ball {
    constructor(stageWidth, stageHeight, radius, speed){
        this. radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius*2;
        this.x = diameter + (Math.random()*stageWidth-diameter); //스테이지에 랜덤으로 위치
        this.y = diameter + (Math.random()*stageHeight-diameter);
    }

    draw(ctx, stageWidth, stageHeight){
        this.x += this.vx;
        this.y += this.vy;

        this.bouncingWindow(stageWidth, stageHeight);

        ctx.fillStyle = '#6AAFE6'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    }

    bouncingWindow(stageWidth, stageHeight){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this. radius;

        if(this.x <=minX || this.x >= maxX){ //왼쪽이나 오른쪽에 닿으면
            this.vx *= -1; //x축 방향 반대로
            this.x += this.vx; 
        } else if (this.y<=minY || this.y>= maxY){ //위나 아래에 닿으면
            this.vy *= -1; //y축 방향 반대로
            this.y = this.vy;
        }
    }
}