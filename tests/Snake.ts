import { expect } from "chai";
import { Direction } from "../src/classes/Direction"
import { SnakeBlock, Snake } from "../src/classes/Snake"

describe("Snake test", () => {

    it("Creation facing dowm", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.DOWN);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 10, 12);
    });

    
    it("Creation facing up", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.UP);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 10, 8);
    });

    it("Creation facing left", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.LEFT);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 8, 10);
    });

    it("Creation facing right", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.RIGHT);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 12, 10);
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

    it("Move right", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.DOWN);
        snake.turnRight();
        snake.move();
        blockEquals(snake.tail(), 10, 11);
        blockEquals(snake.head(), 11, 12);
    })

    it("Move up from up direction", () => {
        const tail: SnakeBlock = [10, 10];
        let snake = new Snake(tail, 3, Direction.UP);
        snake.move();
        blockEquals(snake.tail(), 10, 9);
        blockEquals(snake.head(), 10, 7);
    })

})

function blockEquals(head: SnakeBlock, col: number, row: number) {
    expect(head[0]).equal(col);
    expect(head[1]).equal(row);
}