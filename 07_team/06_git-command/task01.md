# 課題01

## Gitコマンド

### 特定のコミットとの差分

```sh
git diff <commit>
```

### 差分があるファイルの一覧

```sh
git diff --name-only
```

### 部分的にステージング

```sh
git add -p
```

### 変更を退避

```sh
git stash
```

### 特定のファイルの履歴

```sh
git log -p <path>
```

### 複数のコミットをまとめる

```sh
git rebase -i <after-this-commit>
```

#### 例

```sh
git rebase -i HEAD~5
```

### 特定のブランチからブランチを作成

```sh
git checkout -b <new-branch> <branch>
```

### 最新コミットだけクローン

```sh
git clone --depth 1 <repository>
```

### マージを中断する

```sh
git merge --abort
```

## 参考

- <https://git-scm.com/book/ja/v2>
- <https://git-scm.com/docs/git-log>
- <https://git-scm.com/docs/git-rebase>
- <https://git-scm.com/docs/git-checkout>
- <https://git-scm.com/docs/git-clone>
- <https://git-scm.com/docs/git-merge>
