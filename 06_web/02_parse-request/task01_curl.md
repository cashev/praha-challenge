# 課題01

## 問題01

```sh
curl -H 'X-Test:hello' https://httpbin.org/headers
```

## 問題02

```sh
curl -X POST https://httpbin.org/post \
  -H 'Content-Type: application/json' \
  -d '{"name": "hoge"}'
```

## 問題03

```sh
curl -X POST https://httpbin.org/post \
  -H 'Content-Type: application/json' \
  -d '{"userA": {"name": "hoge", "age": 29}}'
```

## 問題04

```sh
curl -X POST https://httpbin.org/post \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'name=hoge'
```
