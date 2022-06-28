import { GameContext } from "./classes/GameContext.js";
import { SnakeController } from "./classes/SnakeController.js";
import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";

export class SnakeKeyHandler {
   constructor(private game: GameContext,
      private controller: SnakeController,
      private display: SnakeDisplay) {}
      
   handle(event: KeyboardEvent) {
      if (!this.game.isInGame()) {
         this.game.start();
      } else if (event.key === "ArrowUp") {
         this.controller.turnSnakeUp();
      } else if (event.key === "ArrowDown") {
         this.controller.turnSnakeDown();
      } else if (event.key === "ArrowLeft") {
         this.controller.turnSnakeLeft();
      } else if (event.key === "ArrowRight") {
         this.controller.turnSnakeRight();
      } else if (event.key === 's') {
         this.game.stop();
      } else if (event.key === 'r') {
         this.controller.reset();
      }

      this.display.refresh();
   };
}

