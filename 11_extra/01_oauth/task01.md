# 課題01

## 質問

### 認証と認可、全般

#### 違い

- 認証 (Authentication)  
  利用者が誰であるかを特定し、確認すること  
  例えば、ユーザーが正しいパスワードを入力しているかどうかを確認すること
  - 方法  
    - パスワード
    - トークン
    - 生体認証
- 認可 (Authorization)  
  利用者が特定のリソースや情報にアクセスする権限を持っているかどうかを確認すること  
  認証の後に行われる。  
  例えば、ユーザーが管理者権限を持っているかどうかを確認すること
  - 方法  
    - Role-Based Access Control (RBAC)  
      ユーザーにロールを割り当て、そのロールに基づいてアクセス権を決定する。
    - Attribute-Based Access Control (ABAC)  
      ユーザーの属性に基づいてアクセス権を決定する。  
    - Policy-Based Access Control (PBAC)  
      ポリシーに基づいてアクセス権を決定する。

- 参考
  - [Microsoft Authentication vs. authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization)
  - [Okta Authentication vs. Authorization](https://www.okta.com/identity-101/authentication-vs-authorization/)

#### 仕組みと呼ばない

### OAuth2.0

#### Authorization grant types

#### authorization code を使うこと

#### OAuth2.0の図解

### Twitter

### Open ID Connect

#### Open ID Connectの図解

#### メリット
