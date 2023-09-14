# 課題01

## useStateに関するクイズ

### クイズ1

useStateを使用して複数の状態を持つ場合、どのように宣言するのがベストプラクティスですか？

1. 一つのuseStateでオブジェクトとして複数の状態を持つ。
1. 必要な数だけuseStateを使用して、それぞれの状態を持つ。
1. 配列として一つのuseStateで複数の状態を持つ。

<details><summary>Answer</summary>

2. 必要な数だけuseStateを使用して、それぞれの状態を持つ。

</details>

### クイズ2

ageが42のとき、以下のコードの実行結果は何ですか？

```js
function handleClick() {
  setAge(age + 1);
  setAge(age + 1);
  setAge(age + 1);
}
```

<details><summary>Answer</summary>

43

45にするには関数で書く必要がある。

```js
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```

<https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state>

</details>

### クイズ3

以下2つのコードのレンダリングにおける違いは何ですか？

```js
const [todos, setTodos] = useState(createInitialTodos());
```

```js
const [todos, setTodos] = useState(createInitialTodos);
```

<details><summary>Answer</summary>

createInitialTodos()では再レンダリング時に都度実行される。  
createInitialTodosでは初回レンダリングでのみ実行される。  

<https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state>

</details>
