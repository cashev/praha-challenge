# 課題02

## 実装

### 実行手順

バックアップを取得する

```sh
pg_dump -Fc -h localhost -p 5432 -d prisma > backup.dump
```

マイグレーションを実行する

```sh
npm run prisma migrate deploy
```

Prisma Clientを再生成する

```sh
npm run prisma generate
```

### 発生しうる問題

データの欠損が発生する可能性がある  

### 対応策

取得しておいたバックアップからデータを復元する  

```sh
pg_restore --clean -h localhost -p 5432 -d prisma backup.dump
```

### 参考

- [Prisma CLI reference#migrate-deploy](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-deploy)
- [Prisma Migrationの動作を確認してみた](https://dev.classmethod.jp/articles/prisma-migration-preview-confirmation/)
