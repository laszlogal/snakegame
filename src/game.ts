import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";

let canvas = document.querySelector("#game-area") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
if (ctx) {
   let display: SnakeDisplay = new HTMLSnakeDisplay(ctx);
   display.refresh();
} else {
   console.log("No context")
}
