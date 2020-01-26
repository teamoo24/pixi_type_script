"use strict";
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
var PIXI = require("pixi.js");
var SlotGame_1 = require("./SlotGame");
var Reel_1 = require("./Reel");
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super.call(this) || this;
        var margin = (SlotGame_1["default"].height - Reel_1["default"].SYMBOL_SIZE * 3) / 2;
        _this.reelContainer = new PIXI.Container();
        _this.reelContainer.y = margin;
        _this.reelContainer.x = Math.round(SlotGame_1["default"].width - Reel_1["default"].WIDTH * 5);
        for (var i = 0; i < 5; i++) {
            _this.reelContainer.addChild(new Reel_1["default"](i));
        }
        var coverTop = new PIXI.Graphics();
        coverTop.beginFill(0, 1);
        coverTop.drawRect(0, 0, SlotGame_1["default"].width, margin);
        var coverBottom = new PIXI.Graphics();
        coverBottom.beginFill(0, 1);
        coverBottom.drawRect(0, Reel_1["default"].SYMBOL_SIZE * 3 + margin, SlotGame_1["default"].width, margin);
        var textTop = new PIXI.Text('PIXI MONTER SLOTS!', UI.defaultTextStyle);
        textTop.x = Math.round((coverTop.width - textTop.width) / 2);
        textTop.y = Math.round((margin - textTop.height) / 2);
        var textBottom = new PIXI.Text('Spin the wheels!', UI.defaultTextStyle);
        textBottom.x = Math.round((coverBottom.width - textBottom.width) / 2);
        textBottom.y = SlotGame_1["default"].height - margin + Math.round((margin - textBottom.height) / 2);
        coverTop.addChild(textTop);
        coverBottom.addChild(textBottom);
        try {
            _this.addChild(_this.reelContainer);
            _this.addChild(coverTop);
            _this.addChild(coverBottom);
        }
        catch (_a) {
            console.log(_this);
        }
        console.log(_this);
        coverBottom.interactive = true;
        return _this;
    }
    UI.prototype.startPlay = function () {
    };
    UI.prototype.update = function () {
    };
    UI.defaultTextStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'],
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    });
    return UI;
}(PIXI.Container));
exports["default"] = UI;
