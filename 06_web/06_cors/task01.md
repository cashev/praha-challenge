# 課題01

## CORSの仕組み

Cross-Origin Resource Sharing  
異なるオリジン(ドメイン, プロトコル, ポート番号)にあるリソースを共有するための仕組み。  

### 例

https://example-a.com のページに埋め込まれたJavaScriptから https://example-b.com のAPIを呼び出す場合、
ブラウザはCORSの仕組みにより、APIの呼び出しを許可するかどうかを判断する。  

### CORSの流れ

1. 異なるオリジンにあるリソースを取得するためのリクエストを作成する  
1. ブラウザはリクエストを送信する前に、リクエストに含まれるHTTP Headerをチェックする
1. リクエストが下記の`Simple Request`の条件を満たしている場合、リクエストを送信する(preflight requestは送信しない)  
1. リクエストがSimple Requestの条件を満たしていない場合、`Preflight Request`を送信する  
1. Preflight Requestのレスポンスを検証する  
  `Access-Control-Allow-Origin`ヘッダーが`*`または元のOriginと一致している
  Access-Control-Allow-Methodsヘッダーがリクエストのメソッドと一致している  
  Access-Control-Allow-HeadersヘッダーがリクエストのHTTP Headerと一致している
1. Preflight Requestのレスポンスが正常な場合、リクエストを送信する
1. Preflight Requestのレスポンスが異常な場合、リクエストを送信しない

## Access-Control-Allow-Origin: * の問題点

## preflight requestが送信されない条件

- GET, HEAD, POSTのいずれかのメソッドを使用する
- 手動で設定したHTTP Headerは以下に限る
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - Range  
- Content-Typeヘッダーは、以下のいずれかの値に設定する
  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded

## レスポンスのAccess-Control-Allow-Originに元のOriginがない場合

リクエストを送信しない  

## HTMLのaタグ

## XMLHttpRequestでのクロスサイトリクエスト

## 参考

<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>  
<https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin>  
<https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>  
<https://aws.amazon.com/jp/what-is/cross-origin-resource-sharing/>  
<https://fetch.spec.whatwg.org/#cors-safelisted-request-header>  
<https://fetch.spec.whatwg.org/#forbidden-header-name>  
<https://dev.classmethod.jp/articles/same-site-same-origin/>  