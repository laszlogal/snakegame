import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
import { Dimension } from "./interfaces/Dimension.js";
import { SnakeOptions } from "./interfaces/SnakeOptions.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
let options: SnakeOptions = {hasGrid: true};
let game = new GameContext(30, 30, options);

if (ctx) {
   let dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx, game, dimension);
   game.snakeLeft();
   game.moveSnake();
   display.refresh();
   console.log("ready for Snake!");
} else {
   console.log("No context")
}
