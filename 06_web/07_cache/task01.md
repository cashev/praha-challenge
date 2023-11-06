# 課題01

## なぜキャッシュが必要か

- スピードアップ  
- ネットワークの混雑を避ける  
- サーバーの負荷を下げる  

キャッシュがない場合、都度サーバーへリクエストを行い、レスポンスを受け取る必要があるため時間がかかる。  
都度リクエストが行われるため、ある程度ユーザー数がいる場合、ネットワークが混雑する。  
リクエストを処理するためサーバーの負荷があがる。  

## キャッシュヒット率とは

キャッシュしたコンテンツを取得する際に、キャッシュから取得できた割合のこと。  
キャッシュしたコンテンツを見つけた場合、キャッシュヒットとなる。  
キャッシュしたコンテンツを見つけられなかった場合、キャッシュミスとなる。  

### 向上させるには？

- キャッシュサイズを大きくする  
- キャッシュの有効期限を長くする  
- キャッシュ エビクション ポリシーを変更する  
  キャッシュが溢れた場合、どのキャッシュを削除するかを決めるポリシーのこと。  
  - Least Recently Used (LRU)  
    最後に利用したキャッシュを削除する。  
  - Least Frequently Used (LFU)  
    最も利用頻度の低いキャッシュを削除する。  
  - First In First Out (FIFO)  
    最初にキャッシュしたものを削除する。  

## キャッシュの種類

- ブラウザキャッシュ  
- プロキシキャッシュ  
- CDNキャッシュ  

### 違い

キャッシュコンテンツを保存する場所が異なる。  

## HTTP Headers

- Cache-Control  
  キャッシュの制御を行う。  
  キャッシュするかどうか, キャッシュの有効期間, キャッシュの種類などを指定する。  
- Expires  
  キャッシュの有効期限を指定する。  
  Cache-Controlのmax-age, s-maxageがある場合、Expiresの値は無視され、  
  max-age, s-maxageが優先される。  
- ETag  
  キャッシュのバージョンを指定する。  
  リソースの内容が変更された場合、ETagの値も変更される。  
  ETagの値が変更された場合、キャッシュは無効となる。  
- Last-Modified  
  リソースの最終更新日時を指定する。  
  ETagよりも精度が低いが、その代替手段になる。  
- Vary  
  リクエストの内容に影響するヘッダーを指定する。  
  HTTP headerをキャッシュキーにすることができる。  
  - 例  
  Vary: Accept-Encoding  
  最初のリクエストでAccept-Encoding: gzipのレスポンスをキャッシュする。  
  2回目以降に同じメソッド, 同じURLへのリクエストでもAccept-Encoding: gzipではない場合、キャッシュを利用しない。  
- Pragma  
  HTTP/1.0の時代にキャッシュを制御するために使用されていた。  
  HTTP/1.0 クライアントとの下位互換性のためにのみ使用される。  
- Age
  キャッシュされてからの経過時間を秒単位で指定する。  
  プロキシキャッシュがレスポンスをキャッシュした場合に使用される。  

## ブラウザのキャッシュサイズ

### 上限を超えた場合

LRUポリシーに従って最後に利用したオリジンのデータを削除し、容量が空くまで繰り返す。  

### 上限について

- Chrome  
  ディスク容量の80%
- Firefox  
  ディスク容量の50%
- Safari  
  1GB

## expiresについて

### 理由

有効期限が切れるまでキャッシュが使用されるため、動的なサイトの内容が更新されてもユーザーに反映されない。  

### 改善策

`Cache-Control: no-cache`を指定する。  
キャッシュは行われるが、更新がないかどうかを確認するためにサーバーへリクエストを行う。  
更新ない場合は304 Not Modifiedが返され、キャッシュを利用する。  

## 実例

### 例1

<https://www.mozilla.org/en-US/>  

[./example/mozilla.png](./example/mozilla.png)  

CloudFrontに保存されたキャッシュ  

### 例2

<https://zenn.dev/>  

[./example/zenn.png](./example/zenn.png)  

ブラウザに保存されたキャッシュ  

### 例3

<https://www.fastly.com/>

[./example/fastly.png](./example/fastly.png)

### キャッシュの仕組み

## 参考

<https://vishalrana9915.medium.com/deep-dive-in-caching-9780bc55ea7>  
<https://www.cloudflare.com/learning/cdn/what-is-caching/>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag>  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified>  
<https://blog.jxck.io/entries/2019-01-19/cache-digest-status.html>  
<https://www.fastly.com/blog/best-practices-using-vary-header>  
<https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria>  
<https://web.dev/articles/storage-for-the-web>  
