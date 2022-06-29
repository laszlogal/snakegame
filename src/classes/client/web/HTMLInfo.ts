import { Info } from "../../../interfaces/Info";

export class HTMLInfo implements Info {
    constructor(private container: HTMLElement, private pointsContainer: HTMLElement ) {}

    show(message: string): void {
        this.container.innerText = message;
    }

    points(point: number) {
        this.pointsContainer.innerText = "Points: " + point;
    }

    clear(): void {
        this.show("");
    }
}