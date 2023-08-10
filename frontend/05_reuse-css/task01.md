# 課題01

ReusableButtonのCSS

## 問題点

子コンポーネントがmarginを指定している。  
margin-topが指定されており、ボタンコンポーネントの外側に余白ができてしまう。  

## 実装

CSS

```css
.reusable-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

/* サイズに関するスタイル */
.reusable-button.small {
  padding: 5px 10px;
  font-size: 12px;
}

.reusable-button.large {
  padding: 15px 30px;
  font-size: 20px;
}

/* カラーに関するスタイル */
.reusable-button.primary {
  background-color: #007BFF;
  color: #ffffff;
}

.reusable-button.secondary {
  background-color: #6c757d;
  color: #ffffff;
}
```

コンポーネント

```tsx
import React from 'react';

function Button(props) {
  // クラス名を動的に生成
  const classNames = [
    'reusable-button',
    props.size,  // 'small', 'large' など
    props.variant  // 'primary', 'secondary' など
  ].join(' ');

  return (
    <button className={classNames}>
      {props.text}
    </button>
  );
}

export default Button;
```

例

```tsx
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReusableButton size='small' variant='primary' text='click me!'/>
    </div>
  );
}

```

## 参考

<https://qiita.com/otsukayuhi/items/d88b5158745f700be534>
<https://qiita.com/seya/items/8814e905693f00cdade2#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%83%89%E3%81%AE%E5%8E%9F%E5%89%87>
