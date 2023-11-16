# 課題04

## クイズ01

`Cache-Controll: max-age=“600”` の設定について間違いを指摘してください。  

<details><summary>Answer</summary>

不必要なダブルクォーテーションが入っている  

`Cache-Controll: max-age=600` が正しい  

<https://cache-tests.fyi/?id=freshness-max-age-quoted>  

</details>

## クイズ02

CDNなどでキャッシュされないようにするにはどのように設定すればよいでしょうか？  

<details><summary>Answer</summary>

`Cache-Control: private` を設定する  

<https://engineering.mercari.com/blog/entry/2017-06-22-204500/>  

</details>

## クイズ03

`Cache-Control` を指定しない場合、キャッシュされますか？  

<details><summary>Answer</summary>

Cache-Control が指定されていなくても、ある条件が満たされればレスポンスは格納されて再利用される。  

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#heuristic_caching>  

</details>
