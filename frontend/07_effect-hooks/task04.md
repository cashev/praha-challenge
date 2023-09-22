# 課題04

## useEffectに関するクイズ

### クイズ01

一つのコンポーネント内で複数の useEffect を使用することは可能ですか？

<details><summary>Answer</summary>

可能

<https://legacy.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns>  

</details>

### クイズ02

useEffect で componentDidMount と同じ様に動作させるためには、どのようにすればよいですか？  

<details><summary>Answer</summary>

依存配列を空にする（[]）

<https://techblg.app/articles/how-to-do-component-did-mount-with-react-hooks/>  

</details>

### クイズ03

useEffect と useLayoutEffect の主な違いは何ですか？  

A) useEffect は非同期で、useLayoutEffect は同期的に実行される  
B) useEffect はサーバーサイドレンダリングに対応しているが、useLayoutEffect は対応していない  
C) useEffect はクリーンアップ関数をサポートしていないが、useLayoutEffect はサポートしている  
D) useEffect と useLayoutEffect は全く同じであり、どちらを使用しても差はない  

<details><summary>Answer</summary>

A) useEffect は非同期で、useLayoutEffect は同期的に実行される  

<https://blog.logrocket.com/react-useeffect-vs-uselayouteffect-hooks-examples/>  
<https://dev-k.hatenablog.com/entry/react-hook-uselayoutEffect-hatena>  

</details>
