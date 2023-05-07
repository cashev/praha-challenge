# 課題01

## 対象

<https://github.com/cashev/nand2tetris/blob/main/projects/JackCompiler/compilationEngine.go>  

[コンピュータシステムの理論と実装 ―モダンなコンピュータの作り方](https://www.oreilly.co.jp/books/9784873117126/)  
10, 11章の内容  
Jackという独自言語をコンパイルする  

## リファクタリング方針

単一責務の原則に違反しているため、各nodeごとに分割する。  
手続き型の書き方となっているため、リスコフの置換原則に基づいてinterfaceを作成し分割する。  
