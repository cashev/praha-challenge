# 課題02

## 実装

[myapp](./myapp/)

## 実装内容

`https://XXX.ngrok-free.app/` にアクセスすると、`http://localhost:3000/image` から画像を取得する  

- `https://XXX.ngrok-free.app/` のアクセスで`name=hoge`のFirst Party Cookieが設定される  
- `http://localhost:3000/image` から画像を取得で、`name-image=hoge-image`のThird Party Cookieが設定される  

## ハマリポイント

expressのバージョンが古いと、`sameSite`が設定できない  

```txt
option sameSite is invalid
TypeError: option sameSite is invalid
```

<https://expressjs.com/en/changelog/4x.html>
4.17.0 - Release date: 2019-05-16 にて  
> The res.cookie() API now supports the "none" value for the sameSite option.

以下コマンドだと、4.16.xがインストールされる

```sh
npm install express
```

以下コマンドで、最新版をインストールする必要がある 

```sh
npm install express@latest --save
```

## 参考

<https://qiita.com/mininobu/items/b45dbc70faedf30f484e>
