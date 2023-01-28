# 課題01

## 用語

### エンティティ Entity

ドメインオブジェクトの1つ  
識別子(id)から同一性を区別する。  
例  
社員, 顧客, 商品など  
名前が変わってもその物(人物)が同じであれば同じと判断する。  

### 値オブジェクト（バリューオブジェクト） Value Objects

ドメインオブジェクトの1つ  
その値から同一性を区別する。  
例  
金額, 距離, メールアドレス, 住所など  
値が同じなら、その2つは同じ物と判断する。  

### 集約 Aggregate

必ず守りたい強い整合性を持ったオブジェクトのまとまり  
この単位で永続化を行う。  

エンティティと値オブジェクトのまとまり、複数エンティティのまとまり  
この単位にトランザクションを管理する。  

### ユビキタス言語 Ubiquitous Language

ドメインエキスパートや開発者で使う共通言語  
ドメインエキスパートと開発者でドメインについて同じ言葉を使う。  
ドメインエキスパートが話すドメインについての用語をそのままプログラムに用いることで認識齟齬が生じない。  
例  
編集する(Edit), 更新する(Update)  
ドメインエキスパートとしては”編集する”として言葉を使うが、開発者はDBの更新を意識して”更新する”を使ってしまう。  

### 境界づけられたコンテキスト Bounded Context

あるモデルを、同じ意味で使い続ける範囲  
商品モデルを注文, 在庫, 請求部門で使い回すと綻びが生じるため、それぞれのコンテキストで商品モデルを形成する。  
例
商品価格を変更した際、注文部門では新しい価格を使うが、
請求部門は購入した時点の商品価格を使いたいため、商品価格の意味が部門によって異なる。

### ドメイン Domain

ソフトウェアで問題解決しようとする対象領域  

### ドメインサービス Domain Service

「モデルがオブジェクトとして表現すると無理があるもの」を表現する。  
例  
UserIdが重複しているかチェックするなど  
Userオブジェクトは自身のオブジェクトについて知っていても、他のオブジェクトについては知らないためドメインサービスで行う。  

### リポジトリ Repository

集約単位で永続化層へのアクセスを提供するもの  

DBにアクセスするとは限らない  
永続化をファイルシステムで行う場合、ファイル読み込み、書き込みを行う。  

### アプリケーション（ユースケース層と呼ばれることも）Usecase

ドメイン層のメソッドを組み合わせ、ユースケースを実現する。  

ユーザーが記事を作成、更新するなどアプリケーション固有の振る舞いを定義する。  

### CQS/CQRS

Command Query Separation / Command Query Responsibility Segregation  

情報の参照と更新を行うモデルをそれぞれ分けること  
複数集約からデータ取得する場合、処理がシンプルになる。  
参照DBと更新DBを分けることができる。  
例  
参照時にJoinが使える、更新時にトランザクションを管理できる  

### DTO

Data Transfer Object  

一般にレイヤー間の受け渡しに広く使われる、DDDではユースケースからの戻り値として使用する。  

### 参考

<https://little-hands.hatenablog.com/entry/2018/12/09/entity-value-object>  
<https://little-hands.hatenablog.com/entry/2019/07/26/domain-knowledge>  
<https://little-hands.hatenablog.com/entry/2019/12/02/cqrs>  
<https://little-hands.hatenablog.com/entry/jjug2017fall>  
<https://booth.pm/ja/items/3363104>  
<https://booth.pm/ja/items/1835632>  
<https://martinfowler.com/bliki/CommandQuerySeparation.html>  
<https://martinfowler.com/bliki/CQRS.html>  
<https://martinfowler.com/bliki/BoundedContext.html>  
<https://gihyo.jp/magazine/SD/archive/2023/202302>  
<https://blog.j5ik2o.me/entry/2016/03/07/034646>  
