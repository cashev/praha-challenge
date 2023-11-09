# 課題04

## CURL

### CURLの実行

```sh
curl --verbose "http://localhost:3000/json" \
  -H "Origin: https://optimal-bee-feasible.ngrok-free.app" \
  -H "Content-Type: application/json" \
  -d '{"name": "hogefuga"}'
```

### CURLの結果

```sh

```sh
HTTP/2 200
content-type: application/json; charset=utf-8
date: Wed, 01 Nov 2023 14:34:24 GMT
etag: W/"1f-vzQUx/Dxa/CSDgrcoZBAYjwjXL0"
ngrok-trace-id: af141ed3526ec003b6c503bb0809ee75
vary: Origin
x-powered-by: Express
content-length: 31

{"{\"name\": \"hogefuga\"}":""}%      
```

### CORS制約

CURLはHTTPリクエストを直接送信するツールであり、CORS制約は適用されない。  
