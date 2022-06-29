import { GameContext } from "../classes/GameContext";
import { Info } from "./Info";
import { Loop } from "./Loop";
import { LoopMain } from "./LoopMain";
import { SnakeDisplay } from "./SnakeDisplay";

export interface GameFactory {
    createInfo(): Info;
    createLoop(callback: LoopMain): Loop;
    createDisplay(game: GameContext): SnakeDisplay;
    attachKeys() : void;
}