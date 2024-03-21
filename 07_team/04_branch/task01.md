# 課題01

## Git flow

[イメージ図](./images/GitFlow.drawio.png)

master: 常にリリース可能な状態のメインブランチ  
develop: メインのブランチで、ここから個々の機能ごとにブランチを切って開発を進める  
feature: developから個人別にブランチを切って開発する  
hotfix: 緊急のバグ修正などをmasterからブランチを切って対応する  
release: リリース直前用のブランチ  

- 開発の流れ
  1. masterからdevelopブランチを切る
  1. developから各開発者がfeatureブランチをそれぞれ切り、機能開発を行う
  1. 機能開発が完了したfeatureブランチをdevelopにマージする
  1. developからreleaseブランチを切る
  1. リリースのタイミングでmaster, developブランチにマージする
  1. masterブランチの内容をデプロイする

- 緊急のバグ修正/脆弱性対応
  1. masterからhotfixブランチを切る
  1. バグ修正/脆弱性対応を行う
  1. master, developブランチにマージする

- メリット
  - リリース前にリリースブランチを作成し、テストと微調整を行うことで、安定したリリースができる
  - バグ修正についても、masterからhotfixブランチを切ることで、安全に修正ができる
- デメリット
  - ブランチの数と遷移が多く、複雑になる
  - 小規模なプロジェクトにはオーバースペックである

## GitHub flow

[イメージ図](./images/GitHubFlow.drawio.png)

master: 常にリリース可能な状態のメインブランチ
feature: masterから個々の機能ごとにブランチを切って開発する

- 開発の流れ
  1. masterから各開発者がfeatureブランチをそれぞれ切り、機能開発を行う
  1. 機能開発が完了したfeatureブランチをmasterにマージする

- メリット
  - シンプルな開発フロー
  - デプロイ頻度が高い
- デメリット
  - リリースブランチがないため、リリース管理が難しい
  - 大規模なプロジェクトには向かない

## ブランチベース

- メリット
  - 開発中の機能ごとにブランチを切るため、開発が分かりやすい
- デメリット
  - 長い期間ブランチが存在すると、マージが難しくなる

## トランクベース

1つのブランチ(master)上で直接作業を行うか、1,2日以内にマージすることを前提とした作業用ブランチで作業する手法  

- メリット
  - 作業単位が小さいため、マージが容易  
    レビューの時間が減る
  - デプロイ頻度が高い
- デメリット
  - 品質担保が難しい  
    テストが必須
  - 作業を細かい単位で行うため、開発が分かりにくい
  - 更新のタイミングによって競合が発生しうる
  - 開発中の機能がmasterブランチにマージされるため、リリース前のテストが難しい  
    feature flagを使う必要がある  

## どちらを採用するか

ブランチベース  

開発中の機能ごとにブランチを切るため、開発が分かりやすい

## 参考

- <https://docs.github.com/en/get-started/using-github/github-flow>
- <https://www.abtasty.com/blog/git-branching-strategies/>
- <https://nvie.com/posts/a-successful-git-branching-model/>
- <https://www.alexhyett.com/git-flow-github-flow/>
- <https://atmarkit.itmedia.co.jp/ait/articles/1708/01/news015.html>
- <https://rheb.hatenablog.com/entry/2021/08/24/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%AF%E3%83%99%E3%83%BC%E3%82%B9%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6>
- <https://www.atlassian.com/ja/continuous-delivery/continuous-integration/trunk-based-development>
