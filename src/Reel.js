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
var Reel = /** @class */ (function (_super) {
    __extends(Reel, _super);
    function Reel(index) {
        return _super.call(this) || this;
    }
    Reel.prototype.update = function () {
    };
    Reel.prototype.updateSymbol = function (symbol) {
    };
    return Reel;
}(PIXI.Container));
exports["default"] = Reel;
