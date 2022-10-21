# スロークエリ

## 課題06

long_query_timeの最小値, 最大値は？  

mysqldumpslowではLIMIT 10など数値がNとしてまとめられています。  
Nとしてまとめずにそれぞれの数値で集計するオプションは何でしょうか。  

long_query_timeを越えていないSQLでもログとして記録することが可能です。  
その設定をした場合、どのようなSQLをログに記録するのでしょうか。  

## 参考

<https://gihyo.jp/dev/serial/01/MySQL-tuning-scale/0005>  
