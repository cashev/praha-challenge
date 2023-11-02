# 課題02

## クイズ

### クイズ01

CORS-safelisted response headerとはなんですか？  

<details><summary>Answer</summary>

CORSレスポンスに含めても良いヘッダーのこと。  
クライアントスクリプトに公開しても安全であると見なされている。  

- Cache-Control
- Content-Language
- Content-Length
- Content-Type
- Expires
- Last-Modified
- Pragma

<https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_response_header>  

</details>

### クイズ02

CORS-safelisted response headerにカスタムヘッダーを含めるにはどうすれば良いですか？  

<details><summary>Answer</summary>

Access-Control-Expose-Headersヘッダーにカスタムヘッダーを含める。  

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers>
<https://qiita.com/tomoyukilabs/items/81698edd5812ff6acb34>

</details>

### クイズ03

JSONPとはなんですか？  

<details><summary>Answer</summary>

JSON with Padding  

データを取得したいドメインのJavaScriptを読み込むことで、JSONデータを取得する仕組み。  
XSSのような脆弱性を持つ。  

<https://www.tohoho-web.com/ex/jsonp.html>  
<https://gihyo.jp/dev/serial/01/crossbrowser-javascript/0011>  
<https://atmarkit.itmedia.co.jp/ait/articles/0908/10/news087.html>  

</details>
