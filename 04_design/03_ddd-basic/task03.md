# 課題03

## クイズ

### 01

1. CQS/CRQS, DTOを使うことの共通するデメリットはなんでしょうか

<details><summary>Answer</summary>

DTOを挟むためデータが参照されている場所を追いにくくなる(単純なGetterだけではなくなる)。  
アーキテクチャが複雑になる。  

</details>

### 02

DDDに向く/向かないアプリケーションはどんなものでしょうか

<details><summary>Answer</summary>

向くもの  
複雑なドメインの問題を解決するもの  
向かない  
簡単なCRUDで済むアプリケーション  

</details>

### 03

楽観ロックを行う場合、どの層でバージョン情報を保持し、バージョンチェックを行いますか？

<details><summary>Answer</summary>

ドメイン層にバージョン情報を持たせ、インフラ層でバージョンチェックを行う

</details>
