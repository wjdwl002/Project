import {
    Ball
} from './ball.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.cts = this.canvas.getContext('2d'); //캔버스의 드로잉 컨텍스트 반환 - 2d : 2차원 렌더링 컨텍스트(CanvasRenderingContext2D)

        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize(this),false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;
        this.cts.scale(2,2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}