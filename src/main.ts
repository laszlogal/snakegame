import { HTMLGameFactory } from "./classes/client/web/HTMLGameFactory.js";
import { GameBuilder } from "./GameBuilder.js";

let g = new GameBuilder(new HTMLGameFactory());
g.start();