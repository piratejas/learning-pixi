import { Application, Sprite } from "pixi.js";

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
