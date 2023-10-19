# 課題01

## 仕様01

```sh
curl -i "localhost:3000" -H "Content-Type: application/json"
```

```sh
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 22
ETag: W/"16-435FIvxQfToiwp4vhTlfISUoHuQ"
Date: Mon, 09 Oct 2023 02:25:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"text":"hello world"}
```

## 仕様02

```sh
curl -i "localhost:3000" -d '{"name": "hoge"}' -H "Content-Type: application/json"
```

```sh
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 15
ETag: W/"f-uWuyLkxupAphkHebyeBoF3gPT3I"
Date: Mon, 09 Oct 2023 02:43:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"name":"hoge"}
```

## 仕様03

```sh
curl -i "localhost:3000" -d '{"name": "hoge"}'
```

```sh
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 58
ETag: W/"3a-I5r8iKplkZgjYJWMJAV0NOEhm7s"
Date: Mon, 09 Oct 2023 02:43:30 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"error":"Invalid Content-Type. Must be application/json"}
```
