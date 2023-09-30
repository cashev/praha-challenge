# 課題01

## HTTPヘッダーの意味と役割

### Host

リクエストを送信する先のサーバーのホスト名またはIPアドレスおよびポート番号を指定する。  
ポート番号が指定されていない場合は、デフォルトのポート番号とみなされる。  
HTTPSのURLであれば443、HTTPのURLであれば80がデフォルトのポート番号となる。  
リクエストを送信するサーバーが複数存在する場合に、正しいサーバーにリクエストを送信するために使用される。  

### Content-Type

リクエストやレスポンスのボディのMIMEタイプを指定する。  
データの種類と形式を正しく認識するために使用される。  

### User-Agent

クライアントのブラウザやOSを指定する。  
サーバーがクライアントの種類やバージョンに応じて、最適なレスポンスを返すために使用される。  

### Accept

クライアントが理解できるMIMEタイプを指定する。  
サーバーにどうのようなデータ形式でレスポンスを受け取りたいかを伝えるために使用される。  

### Referer

リクエストを送信する前に、クライアントが参照していたURLを指定する。  
サーバーがクライアントの行動を追跡するために使用される。  

### Accept-Encoding

くらいんとが理解できるエンコーディングを指定する。  
サーバーがクライアントに適切なエンコーディングでレスポンスを返すために使用される。  
identityを指定した場合は、エンコーディングをしないこともある。  

- 例
  - レスポンスが既にエンコードされている場合
  - サーバーが過負荷でエンコーディングする余裕がない場合

### Authorization

クライアントの認証情報を指定する。  
クライアントがサーバーに認証情報を送信するために使用される。  

### Location

リダイレクト先のURLを指定する。  
302や307などの一時的なリダイレクト、または301の永続的なリダイレクトを行う際に、クライアントにリダイレクト先のURLを伝えるために使用される。  

## refererについて

### noreferrerとは

リンク先にrefererを送信しないようにするための設定。  

### rel="noreferrer"が必要な理由

- パフォーマンス低下を防ぐため  
- セキュリティ上のリスクが存在するため  

### 設定しなかった場合について

新しいタブやウィンドウで開いたページのJavaScriptが、元のページと同じプロセスで実行される場合があり、  
元のページのパフォーマンスを低下させうる。  
新しいタブやウィンドウで開いたページが、  
元のページのwindow.openerオブジェクトを通じてJavaScriptで元のページを操作する可能性がある。  
特に外部のサイトへのリンクで問題となる可能性が高い。  

### 追加するHTTPヘッダー

```http
Referrer-Policy: strict-origin-when-cross-origin
```

## 参考

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noreferrer>  
<https://developer.chrome.com/en/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy>  
<https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns>  
<https://web.dev/cross-origin-resource-sharing/>  
<https://web.dev/referrer-best-practices/>  
<https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer>  
<https://blog.ojisan.io/noreferrer-noopener/>  
