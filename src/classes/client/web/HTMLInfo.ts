export class HTMLInfo {
    constructor(private container: HTMLElement) {}

    show(message: string): void {
        this.container.innerText = message;
    }

    clear(): void {
        this.show("");
    }
}