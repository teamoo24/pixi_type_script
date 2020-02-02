import * as PIXI from 'pixi.js';
import SlotGame from './SlotGame';
export default class Reel extends PIXI.Container {
    constructor(index) {
        super();
        this.blur = new PIXI.filters.BlurFilter();
        this.index = 0;
        this.previousIndex = 0;
        this.x = index * Reel.WIDTH;
        this.blur.blurX = 0;
        this.blur.blurY = 0;
        this.filters = [this.blur];
        for (let i = 0; i < 4; i++) {
            const symbol = new PIXI.Sprite();
            this.updateSymbol(symbol);
            this.addChild(symbol);
        }
    }
    static get randomTexture() {
        if (Reel.slotTextures.length === 0) {
            for (let i = 0; i < SlotGame.resources.length; i++) {
                const resource = SlotGame.resources[i];
                Reel.slotTextures.push(PIXI.Texture.from(resource));
            }
        }
        return Reel.slotTextures[Math.floor(Math.random() * Reel.slotTextures.length)];
    }
    update() {
        this.blur.blurY = (this.index - this.previousIndex) * 8;
        this.previousIndex = this.index;
        for (let i = 0; i < this.children.length; i++) {
            const symbol = this.children[i];
            if (!symbol.texture) {
                continue;
            }
            const prevY = symbol.y;
            symbol.y = ((this.index + i) % this.children.length) * Reel.SYMBOL_SIZE - Reel.SYMBOL_SIZE;
            if (prevY <= Reel.SYMBOL_SIZE) {
                continue;
            }
            if (symbol.y >= 0) {
                continue;
            }
            this.updateSymbol(symbol);
        }
    }
    updateSymbol(symbol) {
        symbol.texture = Reel.randomTexture;
        symbol.scale.x = symbol.scale.y = Math.min(Reel.SYMBOL_SIZE / (symbol.width / symbol.scale.x), Reel.SYMBOL_SIZE / (symbol.height / symbol.scale.y));
        symbol.x = Math.round((Reel.SYMBOL_SIZE - symbol.width) / 2);
    }
}
Reel.WIDTH = 160;
Reel.SYMBOL_SIZE = 150;
Reel.slotTextures = [];
