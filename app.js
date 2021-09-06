import {
    Ball
} from './ball.js';
import {
    Block
} from './block.js';
// import {
//     Button
// }from './button.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d'); //캔버스의 드로잉 컨텍스트 반환 - 2d : 2차원 렌더링 컨텍스트(CanvasRenderingContext2D)

        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        this.block = new Block(300,30,200,200);
        this.ball = new Ball(this.stageWidth,this.stageHeight,30,5,this.block)
        // this.speedBtn = new Button(this.window, [10,20,30], 'speed');

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight); //이전 그림 지우기

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
        this.block.draw(this.ctx);

    }
}

window.onload = () => {
    new App();
}