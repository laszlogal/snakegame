export interface  SnakeDisplay {
    refresh(): void;
    drawSnakeBlock(column: number, row: number): void;
    drawFruit(fruit: [number, number]): void;
    showInfo(message: string): void;
    showPoints(points: number): void;
}