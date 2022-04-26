# ビューを使いこなす

## 課題01

### ビューの仕組み

仮想的なテーブルを定義できる仕組み  
SELECT文に名前をつけたようなもの(関数みたい)  
実際のデータ自体はテーブルにあるため、Viewを使う度にテーブルからデータを取得している  

### ビューの用途, メリット

複雑なSELECT(JOINが多いなど)をViewとしてまとめることで、可読性があがりクエリの意図が伝わる  
テーブルの全てのカラムを見せたくない場合(ユーザ名は使いたいが住所は隠したいなど)、  
Viewとして必要なカラム抽出することでセキュリティを高める  

### Materialized View

データの実体を持ったView  

- ふつうのViewでは実行の度にテーブルからデータを取得する必要があるが、Materialized Viewはデータの実体を持っているため実行が速い  
- 作成したMaterialized Viewに対してインデックスを定義できる  
- テーブルと同じ最新のデータを持たせるためにリフレッシュが必要  

### 参考

<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0058>
<https://products.sint.co.jp/siob/blog/materializedview>
