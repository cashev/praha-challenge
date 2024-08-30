# 課題01

## 質問

### HTTPSとは

HTTPS(Hypertext Transfer Protocol Secure)は、ブラウザとサーバー間で安全にデータを送受信するための通信プロトコル。  
通常のHTTP通信にセキュリティ層を追加したもの。

### 何を暗号化するか

- URLのパスとパラメータ
- HTTPヘッダー
- リクエストボディ

#### 暗号化されないもの

- IPアドレス
- ドメイン名

### どのような危険から守るか

通信を暗号化することで以下のような危険から守る。  

- データの盗聴  
- データの改ざん
- 中間者(MITM)攻撃

サーバー認証を行うことで以下のような危険から守る。

- なりすまし
- フィッシング攻撃

### HTTPSの通信過程

### 証明書の発行元

### レスポンスヘッダー

### クッキー

### HTTPSのときのみreferer

## 参考

- [Cloudflare What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
