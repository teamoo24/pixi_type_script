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
	// ex) 複数の型指定と型の明確化の例
	// public multipleTypes(value: string|number): void {
	// 	if(typeof value === 'string') {
	// 		value.replace('foo','bar');
	// 	}
	// }
	// 型の明確化は、「as」を用いて単一の型にキャストすることでも解決されますが、こちらはキャストした型であることの確実性の
	// 担保が実装者に委ねられる
	// ex)型キャストの例
	// public multipleTypes(value: string | number): void {
	//	(value as string).replace('foo', 'bar');
	// }
	// メソッドの引数には、この他にもオプションやデフォルト値などが利用できます。
	// ex)引数のオプションとデフォルト
	// public argsVariants(defaultArg: number = 0, optionArg?: number): void {
	// 	console.log(defaultArg + (optionArg || 0));
	// }
	//
	// ex) 上記のソースを元に生まれるメソッドシグニチャ
	// argsVariants(): void;
	// argsVariants(defaultArg: number): void;
	// argsVariants(defaultArg: number, optionArg:number): void;
	public update(): void {
	}

	private updateSymbol(symbol: PIXI.Sprite): void{
	}
}