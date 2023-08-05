# Button Component

## 課題01

<https://github.com/cashev/nextjs-tutorial/pull/3/files#diff-bca9669c3691da40da845f9c5f9c8ad65ab4618a13cc587bf79b88dc44cb9bf3>

## 課題02

<https://github.com/cashev/nextjs-tutorial/pull/3/files#diff-a34a313410a43a2474328b29996b292399b37382dc56be0c9fd4522558715b41>

## 課題03

### childrenとtextの違い

childrenはReactNode型で、textはstring型とする。  
ReactNode型では複数の要素を渡せてしまい、意図しないchildrenがButtonコンポーネントに渡されてしまう可能性がある。  
一方、textであればstring型のため、複数の要素を渡すことができず意図しないchildrenが渡されることはない。  
childrenを使い柔軟に作りすぎると将来的に不具合の原因になる可能性があるため、textを使うべきと考える。  

## 参考

<https://storybook.js.org/docs/7.1/react/essentials/actions>  
