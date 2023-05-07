# 課題01

## 「ログインしているユーザしか投稿できない」機能

### アクセス制御ロジックはどの層に実装するか

インフラ層

ドメイン層の意見  

<https://github.com/little-hands/ddd-q-and-a/issues/121>  

### 認証に関わる属性を追加すること

User Entityに追加すべきではない。  
認証がドメインとして重要であれば追加してもよいが、多くの場合そうではない。  
インフラ層で保持すべき  

[参考][link-UserEntity]  

## 複数の集約をまたいだ整合性

タスクを作成したら活動レポートを必ず作成する。  

サービスクラスでタスクと活動レポートを作成し、タスクEntityに活動レポートのidを持たせる。  

## ブログを投稿できるWEBサービス

### Userエンティティにプロパティ

問題あり  

[参考][link-UserEntity]  

### 文字数が1000文字を超えたらエラー

#### throwすることの問題

DBの接続エラーなどサービスとして正常に動くことを担保できないのであればthrowし、500系のエラー画面を表示するでも良い。  
文字数のValidationの場合、Postを作成する度にtry catchが必要となる。  

try catchを忘れた場合、500系が発生する。  
Result型など型でチェックを強制することでHuman Errorが発生するのを防ぐことができる。  

#### 実装例

./post.ts

## 参考

<https://zenn.dev/praha/articles/5c05ab671fb7ab>  
[link-UserEntity]: https://github.com/little-hands/ddd-q-and-a/issues/173  
<https://gcanti.github.io/fp-ts/modules/Either.ts.html>  

> A common use of Either is as an alternative to Option for dealing with possible missing values. In this usage, None is replaced with a Left which can contain useful information. Right takes the place of Some. Convention dictates that Left is used for failure and Right is used for success.

<https://torikasyu.com/?p=1998>  
