# SQL10本ノック

## 課題2 (質問)

### WHEREとHAVING

WHERE句はFROM(とJOIN)で取得した結果に対して抽出条件を指定する。  
HAVING句はGROUP BY句でグルーピングした結果に対して抽出条件を指定する。  
WHERE句とHAVING句の両方が記述した場合、  
WHERE句で抽出した結果に対してグルーピングが行われ、  
そのグループ化したデータに対しHAVINGで抽出した結果を取得する。  

### DDL, DML, DCL, TCL

#### DDL

Data Definition Language  
データベースにデータがどう格納されるか定義するクエリ  

CREATE, ALTER, DROP など

#### DML

Data Manipulation Language  
データベースのデータを操作するクエリ

SELECT, INSERT, UPDATE, DELETE など

#### DCL

Data Control Language  
データベースのデータを制御するクエリ  

GRANT, REVOKE など

- GRANT...権限の付与  
- REVOKE...権限の剥奪

#### TCL

Transaction Control Language  
データベースにおけるトランザクションを制御するクエリ

COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION など

### 参考

[[SQL] Where句とHaving句の違い](https://dev.classmethod.jp/articles/difference-where-and-having/)

[グループ化したデータを取得する条件を設定する(HAVING句)](https://www.dbonline.jp/mysql/select/index10.html)

[MySQL What is DDL, DML and DCL?](https://www.w3schools.in/mysql/ddl-dml-dcl/)

[SQL命令の種類（DML・DDL・TCL・DCL）](https://johobase.com/sql-instruction-type/)
