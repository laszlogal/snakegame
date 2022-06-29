import { GameContext } from "../classes/GameContext";
import { SnakeController } from "../classes/SnakeController";
import { Info } from "./Info";
import { Loop } from "./Loop";
import { LoopMain } from "./LoopMain";
import { SnakeDisplay } from "./SnakeDisplay";

export interface GameFactory {
    createInfo(): Info;
    createLoop(callback: LoopMain): Loop;
    createDisplay(game: GameContext, info: Info): SnakeDisplay;
    attachKeys(game: GameContext, controller: SnakeController, display: SnakeDisplay) : void;
}