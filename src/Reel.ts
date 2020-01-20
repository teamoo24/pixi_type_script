// スロットの各リール

// こちらのimport文は"npm install"でインストールされたpixi.jsの全てのAPIを読み込む
import * as PIXI from 'pixi.js';


// es6ターゲットでのReel.jsファイルです
// es5ターゲットでのRell.jsファイルはReel.jsファイルです。(古い仕様)
export default class Reel extends PIXI.Container {
	// Reelの親クラスである「PIXI.Sprite」は、numberのを引数に取るコンストラクタのシグニチャを持たないため、
	// 引数なしに呼びたします。
	// なお、super実行以前のthisへのアクセスは、thisたらしめる親クラスのprototypeが参照されていないため禁止されており、
	// トランスパイルエラーとなります。
	constructor(index: number) {
		super();
	}

	// 複数の型を指定した場合、その変数のメソッドを実行する際は型がいずれかであることが明確になっていなければ、
	// トランスパイル時にエラーとなります。複数の型指定は、パイプで接続します。
	// ex)
	// public multipleTypes(value: string|number): void {
	// if(typeof value === 'string') {
	// 		value.replace('foo','bar');
	// 	}
	// }
	public update(): void {
	}

	private updateSymbol(symbol: PIXI.Sprite): void{
	}
}