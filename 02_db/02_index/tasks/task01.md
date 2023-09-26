# インデックス

## 課題1

### インデックスの説明

1〜13のトランプカードから指定した数字のカードを探すにあたって、
ぐちゃぐちゃに並んでいる場合1枚1枚みて行く必要があるが、
インデックスがある場合は探しやすくなること

### なぜslow query log

そもそもslow query logとは  
実行にかかた時間が閾値を超え、指定の行数以上をチェックする必要があったSQLについて記録するもの。  
インデックスはINSERT, UPDATE, DELETEのたびに更新する必要がある。
インデックスを設定しすぎると上記クエリに時間がかかるため、設定し過ぎは良くない。  
そのため不必要なインデックスを設定しないようslow query logを見て、  
インデックスを設定した前後でパフォーマンスが向上しているか確認が必要。

### カーディナリティ(cardinality)とは

列の値の種類のこと  

- フラグとして0または1の2パターン、男, 女, 無回答の3パターンなどは種類が少ない  
-> カーディナリティが低い  
- ユーザの名前, idなどあまり  
-> カーディナリティが高い  

### カバリングインデックスとは

SQL文に出てくる全てのカラムがインデックスに含まれている場合、
テーブルアクセスせず、インデックスのみスキャンしクエリ結果を取得すること

### autoincrementのid

#### メリット

GitHubのissueが連番になるため人間に見やすく推測しやすい。  
insert, update時にB+treeのリーフページがキャッシュにヒットしやすいため更新速度が速い。  

#### デメリット

ユーザIDをauto incrementしてURLがtest.com/users/42となっている場合、  
現行のユーザ数など推測可能になる。  

### 参考

インデックス  
<https://atmarkit.itmedia.co.jp/ait/articles/1703/01/news199.html>
<https://use-the-index-luke.com/ja/sql/dml/insert>

slow query log  
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0007>
<https://dev.mysql.com/doc/refman/5.6/ja/slow-query-log.html>
<https://weblabo.oscasierra.net/mysql-slow-query-log-1/>

カーディナリティ  
<https://www.casleyconsulting.co.jp/blog/engineer/97/>
<https://e-words.jp/w/カーディナリティ.html>
<https://qiita.com/soyanchu/items/034be19a2e3cb87b2efb>

カバリングインデックス  
<https://use-the-index-luke.com/ja/sql/clustering/index-only-scan-covering-index>

autoincrement  
<https://zenn.dev/dowanna6/articles/3c84e3818891c3>  
<https://techblog.raccoon.ne.jp/archives/1627262796.html>  
