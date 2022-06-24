import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
import { GameContext } from "./classes/GameContext.js";
let canvas = document.querySelector("#game-area");
let ctx = canvas.getContext("2d");
let game = new GameContext(10, 10);
if (ctx) {
    let dimension = { "width": canvas.offsetWidth, "height": canvas.offsetHeight };
    let display = new HTMLSnakeDisplay(ctx, game, dimension);
    display.refresh();
    console.log("ready for Snake!");
}
else {
    console.log("No context");
}
