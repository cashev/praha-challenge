# 課題03

## 問題点

- 分割が細かすぎる
- molecules, organismsの区別が難しい
- TemplateがPagesと1対1対応しがち

## アトミックデザインに代わるディレクトリ

- src
  - components
    - pages
      - [各ページごと (home, search, cart, purchaseなど)]
    - uiParts
      - [共通のUIパーツごと (Button, Header, Footer, Menuなど)]

## 参考

- [Atomic Designをやめてディレクトリ構造を見直した話](https://note.com/tabelog_frontend/n/n07b4077f5cf3)
- [SPA Componentの推しディレクトリ構成について語る](https://zenn.dev/yoshiko/articles/99f8047555f700)
- [Reactのディレクトリ構成でAtomicデザインをやめた話](https://zenn.dev/brachio_takumi/articles/2ab9ef9fbe4159)
