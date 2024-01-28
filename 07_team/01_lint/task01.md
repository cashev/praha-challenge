# 課題01

## lintを使う理由

- コードの一貫性を保つ
- 可読性を上げる
- 潜在的なバグを発見する
- コードレビューの効率化

## ESLint

### 重要なルール

- no-unused-vars 未使用の変数を検出する  
<https://eslint.org/docs/latest/rules/no-unused-vars>
- no-use-before-define 未定義変数を検出する  
<https://eslint.org/docs/latest/rules/no-use-before-define>
- eqeqeq 厳密等価演算子を強制する  
<https://eslint.org/docs/latest/rules/eqeqeq>
- consistent-return returnの内容を一貫させる  
<https://eslint.org/docs/latest/rules/consistent-return>
- no-unreachable 到達不可能コードを検出する  
<https://eslint.org/docs/latest/rules/no-unreachable>

### ESLintをかける

[learn-lint](https://github.com/cashev/learn-lint)

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
npx eslint --init
npx eslint --fix .
```
