// こちらのimport文は"npm install"でインストールされたpixi.jsの全てのAPIを読み込む
import * as PIXI from 'pixi.js';
import UI from './UI'

export default class SlotGame {
	public static readonly width: number = 800;
	public static readonly height: number = 640;
	public static readonly resources: string[] = [
		'/assets/animalface_kangaroo.png',
		'/assets/animalface_kirin.png',
		'/assets/animalface_tanuki.png',
		'/assets/animalface_usagi.png',
	];

	private app!: PIXI.Application;
	private ui!:UI;
	private onReady: () => void = () =>{};

	constructor() {
		if ( !document.body ) {
			throw new Error ("window is not ready");
		}
		this.app = new PIXI.Application({
			width : SlotGame.width,
			height : SlotGame.height,
			backgroundColot : 0x1099bb,
		});
		document.body.appendChild(this.app.view);

		for (let i = 0; i < SlotGame.resources.length; i++) {
			const resource = SlotGame.resources[i];
			this.app.loader.add(resource);
		}

		this.app.loader.load(() => {
			this.ui = new UI();
			this.onReady();
		});
	}

	public start(): void {
	}
}