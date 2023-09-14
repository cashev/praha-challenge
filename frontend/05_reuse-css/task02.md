# 課題02

SideMenu, MainContentのCSS

## 問題点

SideMenuとMainContentの親コンポーネントにdisplay: flexを使うことを強制している。  

## 実装

```css
.App {
  font-family: sans-serif;
  text-align: center;
  display: flex;
}

.App > div:first-child{
  flex: 0 0 300px;
}

.App > div:last-child {
  flex: auto;
}

.sideMenu {
  background-color: blue;
}

.mainContent {
  background-color: red;
}
```

## 参考

<https://blog.uhy.ooo/entry/2020-10-15/react-paired-css/>
