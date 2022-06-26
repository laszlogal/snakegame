import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
import { Dimension } from "./interfaces/Dimension.js";
import { SnakeOptions } from "./interfaces/SnakeOptions.js";
import { Direction } from "./classes/Direction.js";
import { Snake } from "./classes/Snake.js";
import { SnakeController } from "./classes/SnakeController.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
let options: SnakeOptions = {rows: 30, columns: 30, hasGrid: true};

let snake = new Snake([options.columns / 2, options.rows / 2], 3, Direction.LEFT);
let game = new GameContext(options, snake);
let controller = new SnakeController(snake, options.columns, options.rows)
if (ctx) {
   window.addEventListener("keydown", () => {
      controller.move();
      display.refresh();
   }, false);

   let dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx, game, dimension);
   display.refresh();
   console.log("ready for Snake!");
} else {
   console.log("No context")
}
