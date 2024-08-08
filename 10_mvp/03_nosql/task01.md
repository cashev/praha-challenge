# 課題01

## テストデータ

環境構築

```sh
npm init -y
npm install typescript ts-node commander @types/node @types/commander firebase-admin
npx tsc --init --rootDir src --outDir out --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

Cloud ShellでFirestoreのmodeをNativeに変更する。

```sh
gcloud firestore databases update --type=firestore-native --database='(default)'
```

テストデータを登録する。

```sh
npx tsx src/seed.ts 
```
