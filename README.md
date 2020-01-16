# pixi_type_script
* 最初に以下のリンクでnode.jsをインストール
[node.jsサイト](https://nodejs.org/en/)
* インストールが終わったら以下のコマンドでインストール確認
```bash
node -v
```
* 次にフォルダーをnodeを使って初期化する(設定はpackage.jsonを確認)
```bash
npm init
```

# 本書で使用する開発環境
開発言語関連

* TypeScript
```bash
JavaScriptに静的型付けなどの拡張を行ったオープンソースプログラミング言語
```
* TypeDoc
```bash
TypeScriptのドキュメント生成ツール
```
* TSLint
```bash
TypeScriptのリントツール(構文チェッカー)
```
* tslint-config-airbnb
```bash
TSLintルールのテンプレート
```

描画ライブラリ
* PIXI.js
```bash
2D描画ライブラリ
```
* @types/pixi.js
```bash
PIXI.jsのTypeScript向け型定義
```

JavaScript実行ライブラリ
* node.js
```bash
JavaScript実行環境
```
* npm
```bash
Node.jsパッケージマネージャ
```

バンドラ
* webpack
```bash
JavaScriptファイルバンドラ
```
* webpack-cli
```bash
webpackのCLI実行環境
```
* ts-loader
```bash
webpackでTypeScriptをトランスパイルできるようにするためのプラグイン
```

Webサーバ
* webpack-dev-server
```bash
ローカル環境での開発用のWebサーバ
```

# ここでインストールするTypeScriptモジュール
* typescript
以下のコマンドでインストールできます。
```bash
npm i --save-dev typescript tslint tslint-config-airbnb typedoc
```
* tslint
* tslint-config-airbng
* typedoc

# ファイルの説明
* tsconfig.json
最低限の設定としてpackage.jsonと同いフォルダに保管

# TypeScriptへのトランスファイル方法
* tscコマンドを実行してjsファイルをtsにトランスファイルする。
以下のコマンドでトランスファイル。
```bash
$ ./node_modules/.bin/tsc -p .
```
その後、index.jsを実行すると以下のような結果を得られる
```bash
$ node index.js
3
```