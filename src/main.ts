import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/client/web/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
import { Dimension } from "./interfaces/Dimension.js";
import { SnakeOptions } from "./interfaces/SnakeOptions.js";
import { Direction } from "./classes/Direction.js";
import { Snake } from "./classes/Snake.js";
import { SnakeController } from "./classes/SnakeController.js";
import { HTMLLoop } from "./classes/client/web/HTMLLoop.js";
import { HTMLInfo } from "./classes/client/web/HTMLInfo.js";
import { SnakeKeyHandler } from "./SnakeKeyHandler.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let pointsDiv = document.querySelector("#points") as HTMLDivElement;
let infoDiv = document.querySelector("#info") as HTMLDivElement;
let info = new HTMLInfo(infoDiv);
let ctx = canvas.getContext("2d");
let options: SnakeOptions = {rows: 30, columns: 30, hasGrid: true};

let snake = new Snake([options.columns / 2, options.rows / 2], 3, Direction.LEFT);
let game = new GameContext(options, snake);
let controller = new SnakeController(snake, game, info);
if (ctx) {
   let dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx, game, dimension);
   let keys = new SnakeKeyHandler(game, controller, display);
   window.addEventListener("keydown", (event: KeyboardEvent) => {
      keys.handle(event);
   }, false);
   
   let loop = new HTMLLoop(30, () => {
      if (game.isInGame()) {
         controller.move();
         display.refresh();
         pointsDiv.innerText = game.getPoints() + "";
      } else {
         info.show("Press any key to start!")
      }
   })
   loop.start();
   display.refresh();
} else {
   console.log("No context")
}

