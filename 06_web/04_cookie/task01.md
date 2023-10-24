# 課題01

## クッキーの仕組み

サーバーからクライアントに送信されるレスポンスのヘッダーに`Set-Cookie`が含まれているとクライアントはその値をブラウザに保存する。  
その後クライアントがサーバーにリクエストを送信するときに、リクエストヘッダーに`Cookie`で保存した値を送信する。  
サーバーはその値を受け取り、クライアントを識別することができる。  
sessionIDなどの値をCookieに保存しておくことで、セッションの管理ができる。  

## www.hoge.comで発行されたクッキーは、www.fuga.comにも送信される？

送信されない。  
クッキーはDomain属性で受信することができるホストを指定する。  
Domain属性が指定されていない場合は、ブラウザがCookieを設定したドメインをDomain属性として設定する。  
Domain属性とは異なるドメインに対してCookieを送信することはできない。  

## hoge.com:8080のクッキーはhoge.com:9090にも送信される？  

送信される。  
Port番号はCookieに保存されない。  

## www.hoge.comで発行されたクッキーは、www.api.hoge.comにも送信される？  

Cookieを発行するときDomain属性に"hoge.com"を指定した場合は、www.api.hoge.comにも送信される。  
Cookieを発行するときDomain属性を指定しない場合は、ブラウザがDomain属性を"www.hoge.com"とするため送信されない。  

## クッキーにDomain="hoge.com"を指定した場合、api.hoge.comにもクッキーは送信される？  

送信される。  
Domain属性に"hoge.com"を指定した場合は、"hoge.com"のサブドメインにも送信されるため。  

## ブラウザで実行されるJavaScriptからはクッキーの読み取りを防ぐには？  

HttpOnly属性を指定する。  

## HTTPS通信の時だけクッキーを送信するには？  

Secure属性を指定する。  

## クッキーにExpiresを設定するとどう変わる？  

Expires属性に設定された日付までCookieを保持する。  
設定された日時を過ぎると、ブラウザはそのクッキーを削除する。  
Expires属性が設定されていない場合は、ブラウザを閉じるとクッキーは削除される。  

## SameSite属性について

外部サイトからリクエストが送信された場合に、クッキーを送信するかどうかを指定する。  
Strict, Lax, Noneの3つの値を設定できる。  
SameSite属性が設定されていない場合は、SameSite=Laxとして扱われる。

- Strict  
  同一サイトからのリクエストでのみクッキーを送信する。  
  外部サイトへのリクエストの場合、クッキーを送信しない。  
- Lax  
  外部サイトへのPOSTメソッド, image, iframeなどでリクエストを送信した場合、クッキーを送信しない。  
  外部サイトへGETメソッドでのリクエストの場合、クッキーを送信する。  
  同一サイトへのリクエストの場合、クッキーを送信する。  
- None
  外部サイトへのリクエストでもクッキーを送信する。  
  SameSite=Noneを設定する場合は、Secure属性が必須。  

## クッキーに格納しない方が良い情報の例

- 個人情報  
- ID/パスワード  
- プログラムやスクリプト  
- 巨大なデータ  

## クッキーとローカルストレージの使い分け

- Setの方法  
  クッキーはサーバーからのレスポンスでSet-Cookieヘッダーに値を設定することで、ブラウザに保存される。  
  ローカルストレージはフロントエンドのJavaScriptから操作することで、ブラウザに保存される。
- 送信
  クッキーはリクエストでサーバーに送信される。  
  ローカルストレージはサーバーに送信されない。
- 保存できるデータ量
  クッキーは4KBまで保存。
  ローカルストレージは5MBまで保存できる。(ブラウザによっては10MBまで保存できる)
- 有効期限
  クッキーは有効期限を設定できる。  
  ローカルストレージは有効期限を設定できず永続的に保存される。  
- セキュリティ
  クッキーはHttpOnly属性を設定することで、JavaScriptからの読み取りを防ぐことができる。  
  ローカルストレージはJavaScriptから読み取ることができる。  

## XSSで他ユーザのクッキー情報が抜き出される仕組み

任意のスクリプトを埋め込むことができる脆弱性のあるサイトにて、外部サイトへのリクエストを送信するスクリプトを埋め込む。  
そのリクエストに`document.cookie`の値を含めることで、クッキー情報を抜き取ることができる。  

## 参考

<https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Set-Cookie>  
<https://www.infraexpert.com/study/tcpip16.6.html>  
<https://developer.mozilla.org/ja/docs/Web/HTTP/Cookies>  
[Cookieのセキュリティ周りでいちばんややこしいDomain属性をしっかり理解する](https://qiita.com/HAYASHI-Masayuki/items/209039717c15834603d8)  
[CookieのDomain属性は *指定しない* が一番安全](https://blog.tokumaru.org/2011/10/cookiedomain.html)  
[とほほのCookie入門](https://www.tohoho-web.com/wwwcook.html)  
<https://web.dev/articles/samesite-cookies-explained>  
<https://hapicode.com/javascript/cookie-webstorage.html>  
<https://www.ipa.go.jp/security/vuln/websecurity/cross-site-scripting.html>  
<https://www.tohoho-web.com/ex/xss.html>  
