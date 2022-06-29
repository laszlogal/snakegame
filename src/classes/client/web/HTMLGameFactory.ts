import { Dimension } from "../../../interfaces/Dimension.js";
import { GameFactory } from "../../../interfaces/GameFactory.js";
import { Info } from "../../../interfaces/Info.js";
import { Loop } from "../../../interfaces/Loop.js";
import { LoopMain } from "../../../interfaces/LoopMain.js";
import { SnakeDisplay } from "../../../interfaces/SnakeDisplay.js";
import { GameContext } from "../../GameContext.js";
import { HTMLInfo } from "./HTMLInfo.js";
import { HTMLLoop } from "./HTMLLoop.js";
import { HTMLSnakeDisplay } from "./HTMLSnakeDisplay.js";

export class HTMLGameFactory implements GameFactory {
    constructor() {

    }
    createInfo(): Info {
        let infoDiv = document.querySelector("#info") as HTMLDivElement;
        return new HTMLInfo(infoDiv);
    }

    createLoop(main: LoopMain) : Loop {
        return new HTMLLoop(30, main);
    }
   
    createDisplay(game: GameContext): SnakeDisplay {
        const canvas = document.querySelector("#game-area") as HTMLCanvasElement;
        const dimension: Dimension = {"width": canvas.offsetWidth, "height": canvas.offsetHeight}
        //const pointsDiv = document.querySelector("#points") as HTMLDivElement;
        const ctx = canvas.getContext("2d")!;
        return new HTMLSnakeDisplay(ctx, game, dimension);
    }
    attachKeys(): void {
        throw new Error("Method not implemented.");
    }

  

}