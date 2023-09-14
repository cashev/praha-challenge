# 課題04

CustomButtonのコンポーネント設計

## 問題点

CustomButton.module.css の .custombutton に `color: red;`が追加された場合、CustomBlueButton.js の色が赤に変わってしまう。

## 実装

```js
import styles from "./CustomButton.module.css";
export function CustomButton() {
  return (
    <button className={styles.custombutton}>click me!</button>
  );
}
```

## 参考

<https://blog.uhy.ooo/entry/2020-12-19/css-component-design/>
<https://kk-web.link/blog/20201113>
