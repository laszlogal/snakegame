"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var Direction_1 = require("../src/classes/Direction");
var Snake_1 = require("../src/classes/Snake");
describe("Snake test", function () {
    it("Creation", function () {
        var tail = [10, 10];
        var snake = new Snake_1.Snake(tail, 3, Direction_1.Direction.DOWN);
        blockEquals(snake.tail(), 10, 10);
        blockEquals(snake.head(), 10, 12);
    });
    it("Move down", function () {
        var tail = [10, 10];
        var snake = new Snake_1.Snake(tail, 3, Direction_1.Direction.DOWN);
        snake.move();
        blockEquals(snake.tail(), 10, 11);
        blockEquals(snake.head(), 10, 13);
    });
    it("Move left", function () {
        var tail = [10, 10];
        var snake = new Snake_1.Snake(tail, 3, Direction_1.Direction.DOWN);
        snake.turnLeft();
        snake.move();
        //blockEquals(snake.tail(), 10, 11);
        blockEquals(snake.head(), 9, 12);
    });
});
function blockEquals(head, col, row) {
    (0, chai_1.expect)(head[0]).equal(col);
    (0, chai_1.expect)(head[1]).equal(row);
}
