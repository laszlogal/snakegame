import { expect } from "chai";
import { Direction } from "../src/classes/Direction"
import { SnakeBlock, Snake } from "../src/classes/Snake"

describe("Snake test", () => {

    it("Creation", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.DOWN);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 10, 12);
    });

    
    it("Move down", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.DOWN);
        snake.move();
        blockEquals(snake.tail(), 10, 11);
        blockEquals(snake.head(), 10, 13);
    });

    it("Move left", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.DOWN);
        snake.turnLeft();
        snake.move();
        blockEquals(snake.tail(), 10, 11);
        blockEquals(snake.head(), 9, 12);
    });

})

function blockEquals(head: SnakeBlock, col: number, row: number) {
    expect(head[0]).equal(col);
    expect(head[1]).equal(row);
}