# 課題03

## ビルド時間を短縮するためにできること

- 依存する外部ライブラリをキャッシュする  
- テストを並列に動かす
- テストの実行速度を改善する

- 参考
  - <https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows>
  - <https://product.10x.co.jp/entry/2023/12/01/113134>

## 自動的にブログをビルドしてデプロイするワークフロー

- Github Actionsを定期実行させ、コンテンツが更新されていたらビルドを実行する  
- headless CMSで管理しているコンテンツの更新時にGithub Actionsにリクエストを送るようWebhookを設定し、  
  Github Actionsのrepostitory_dispatchを登録することでリクエストをトリガーにビルドを実行することができる。  

- 参考
  - <https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#repository_dispatch>
  - <https://zenn.dev/mizchi/articles/3117b92a834531361fc8>

## 特定のディレクトリが更新された時のみ動作するワークフロー

`paths`を設定する

```yml
on:
  push:
    paths:
      - 'src/**'
```

- 参考
  - <https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-including-paths>

## 特定のjobが他のjobの完了を待ってから実行されるようにするには

`needs`を設定する

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build something
        run: ./build.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Test something
        run: ./test.sh
```

- 参考
  - <https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds>

## 秘匿性の高い環境変数について

`secrets`を使う  
リポジトリの`Settings`タブから設定することが可能  
保存した値は`${{ secrets.XXX }}`で参照することができる

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build project
        env:
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
        run: ./build.sh
```

- 参考
  - <https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions>
