import * as PIXI from 'pixi.js';
import UI from './UI';
export default class SlotGame {
    constructor() {
        this.onReady = () => { };
        if (!document.body) {
            throw new Error('window is not ready');
        }
        Debug: {
            // pixiAppOption.preserveDrawingBuffer = true;
            document.body.addEventListener('keydown', (event) => {
                if (event.ctrlKey && event.key === 'c') {
                    const a = document.createElement('a');
                    a.setAttribute('href', this.app.view.toDataURL());
                    a.setAttribute('download', `figure_${new Date().getTime()}`);
                    a.click();
                }
            });
        }
        this.app = new PIXI.Application({
            view: document.getElementById("game"),
            width: SlotGame.width,
            height: SlotGame.height,
            backgroundColor: 0x1099bb,
            preserveDrawingBuffer: true
        });
        for (let i = 0; i < SlotGame.resources.length; i++) {
            const resource = SlotGame.resources[i];
            this.app.loader.add(resource);
        }
        this.app.loader.load(() => {
            this.ui = new UI();
            this.onReady();
        });
    }
    start() {
        if (!this.ui) {
            this.onReady = () => this.start();
            return;
        }
        this.app.stage.addChild(this.ui);
        this.app.ticker.add(() => {
            this.ui.update();
        });
    }
}
SlotGame.width = 800;
SlotGame.height = 640;
SlotGame.resources = [
    '/assets/animalface_kangaroo.png',
    '/assets/animalface_kirin.png',
    '/assets/animalface_tanuki.png',
    '/assets/animalface_usagi.png'
];
