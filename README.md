# pixi_type_script
* 最初に以下のリンクでnode.jsをインストール
`https://nodejs.org/en/`
* インストールが終わったら以下のコマンドでインストール確認
```bash
node -v
```
* 次にフォルダーをnodeを使って初期化する(設定はpackage.jsonを確認)
```bash
npm init
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