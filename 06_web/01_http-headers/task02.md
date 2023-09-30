# 課題02

## クイズ01

`strict-origin-when-cross-origin`はChromeでデフォルトで設定されてますが、  
明示的に指定することが推奨されています。なぜでしょうか？  

<details><summary>Answer</summary>

ブラウザのデフォルトポリシーは、ブラウザやプライベートモードによって異なるため  

<https://web.dev/referrer-best-practices/#why-explicitly>  

</details>

## クイズ02

HTTP ヘッダー・インジェクションとは何でしょうか？

<details><summary>Answer</summary>

出力するHTTPレスポンスヘッダのフィールド値を、外部から渡されるパラメータの値等を利用して動的に生成するウェブアプリケーションに対して、  
レスポンス内容に任意のヘッダフィールドを追加したり、任意のボディを作成したり、複数のレスポンスを作り出すような攻撃を仕掛けること  

<https://www.ipa.go.jp/security/vuln/websecurity/http-header.html>  

</details>

## クイズ03

独自ヘッダーには`X-`をつけることが非推奨となりました。なぜでしょうか？  

<details><summary>Answer</summary>

X-は実験的なヘッダーとして定義されていたが、  
標準化した場合もX-は外されず、X-あるなしのヘッダー両方対応した過去があったため  

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>  
<https://zenn.dev/ys/articles/a58b02e3cbc2f839f7f1>  
<https://datatracker.ietf.org/doc/html/rfc6648>  

</details>
