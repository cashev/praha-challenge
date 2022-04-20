# スロークエリ

## 課題05

LIMIT, OFFSET以外のページネーション

カーソルベース

カーソルを起点にそこから何件か取得する

メリット

- リアルタイムにレコードが増減しても、ページごとに重複, スキップが起こらない  
- データが多い時でもパフォーマンスが落ちにくい  

デメリット

- ユニークなカラムにしかカーソルを設定できない  
- 実装がOFFSET/LIMITより複雑  

### 参考

[図解ページネーション\~オフセット・カーソル\~](https://note.com/note_fumi/n/nd5ee70a912d2)  
[Is offset pagination dead? Why cursor pagination is taking over](https://uxdesign.cc/why-facebook-says-cursor-pagination-is-the-greatest-d6b98d86b6c0)  
[How to Implement Cursor Pagination Like a Pro](https://medium.com/swlh/how-to-implement-cursor-pagination-like-a-pro-513140b65f32)  
[Cursor-based pagination vs Offset-based pagination](https://www.adityathebe.com/cursor-vs-offset-based-pagination)  
