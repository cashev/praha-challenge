# 課題03

## curl

### クイズ01

ヘッダーのみを取得するオプションは何でしょうか？

<details><summary>Answer</summary>

-I, --head

<https://curl.se/docs/manpage.html#-I>

</details>

### クイズ02

リクエスト結果をファイルに保存するオプションは何でしょうか？

<details><summary>Answer</summary>

-o, --output

<https://curl.se/docs/manpage.html#-o>

</details>

### クイズ03

curlはHTTP3に対応しているでしょうか？

<details><summary>Answer</summary>

--http3  
Experimentalで対応している。使うにはビルドが必要。  

<https://curl.se/docs/http3.html>

</details>

## postman

### クイズ04

curlコマンドをPostmanに変換する方法は何でしょうか？  

<details><summary>Answer</summary>

import -> raw text -> curlコマンドをペーストする  
<https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-curl-commands/#import-a-curl-command-into-postman>  

</details>

### クイズ05

Postmanからcurlコマンドを生成する方法は何でしょうか？  

<details><summary>Answer</summary>

画面右の「Code」をクリックするとcurlコマンドが表示される  
<https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-curl-commands/#convert-a-postman-request-to-curl>  
また各プログラミング言語のコードも生成できる。  

</details>

### クイズ06

1回目のリクエストで認証を行いそのレスポンスに含まれるトークンを使って2回目のリクエストを送る場合、  
一連の流れをPostmanの機能を使って実現するにはどうすれば良いでしょうか？  

<details><summary>Answer</summary>

testsと変数を使う。  
<https://learning.postman.com/docs/sending-requests/variables/>  

1回目のリクエストのtestsに以下を記述する。  

```js
const responseJson = pm.response.json();
var token = responseJson.json.token;
pm.environment.set("token", token);
```

2回目のリクエストのリクエストのボディに以下を記述する。  

```json
{
  "token": {{token}}
}
```

</details>
