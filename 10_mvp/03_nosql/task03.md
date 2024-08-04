# 課題03

## 質問

### 正規化

参照型を利用する。  

UsersコレクションとQuestionsコレクションを分けて管理し、  
Usersコレクションの各UserがQuestionコレクションのIDを持つようにする。

- 参考
  - [NoSQL Data Modeling Techniques](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)
  - [Schema Design and Relationship in NoSQL Document-based databases](https://blog.usu.com/en-us/schema-design-and-relationship-in-nosql-document-based-databases)
  - [サポートされるデータ型](https://firebase.google.com/docs/firestore/manage-data/data-types?hl=ja)

### RDBMSとの違い

- RDBMS
  - メリット
    - データの整合性
      正規化することにデータの冗長性を排除し、データの整合性を保つことができる。
    - SQL
      SQLを使うことで、データの抽出や集計が容易に行える。
  - デメリット
    - スケーラビリティの制限
      データベースのサイズが大きくなると、データベースのパフォーマンスが低下する。
    - パフォーマンスの低下
      データベースのサイズが大きくなると、データベースのパフォーマンスが低下する。
  - 適している場面
    - データの整合性が重要な場合
    - 構造化データを扱う場合
    - 複雑なクエリや集計が必要な場合
- NoSQL
  - メリット
    - 柔軟性
      スキーマレスであるため、データの追加や変更が容易に行える。
    - 水平スケーラビリティ
      データベースのサイズが大きくなっても、水平スケーリングによってデータベースのパフォーマンスを維持できる。
  - デメリット
    - データの整合性
      データの冗長性が生じるため、データの整合性を保つことが難しい。
    - クエリの複雑性
      複雑なクエリや集計が苦手で、不向きな場合がある。
  - 適している場面
    - 大規模データ、多様なデータを扱う場合
    - 高可用性が求められる場合
    - 柔軟なデータモデルが求められる場合

- 参考
  - [Difference between Relational database and NoSQL](https://www.geeksforgeeks.org/difference-between-relational-database-and-nosql/)
