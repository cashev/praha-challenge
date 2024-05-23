# 課題03

## クイズ

### クイズ01

同じActionがAllowとDenyで設定されている場合、どちらが優先されるか。

<details><summary>Answer</summary>

Denyが優先される。  

[明示的な拒否と暗黙的な拒否の違い](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#AccessPolicyLanguage_Interplay)

</details>

### クイズ02

IAMユーザーを作成すると、そのユーザーはデフォルトでどういったポリシーを持つか。  

<details><summary>Answer</summary>

IAMユーザーはデフォルトで何のポリシーも持たない。  
設定によってはIAMUserChangePasswordなどのポリシーが付与される場合がある。　　

</details>

### クイズ03

IAMユーザーを作成した場合、どのリージョンに作成されるか。  

<details><summary>Answer</summary>

グローバル  
IAMユーザーはリージョンに依存しない。  

</details>
