# 課題03

## 実装

[myapp](./myapp)

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

Originに<https://optimal-bee-feasible.ngrok-free.app>を追加していないが、  
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
fetch('http://localhost:3000/text', { mode: "cors" });
```

## 参考

<https://expressjs.com/en/resources/middleware/cors.html>
