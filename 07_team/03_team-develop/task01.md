# 課題01

## PRの粒度

- 実装
  - 時間がかかる
  - 動作確認、テストするにも時間がかかる
    - テストパターンが増大する
- レビューの容易性
  - 小さい粒度であればすぐさまレビューできるが、大きい修正だとレビューするにもまとまった時間が必要
  - 巨大なPRは変更範囲が大きいためレビューに時間がかかる
    - コメント数が増える
    - コメントの往復数も増える
- デプロイ頻度の向上
  - 小さい単位でPRを提出することでCI/CDのサイクルが回り、デプロイ頻度を高めることができる
  - 大きい修正はマージまでに時間がかかり、リリースもビックバンリリースになってしまう  
- 品質の向上
  - 修正内容が小さく、もし不具合が出ても原因が特定しやすい
  - 細かい粒度であればテストを追加することが容易に可能である

- 参考
  - <https://techblog.cartaholdings.co.jp/entry/2023/08/15/163000>  
  - <https://qiita.com/technuma/items/eae37b75e3aa5530d319>
  - <https://azujuuuuuun.hatenablog.com/entry/2021/11/18/210557>

## コードのコメント

- 書くべきこと
  - コードの目的, 意図
  - 実装上の仕様, 制約
    - 機能制約, 前提条件
  - なぜこのような実装になっているか  
    違和感を感じるコードでも意図的にその実装である理由
    - 速度改善のため
    - 不具合のため
- 書くべきでないこと
  - コードを読めばわかること
  - 名前の説明  
    わかりやすい名前をそもそもつける
  - Author, 作者

- 参考
  - <https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/>
  - <https://dev.to/nadaelokaily/don-t-comment-your-code-5e9h>
  - <https://twitter.com/t_wada/status/904916106153828352->

## Gitのコメント

- 書くべきこと
  - どういった種別の変更か
    - 新機能
    - 不具合修正
    - リファクタリング
    - ドキュメント, コメント
    - テストコード
  - 何を変更したのか
  - なぜ変更したか
  - issue, チケット
- 書くべきでないこと
  - 変更したソースコードの説明

- 参考
  - <https://medium.com/@saeid/10-essential-practices-for-better-git-commits-and-why-they-matter-3cfc420bf53e>
  - <https://zenn.dev/itosho/articles/git-commit-message-2023>
  - <https://qiita.com/konatsu_p/items/dfe199ebe3a7d2010b3e>
