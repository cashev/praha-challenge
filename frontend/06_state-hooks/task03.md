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

### 実装

## controlled/uncontrolled

TODO

## 参考

<https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0>  
<https://www.patterns.dev/posts/presentational-container-pattern>  
<https://zenn.dev/buyselltech/articles/9460c75b7cd8d1>  
