import { HTMLSnakeDisplay } from "./classes/HTMLSnakeDisplay.js";
let canvas = document.querySelector("#game-area");
let ctx = canvas.getContext("2d");
if (ctx) {
    let display = new HTMLSnakeDisplay(ctx);
    display.refresh();
}
else {
    console.log("No context");
}
