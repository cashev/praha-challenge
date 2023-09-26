# スロークエリ

## 課題05

LIMIT, OFFSET以外のページネーション

カーソルベース

特定のカラムを起点にそこからレコードを取得する方法  

nextボタンを押下した時、次はどこから取得するか動的に設定しDBから取得する  
例  
それぞれのページに100件ずつ従業員を表示する場合  
1ページ... 10001-10100  
2ページ... 10101-10200  
3ページ... 10201-10300  
...  

ここで2ページ目にてnextボタンを押したとすると、10200以降の100件を取得したいため  
**10200**をURLクエリパラメータ, JSONなどのリクエストに含め  
サーバ側は以下のようなSQLでレコードを取得する  

``` sql
SELECT * 
FROM employees.employees 
WHERE emp_no > 10200 
ORDER BY emp_no LIMIT 100;
```

メリット

- offsetを使っていないためレコードが多くても取得に時間がかからない  
- リアルタイムにレコードが増減しても、データの重複, スキップが起こらない  

デメリット

- ユニークでシーケンシャルなカラムが必要  
- 特定のページにジャンプできない  

### 参考

[図解ページネーション\~オフセット・カーソル\~](https://note.com/note_fumi/n/nd5ee70a912d2)  
[Is offset pagination dead? Why cursor pagination is taking over](https://uxdesign.cc/why-facebook-says-cursor-pagination-is-the-greatest-d6b98d86b6c0)  
[How to Implement Cursor Pagination Like a Pro](https://medium.com/swlh/how-to-implement-cursor-pagination-like-a-pro-513140b65f32)  
[Cursor-based pagination vs Offset-based pagination](https://www.adityathebe.com/cursor-vs-offset-based-pagination)  
<https://scrapbox.io/tasuwo/Pagination>  
[私と2つのページング物語](https://mixi-developers.mixi.co.jp/my-paging-story-e56effb3d6ab)  
