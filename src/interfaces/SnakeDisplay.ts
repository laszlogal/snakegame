export interface  SnakeDisplay {
    refresh(): void;
    drawSnakeBlock(column: number, row: number): void;
    drawFood(column: number, row: number): void;
}