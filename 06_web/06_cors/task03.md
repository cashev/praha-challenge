# 課題03

## 実装

[myapp](./myapp)

### 主な実装箇所  

[myapp/app.js](./myapp/app.js)  
[myapp/routes/index.js](./myapp/routes/index.js)  
[myapp/routes/text.js](./myapp/routes/text.js)  
[myapp/routes/json.js](./myapp/routes/json.js)  
[myapp/views/index.jade](./myapp/views/index.jade)

### 実装内容

<http://localhost:3000/> にアクセスすると

- <http://localhost:3000/text> にPOSTのSimple Requestを送信する
- <https://optimal-bee-feasible.ngrok-free.app/text> にPOSTのSimple Requestを送信する
- <http://localhost:3000/json> にPOSTのSimpleではないRequestを送信する
- <https://optimal-bee-feasible.ngrok-free.app/json> にPOSTのSimpleではないRequestを送信する

```js
const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['POST'],
  optionsSuccessStatus: 200
};
```

Originに<https://optimal-bee-feasible.ngrok-free.app>を設定していないため、  
<https://optimal-bee-feasible.ngrok-free.app/text> にPOSTのSimple Requestを送信できる。  
<https://optimal-bee-feasible.ngrok-free.app/json> にPOSTのSimpleではないRequestは失敗する。  

### ハマリポイント

#### CORSの設定

この場合 `jsonCorsOptions` は動作しない。'/'に設定した`corsOptions` が優先される。  

```js
const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['POST'],
  optionsSuccessStatus: 200
};

const jsonCorsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['POST'],
  optionsSuccessStatus: 200
};

app.use('/', cors(corsOptions), indexRouter);
app.use('/users', usersRouter);
app.use('/text', textRouter);
app.use('/json', cors(jsonCorsOptions), jsonRouter);
```

#### fetchの仕様

fetchでSimple Requestを送信するにはmodeをno-corsにする必要がある。  

```js
fetch('http://localhost:3000/text', { mode: "no-cors" });
```

`mode: "no-cors"` にすると、JavaScriptでレスポンスの内容を取得できないため、  
developer toolsのnetworkタブ と expressのlog出力で リクエスト/レスポンスを確認する。  

## 参考

<https://expressjs.com/en/resources/middleware/cors.html>
