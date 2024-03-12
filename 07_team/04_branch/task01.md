# 課題01

## Git flow

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

- メリット
- デメリット

## ブランチベース

- メリット
- デメリット

## トランクベース

- メリット
- デメリット

## どちらを採用するか

## 参考

- <https://docs.github.com/en/get-started/using-github/github-flow>
- <https://www.abtasty.com/blog/git-branching-strategies/>
- <https://nvie.com/posts/a-successful-git-branching-model/>
- <https://www.alexhyett.com/git-flow-github-flow/>
- <https://atmarkit.itmedia.co.jp/ait/articles/1708/01/news015.html>
