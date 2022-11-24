# 課題01

## 質問

### スナップショットテストとは

UIが予期せぬ変更がされていないかチェックするツール  
保存されたスナップショットとレンダリングされた内容を比較し、一致しない場合テストが失敗する  

### 防止できる不具合

- CSSや画像のみの変更
- 画面の表示崩れ
- 表示内容は変わらない内部ロジックの変更

### 防止できない不具合

- 画面上に現れないもの
- 差分が膨大な量あるもの
- アニメーションなど動的に変化するもの

## 参考

<https://jestjs.io/ja/docs/snapshot-testing>  
<https://deltice.github.io/jest/docs/ja/snapshot-testing.html>  
<https://www.mizdra.net/entry/2021/02/04/003728>  
