// こちらのimport文は"npm install"でインストールされたpixi.jsの全てのAPIを読み込む
import * as PIXI from 'pixi.js';
import UI from './UI'

export default class SlotGame {
	// ES6 クロスプロパティ
	// readonlyは読み込み専用のソースを宣言する時に時に使用
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
		// DOM 読み込み判断
		// document.bodyがロード完了していない状態で、初期化された場合にはエラーを返すようにします。
		if ( !document.body ) {
			throw new Error ("window is not ready");
		}
		// PIXI.Applicationのインスタンス化
		// PIXI.jsは、WevGLキャンヴァストメインループ、最上位のpixi描画者コンテナを有するクラスをPIXI.Applicationとしています。引数では、WebGL解像度
		// と背景色を指定して初期化します。
		this.app = new PIXI.Application({
			width : SlotGame.width,
			height : SlotGame.height,
			backgroundColot : 0x1099bb,
		});

		// 上記で初期化したものを、WebGLキャンバスのDOMへ追加します。
		document.body.appendChild(this.app.view);

		// PIXI.jsでのリソースのダウンロード
		// PIXI.jsは、リモートにあるリソースを取得するためのAPIを提供する
		for (let i = 0; i < SlotGame.resources.length; i++) {
			const resource = SlotGame.resources[i];
			this.app.loader.add(resource);
		}

		// ES6では、関数定義に従来のfunctionを利用する構問
		// loadメソッド引数は、リソースダウンロード完了時のコールバック処理です。ここでUIの初期化と、ゲームの初期化完了コールバックの実行を行います。
		this.app.loader.load(() => {
			this.ui = new UI(this.app);
			this.onReady();
		});
	}

	public start(): void {
		if(!this.ui){
			this.onReady = () => this.start();
			return;
		}
		this.app.stage.addChild(this.ui);
		this.app.ticker.add(()=>{
			this.ui.update();
		});
	}
}