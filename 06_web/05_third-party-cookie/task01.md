# 課題01

## First-party cookieとThird-party cookieの違い

訪れているサイトとは異なるドメインのサーバーから配信されるクッキーをThird-party cookieと呼ぶ。  

### 例

`https://example.com`というサイトにアクセスした際に、  
`https://example.com`とは異なるドメイン(`https://example2.com`など)のサーバーから配信されるクッキーはThird-party cookieとなる。

## 広告でトラッキングする仕組み

1. ユーザーがサイトAにアクセスする
1. サイトAに埋め込まれた広告プロバイダーへのリクエストが発生し、  
  ユーザーを識別するIDを持ったクッキーをユーザーのブラウザに保存する  
1. ユーザーがサイトAで閲覧した情報を広告プロバイダーに送信する  
1. ユーザーがサイトBにアクセスする  
1. サイトAで作成した広告プロバイダーのクッキーをサイトBでも読み込み  
  どの広告を表示するか広告プロバイダーに問い合わせる  
1. 広告プロバイダーはユーザーの閲覧履歴を元に広告を表示する  

## Third-Party Cookieの生成

1. 外部リソースが埋め込まれたページを読み込む
1. 外部リソースを取得するために、外部ドメインのサーバーにリクエストを送信する  
1. レスポンスヘッダーに`Set-Cookie`が含まれている場合、ブラウザはクッキーを生成する

## ブラウザごとの扱いの違い

### Chrome

Third Party Cookieはデフォルトでブロックされないが、2024年にはブロックされる予定。  

### Firefox

Third Party Cookieはデフォルトでブロックされる。

### Safari

Third Party Cookieはデフォルトでブロックされる。  

### Edge

Third Party Cookieはデフォルトでブロックされない。

## ドメインが同一で、ポートが異なるクッキーはFirst? Third?

First-party cookie  
ドメインが同一であれば、ポートが異なっていてもFirst-party cookieとなる。  

## 参考

<https://web.dev/learn/privacy/third-parties>  
<https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html>  
<https://www.techtarget.com/whatis/definition/third-party-cookie>  
<https://clearcode.cc/blog/browsers-first-third-party-cookies/>  
<https://www.itmedia.co.jp/news/articles/1906/05/news069.html>  
<https://www.infoq.com/jp/news/2020/06/safari-third-party-cookies-block/>  
