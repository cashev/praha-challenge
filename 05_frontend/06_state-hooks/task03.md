# 課題03

## Container/Presentational

### 概要

Containerにロジック, Presentationalに見た目を分割する

#### Container

どのように動作するかに関心を持つ。  
データの取得や操作、ビジネスロジックを担当。子コンポーネントにデータやコールバック関数を渡す。  

#### Presentational

どのように見えるかに関心を持つ。  
UIの見た目に関するもの。データの取得や操作は行わない。  

### メリット

- 責務を明確に分離できる
- 再利用性が高まる  
  1つのPresentationalを複数のContainerが使い回すことができる
- Presentationalはロジックを持たないため、デザイナーでも見た目を変更することができる。
- Presentationalはロジックを持たないため、テストする際にモックが必要なくStorybookを使ったテストがしやすい。

### Container/Presentationalに分割

- Container
  - ProductListContainer  
    商品のデータを取得し、それを基にProductItemコンポーネントのリストを生成する。
  - MainPageContainer  
    メインページのデータとロジックを管理するコンポーネント  
    Header, ProductListContainer, FooterなどのPresentational Componentsを組み合わせてページを構築する。  

- Presentational
  - ProductItem  
    商品の名前、価格、画像（存在する場合）を表示する。
  - NavigationBar  
    ナビゲーションリンクを表示する。
  - Header  
    サイトのタイトルとナビゲーションバーを表示する。
  - Footer  
    コピーライト情報、デザイン情報、追加のナビゲーションリンクを表示する。

## controlled/uncontrolled

### uncontrolledのメリット/デメリット

- メリット
  - コードが簡潔になる。
  - 入力フォームだけReact、それ以外を別のライブラリで実装することができる。  
  - すべての入力欄が入力されてからValidationをかけられる。
- デメリット
  - 入力されるたびに都度Validationをかけることができない。  
    入力規則に反する入力があった場合、submitされるまで気づくことができない。  

## 参考

<https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0>  
<https://www.patterns.dev/posts/presentational-container-pattern>  
<https://zenn.dev/buyselltech/articles/9460c75b7cd8d1>  
<https://legacy.reactjs.org/docs/uncontrolled-components.html>  
<https://www.codingdeft.com/posts/react-controlled-uncontrolled/#uncontrolled-input>  
<https://zenn.dev/nekoniki/articles/6102d68097e59a>  
