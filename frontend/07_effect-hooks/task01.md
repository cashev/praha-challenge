# 課題01

## cleanupが必要な理由

- メモリリークを防ぐ  
  外部リソース使用する場合、コンポーネントがアンマウントされるときにcleanupでリソースを解放しないとメモリリークが発生する。  
- イベントリスナーの解除
   依存配列の値が変更されるたびに新しいイベントリスナーを追加し、古いものを削除しない場合、  
   同じイベントに対して複数のリスナーが追加される可能性がある。  
- パフォーマンスの向上
  不要な副作用やリソースの使用を回避することで、アプリケーションのパフォーマンスを最適化する。  

## useEffectの第二引数について

### 何も指定しない場合

コンポーネントの各レンダリング後に実行される。  

### 空配列を指定する場合

コンポーネントの初回レンダリング後に1回だけ実行される。

## 参考

<https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/>  
<https://zenn.dev/uhyo/articles/useeffect-taught-by-extremist>  
<https://react.dev/reference/react/useEffect#examples-dependencies>  
<https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development>  
<https://dev.to/nibble/what-is-useeffect-hook-and-how-do-you-use-it-1p9c>  
