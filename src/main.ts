import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
import { Dimension } from "./interfaces/Dimension.js";
import { SnakeOptions } from "./interfaces/SnakeOptions.js";
import { Direction } from "./classes/Direction.js";
import { Snake } from "./classes/Snake.js";
import { SnakeController } from "./classes/SnakeController.js";
import { HTMLLoop } from "./classes/HTMLLoop.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let pointsDiv = document.querySelector("#points") as HTMLDivElement;
let ctx = canvas.getContext("2d");
let options: SnakeOptions = {rows: 30, columns: 30, hasGrid: true};

let snake = new Snake([options.columns / 2, options.rows / 2], 3, Direction.LEFT);
let game = new GameContext(options, snake);
let controller = new SnakeController(snake, game);
if (ctx) {
   window.addEventListener("keydown", (event: KeyboardEvent) => {
      console.log("key: " + event.key);
      if(event.key === "ArrowUp") {
         snake.turnUp();
      } else if(event.key === "ArrowDown") {
         snake.turnDown();
      } else if(event.key === "ArrowLeft") {
         snake.turnLeft();
      } else if(event.key === "ArrowRight") {
         snake.turnRight();
      } else if(event.key === 'g') {
         snake.grow();
      } else if(event.key === 's') {
         game.toggle()
      }
      display.refresh();
   }, false);

   let dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx, game, dimension);
   let loop = new HTMLLoop(30, () => {
      if (game.isInGame()) {
         controller.move();
         display.refresh();
         pointsDiv.innerText = game.getPoints() + "";
      }
   })
   console.log("ready for Snake!");
   game.start();
   loop.start();
} else {
   console.log("No context")
}
