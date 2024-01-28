# 課題02

## pre-commit hook

### 導入

```sh
npm install --save-dev husky
npx husky init
```

### 検証

constをvarに変えて`git commit -m "test"`を実行

```sh
/home/ubuntu/workspace/leran-lint/app.js
   3:1  error    Unexpected var, use let or const instead  no-var
  11:3  warning  Unexpected console statement              no-console

✖ 2 problems (1 error, 1 warning)
  1 error and 0 warnings potentially fixable with the `--fix` option.

husky - pre-commit script failed (code 1)
```

## 問題点
