# 課題

## 質問

### 認証

#### 違い

- Personal Access Tokens  
  ユーザーがGitHub APIを使用するために作成するトークン。  
  - Fine-grained personal access tokens
    - Personal access tokens (classic)より細かな権限を設定できる。
      - 特定のリポジトリ
      - 特定の操作
    - トークンの有効期限が必須。
  - Personal access tokens (classic)
    - ユーザーがアクセスできる全てのリポジトリにアクセス権限を持つ。  
    - トークンの有効期限を設定できる。(無期限も可能)
    - スコープ単位で権限を設定できる。

- GitHub Apps  
  GitHubの機能を拡張するためのツール  
  GitHub上での操作（例えば、イシューの作成、プルリクエストへのコメント、プロジェクトの管理など）を自動化、GitHub外のサービスと連携することができる。  
  - 特定のリポジトリにアクセス権限を持つ。
  - ユーザーの代わり、または独立して動作する。
  - 短期間のトークンを使用する。
  - エンタープライズレベルのリソースにはアクセスできない。  
    (エンタープライズ設定、ライセンス情報など)

- OAuth Apps  
  GitHubのAPIを使用するための認証を行うためのアプリケーション。  
  - ユーザーがアクセスできる全てのリポジトリにアクセス権限を持つ。  
  - ユーザーの代わりに動作する。
  - 無期限のトークンを使用する。
  - エンタープライズレベルのリソースにアクセスできる。

- 参考
  - [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
  - [Differences between GitHub Apps and OAuth apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)
  - [Best practices for creating an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/best-practices-for-creating-an-oauth-app)
  - [Authenticating with a GitHub App on behalf of a user](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)
  - [Authorizing OAuth apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)
  - [GitHub AppsとOAuth Appsの違いが分からなかった人のために、日本一わかりやすく説明してみた](https://qiita.com/dowanna6/items/cfe3fc88643d3ef95a37)

#### シチュエーション

- Personal Access Tokens (PATs)  
  - 個人のスクリプトやツール
  - 一時的な検証、限定的なアクセス
- GitHub Apps
  - 組織やチームでの使用  
  複数のユーザーやリポジトリに対して一貫したアクセス制御が必要な場合
  - インテグレーション  
  GitHubのイベントやAPIを利用する場合
  - セキュリティ  
  各リポジトリやインスタレーションごとに異なる権限を設定できるため、  
  セキュリティを重視する場合
- OAuth Apps  
  - サードパーティアプリケーション  
  他のサービスやアプリケーションと連携する場合
  - ユーザー認証  
  ユーザーが自分のGitHubアカウントを使ってサードパーティアプリにログインする場合

### 認証トークンの管理

#### なぜ

- トークンの漏洩  
  リポジトリにアクセスできる全ての人にトークンを取得できてしまい、  
  悪用される可能性がある。
- トークンの更新  
  トークンの有効期限が切れた場合、  
  再度トークンを取得、コードを修正しコミット、再デプロイが必要となり、  
  トークンの管理、運用が複雑になる。

#### 回避方法

- 環境変数に保存  
  トークンを環境変数に保存し、コードから参照する。
- シークレット管理ツール  
  AWS Secrets Manager、HashiCorp Vaultなどのシークレット管理ツールを使用する。

## 実装

[cli](./cli/)

```sh
npm init -y
npm install typescript ts-node axios commander @types/node @types/commander
npx tsc --init
```

### issueの一覧を取得する

```sh
npx tsx src/index.ts <owner> <repository>
```

<https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues>

### issueにコメントする

```sh
npx tsx src/index.ts <owner> <repository> -i <issue番号> -c <コメント>
```

<https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#create-an-issue-comment>
