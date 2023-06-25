# 課題01

## アトミックデザインとは

デザインを設計するための手法。  
小さいUIコンポーネントを組み合わせて、大きなコンポーネントを作成する。  
コンポーネントを5つの粒度に分ける。
下に行くほど粒度が小さくなり、抽象度はあがる。

- Page
- Template
- Organism
- Molecule
- Atom

抽象度が高いコンポーネントを組み合わせて、再利用可能なコンポーネントを構築する。  
1ページごとにデザインするのではなく、コンポーネントごとにデザインする。  

## 用語

### Page

Templateに画像, テキストなどの実際のコンテンツを流し込んだもの  
トップページ, 一覧ページなど

### Template

中身のないレイアウト  

### Organism (有機体)

Atom, Moleculeから構成されるUIコンポーネント  
Header, Footer, Mordal, Tableなど  

### Molecule (分子)

Atomから構成されるUIコンポーネント  
検索フォームなど  

### Atom (原子)

これ以上分けることができないもの最小のUIコンポーネント  
Label, Text, Button, Color Paletteなど  
UIとしては意味をなさない  

## function component(関数コンポーネント) と class component(クラスコンポーネント) の違い

それぞれコンポーネントを関数, クラスで定義する。  
クラスコンポーネントは状態（state）を持つことができる。  
関数コンポーネントではstate(状態)を持たせることができずクラスコンポーネントが主流だったが、
React 16.8以降、Hooksと呼ばれる機能が導入され、関数コンポーネントでも状態管理やライフサイクルの処理を行うことができる。  

関数コンポーネントの例  

``` js
import React from 'react';

function MyFunctionalComponent(props) {
  return <div>Hello, {props.name}</div>;
}
```

クラスコンポーネントの例  

``` js
import React from 'react';

class MyClassComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
```

## 参考

<https://atomicdesign.bradfrost.com/>  
<https://info.drobe.co.jp/blog/engineering/react-component-atomic-design>  
<https://blog.spacemarket.com/code/atomic-design%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6react%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%86%8D%E8%A8%AD%E8%A8%88%E3%81%97%E3%81%9F%E8%A9%B1/>  
<https://www.indetail.co.jp/blog/10234/>  
<https://ja.legacy.reactjs.org/docs/components-and-props.html#function-and-class-components>  
<https://www.twilio.com/ja/blog/react-choose-functional-components-jp>  
<https://zenn.dev/swata_dev/articles/7f8ef4333057d7>  
<https://fullstacklife.net/programming/react/ract-class-function-component/>  
