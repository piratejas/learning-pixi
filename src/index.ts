import { Application, Sprite, Graphics } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

// const conty: Container = new Container();
// conty.x = 200;
// conty.y = 0;
// app.stage.addChild(conty);

// const secondConty: Container = new Container();
// secondConty.x = 300;
// secondConty.y = 0;
// app.stage.addChild(secondConty);

// const thirdConty: Container = new Container();
// thirdConty.x = 400;
// thirdConty.y = 0;
// app.stage.addChild(thirdConty);

const clampy: Sprite = Sprite.from("assets/clampy.png");
// clampy.x = 0;
// clampy.y = 0;

// const clampy2: Sprite = Sprite.from("clampy.png");
// clampy2.x = -100;
// clampy2.y = 50;

// conty.addChild(clampy);
// clampy.addChild(clampy2);

// console.log(conty);

clampy.anchor.set(0.5);

// setting it to "the middle of the screen
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);

const graphy: Graphics = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;
