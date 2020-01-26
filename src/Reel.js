"use strict";
// スロットの各リール
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// こちらのimport文は"npm install"でインストールされたpixi.jsの全てのAPIを読み込む
var PIXI = require("pixi.js");
// es6ターゲットでのReel.jsファイルです
// es5ターゲットでのRell.jsファイルはReel.jsファイルです。(古い仕様)
var Reel = /** @class */ (function (_super) {
    __extends(Reel, _super);
    // Reelの親クラスである「PIXI.Sprite」は、numberのを引数に取るコンストラクタのシグニチャを持たないため、
    // 引数なしに呼びたします。
    // なお、super実行以前のthisへのアクセスは、thisたらしめる親クラスのprototypeが参照されていないため禁止されており、
    // トランスパイルエラーとなります。
    function Reel(index) {
        return _super.call(this) || this;
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
    Reel.prototype.update = function () {
    };
    Reel.prototype.updateSymbol = function (symbol) {
    };
    Reel.WIDTH = 160;
    Reel.SYMBOL_SIZE = 150;
    return Reel;
}(PIXI.Container));
exports["default"] = Reel;
