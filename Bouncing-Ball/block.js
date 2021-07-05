export class Block{
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }
    
    draw(ctx) {
        const xGap = 30;
        const yGap = 10;

        ctx.fillStyle = '#a8dba8';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        ctx.fillStyle = "#3b8686";
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX -xGap, this.maxY + yGap);
        ctx.lineTo(this.x -xGap, this.maxY+yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = "#79bd9a";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x- xGap, this.maxY + yGap);
        ctx.lineTo(this.x -xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}