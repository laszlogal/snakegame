export class Snake {
    constructor(head, length) {
        this.head = head;
        this.body = [];
        this.body.push(head);
        for (let i = 1; i < length; i++) {
            this.body.push([head[0], head[1] + i]);
        }
    }
    show(display) {
        this.body.forEach(block => {
            display.drawSnakeBlock(block[0], block[1]);
        });
    }
}
