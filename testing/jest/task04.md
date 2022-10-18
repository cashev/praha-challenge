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

1 

2

3
