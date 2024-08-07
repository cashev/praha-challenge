# 課題02

## 実装

### 課題を「未完了」から「完了」

[complete-question.ts](./myapp/src/complete-question.ts)

```sh
npx tsx src/complete-question.ts <userId> <questionId>
```

### 課題ステータスを一覧表示

[list-question-status.ts](./myapp/src/list-question-status.ts)

```sh

全件出力

```sh
npx tsx src/list-question-status.ts
```

指定したユーザーを出力

```sh
npx tsx src/list-question-status.ts -userId <userIds>
```

実行結果

```sh
[
  {
    "name": "テスト 一郎",
    "id": "1",
    "questions": [
      {
        "description": "課題01の詳細",
        "id": "1",
        "title": "課題01",
        "status": "完了"
      },
      {
        "description": "課題02の詳細",
        "id": "2",
        "title": "課題02",
        "status": "未完了"
      }
    ]
  },
  {
    "name": "テスト 二郎",
    "questions": [
      {
        "description": "課題01の詳細",
        "id": "1",
        "title": "課題01",
        "status": "完了"
      },
      {
        "description": "課題02の詳細",
        "id": "2",
        "title": "課題02",
        "status": "完了"
      }
    ],
    "id": "2"
  }
]
```

### 課題を更新

[update-question.ts](./myapp/src/update-question.ts)

```sh
npx tsx src/update-question.ts <questionId> <title> <description>
```

### 課題を削除

[delete-question.ts](./myapp/src/delete-question.ts)

```sh
npx tsx src/delete-question.ts <questionId>
```
