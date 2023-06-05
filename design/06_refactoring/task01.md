# 課題01

## 対象

<https://github.com/cashev/nand2tetris/blob/main/projects/JackCompiler>  

[コンピュータシステムの理論と実装 ―モダンなコンピュータの作り方](https://www.oreilly.co.jp/books/9784873117126/)  
10, 11章の内容  
Jackという独自言語をコンパイルする  

<https://www.nand2tetris.org/project09>

## 既存処理

- analyzer.go  
main関数

- file.go  
指定されたファイル,ディレクトリーを読み込む。  
解析結果をファイルに出力する。  

- tokenizer.go  
文字列を字句解析する。  

- compilationEngine.go  
構文解析を行う。  
独自VMのアセンブリへ変換する。  

## リファクタリング方針

ドメイン層とプレゼンテーション層に分ける。  
字句解析, 構文解析, VMコード生成はドメイン
ファイル入出力はプレゼンテーション

### ドメイン層

#### 字句解析

構文解析がこの処理に依存しないようinterface化する。

#### 構文解析,VMコード生成

単一責務の原則に違反しているため、各nodeごとに分割する。  
手続き型の書き方となっているため、リスコフの置換原則に基づいてinterfaceを作成し分割する。  
parse処理中にVMのコードを出力している、構文解析とVMコード生成の責務を分ける。

### プレゼンテーション層

#### ファイルの入出力

ファイル以外で入出力できるようIReader, IWriterなどの入出力用interfaceを作成する。  
