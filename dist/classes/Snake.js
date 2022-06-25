import { Direction } from "../classes/Direction.js";
export class Snake {
    constructor(tailBlock, length, direction) {
        this.direction = direction;
        this.body = [];
        for (let i = 0; i < length; i++) {
            this.body.push([tailBlock[0], tailBlock[1] + i]);
        }
    }
    head() {
        return this.body[this.body.length - 1];
    }
    tail() {
        return this.body[0];
    }
    show(display) {
        this.body.forEach(block => {
            display.drawSnakeBlock(block[0], block[1]);
        });
    }
    move() {
        this.body.shift();
        this.body.push(this.newHead());
    }
    newHead() {
        let result = [this.head()[0], this.head()[1]];
        switch (this.direction) {
            case Direction.LEFT:
                result[0]--;
                break;
            case Direction.RIGHT:
                result[0]++;
                break;
            case Direction.DOWN:
                result[1]++;
                break;
            case Direction.UP:
                result[1]++;
                break;
        }
        return result;
    }
    turnLeft() {
        this.direction = Direction.LEFT;
    }
}
