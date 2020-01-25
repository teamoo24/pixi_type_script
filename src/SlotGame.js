"use strict";
exports.__esModule = true;
// こちらのimport文は"npm install"でインストールされたpixi.jsの全てのAPIを読み込む
var PIXI = require("pixi.js");
var UI_1 = require("./UI");
var SlotGame = /** @class */ (function () {
    function SlotGame() {
        var _this = this;
        this.onReady = function () { };
        if (!document.body) {
            throw new Error("window is not ready");
        }
        this.app = new PIXI.Application({
            width: SlotGame.width,
            height: SlotGame.height,
            backgroundColot: 0x1099bb
        });
        document.body.appendChild(this.app.view);
        for (var i = 0; i < SlotGame.resources.length; i++) {
            var resource = SlotGame.resources[i];
            this.app.loader.add(resource);
        }
        this.app.loader.load(function () {
            _this.ui = new UI_1["default"]();
            _this.onReady();
        });
    }
    SlotGame.prototype.start = function () {
    };
    SlotGame.width = 800;
    SlotGame.height = 640;
    SlotGame.resources = [
        '/assets/animalface_kangaroo.png',
        '/assets/animalface_kirin.png',
        '/assets/animalface_tanuki.png',
        '/assets/animalface_usagi.png',
    ];
    return SlotGame;
}());
exports["default"] = SlotGame;
