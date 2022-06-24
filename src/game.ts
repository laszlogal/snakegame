import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
import { Dimension } from "./interfaces/Dimension.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
let game = new GameContext(10, 10);

if (ctx) {
   let dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx, game, dimension);
   display.refresh();
   console.log("ready for Snake!");
} else {
   console.log("No context")
}
