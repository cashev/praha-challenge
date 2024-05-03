# 課題01

## 質問

### expand and contract pattern

データベースのスキーマ変更において、  
データの変更を行う際に、データの変更を行う前に、
新しいデータ構造のDBを追加して、データの移行を行い、古いデータ構造を削除するという手法

- 手順
  1. (初期状態) 古いデータ構造のDBで読み込みと書き込みを行う
  1. 新しいデータ構造のDBを導入し、アプリケーションで書き込みだけ行う
  1. 古いデータ構造のDBから新しいデータ構造のDBにデータをコピーする
  1. 古いデータ構造のDBで読み込みをやめ、新しいデータ構造のDBで読み込みを行う
  1. 古いデータ構造のDBへの書き込みをやめる
  1. 古いデータ構造を削除する
  
- 参考
  - [Using the expand and contract pattern for schema changes](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern)
  - [Expand and Contract](https://www.tim-wellhausen.de/papers/ExpandAndContract/ExpandAndContract.html)

### NOT NULL制約で起きる問題

PostgreSQL

既存のカラムに`NOT NULL`制約を追加する際に、  
既存のデータが制約を満たしているか確認するためにフルテーブルスキャンが発生する。  
またその間ACCESS EXCLUSIVE LOCKが取得されるため、最悪デッドロックが発生する。  

#### 対策

Check制約を追加し、既存のデータが制約を満たしているか確認する。  
その後、`NOT NULL`制約を追加することでフルスキャンを回避できる。  

- 参考
  - [令和最新版: PostgreSQLの安全なSET NOT NULL](https://www.wantedly.com/companies/wantedly/post_articles/433252)
  - [Adding a NOT NULL CONSTRAINT on PG Faster with Minimal Locking](https://medium.com/doctolib/adding-a-not-null-constraint-on-pg-faster-with-minimal-locking-38b2c00c4d1c)
