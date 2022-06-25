"use strict";
exports.__esModule = true;
exports.Snake = void 0;
var Direction_1 = require("../classes/Direction");
var Snake = /** @class */ (function () {
    function Snake(tailBlock, length, direction) {
        this.direction = direction;
        this.body = [];
        for (var i = 0; i < length; i++) {
            this.body.push([tailBlock[0], tailBlock[1] + i]);
        }
    }
    Snake.prototype.head = function () {
        return this.body[this.body.length - 1];
    };
    Snake.prototype.tail = function () {
        return this.body[0];
    };
    Snake.prototype.show = function (display) {
        this.body.forEach(function (block) {
            display.drawSnakeBlock(block[0], block[1]);
        });
    };
    Snake.prototype.move = function () {
        this.body.shift();
        this.body.push(this.newHead());
        
    };
    Snake.prototype.newHead = function () {
        var result = [this.head()[0], this.head()[1]];
        switch (this.direction) {
            case Direction_1.Direction.DOWN:
                result[1]++;
                break;
            case Direction_1.Direction.UP:
                result[1]++;
                break;
        }
        return result;
    };
    return Snake;
}());
exports.Snake = Snake;
