# 課題04

## クイズ

### 関数3つ

```typescript
export const isLargerThanRandom = (n: number): boolean => {
  return n > Math.floor(Math.random() * 10);
};
```

```typescript
export const isFuture = (d: Date): boolean => {
  const today = new Date();
  return d > today;
};
```

```typescript
export const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  const ret = today.getFullYear() - birthDate.getFullYear();
  if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
    return ret - 1;
  }
  return ret;
};
```

### jestに関するクイズ

#### クイズ01

toEqual()とtoStrictEqual()の違いはなんでしょうか

#### クイズ02

外部APIへHTTPリクエスト送り、そのレスポンスを処理する関数をmockやspyOn使ってテストしたが、実際に動かすとエラーとなる場合どんな原因が考えられるでしょうか

#### クイズ03

testとitの違いは何でしょうか
