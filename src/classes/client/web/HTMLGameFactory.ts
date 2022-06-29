import { Dimension } from "../../../interfaces/Dimension.js";
import { GameFactory } from "../../../interfaces/GameFactory.js";
import { Info } from "../../../interfaces/Info.js";
import { Loop } from "../../../interfaces/Loop.js";
import { LoopMain } from "../../../interfaces/LoopMain.js";
import { SnakeDisplay } from "../../../interfaces/SnakeDisplay.js";
import { SnakeKeyHandler } from "../../../SnakeKeyHandler.js";
import { GameContext } from "../../GameContext.js";
import { SnakeController } from "../../SnakeController.js";
import { HTMLInfo } from "./HTMLInfo.js";
import { HTMLLoop } from "./HTMLLoop.js";
import { HTMLSnakeDisplay } from "./HTMLSnakeDisplay.js";

export class HTMLGameFactory implements GameFactory {
    constructor() {

    }
    createInfo(): Info {
        const infoDiv = document.querySelector("#info") as HTMLDivElement;
        const pointstDiv = document.querySelector("#points") as HTMLDivElement;
        return new HTMLInfo(infoDiv, pointstDiv);
    }

    createLoop(main: LoopMain) : Loop {
        return new HTMLLoop(30, main);
    }
   
    createDisplay(game: GameContext, info: Info): SnakeDisplay {
        const canvas = document.querySelector("#game-area") as HTMLCanvasElement;
        const dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
        //const pointsDiv = document.querySelector("#points") as HTMLDivElement;
        const ctx = canvas.getContext("2d")!;
        return new HTMLSnakeDisplay(ctx, game, dimension, info);
    }
 
    attachKeys(game: GameContext, controller: SnakeController, display: SnakeDisplay): void {
        const handler = new SnakeKeyHandler(game, controller, display);
        window.addEventListener("keydown", (key) => handler.handle(key));
    }

  

}