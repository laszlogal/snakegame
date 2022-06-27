import { Loop } from "../../../interfaces/Loop";

export class HTMLLoop implements Loop {
    private fps: number = 60;    
    private fpsInterval: number = 1000.0 / this.fps;
    private past: number = 0;
    private speedTimer: number = 0;
    private running: boolean = false;
    constructor(private speed: number, private callback: () => void) {}

    start(): void {
        this.fpsInterval = 1000.0 / this.fps;
        this.past = this.timeNow();
        this.speedTimer = 0;
        this.running = true;
        this.scheduleAnimation();
    }

    scheduleAnimation() {
        window.requestAnimationFrame((time) => {this.execute()});
    }
    
    stop(): void {
        throw new Error("Method not implemented.");
    }

    execute(): void {
        if (!this.running) {
            return;
        }

        let now = this.timeNow();
        let elapsed = now - this.past;
        if (this.fpsInterval < elapsed) {
            this.past = now - (this.fpsInterval % elapsed);
            if (this.speedTimer == this.speed) {
                this.animate();
            }
            this.speedTimer++;
        }
        this.scheduleAnimation();
    }

    animate() {
        this.callback();
        this.speedTimer = 0;
    }

    timeNow(): number {
        return window.performance.now();
    }
        
}

