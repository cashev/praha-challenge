# 課題03

## 問題点

Personのname, starWorkingAt、 Companyのpeopleが外部から変更可能になっているため意図しない上書きが起こりうる  

## 解決策

readonlyをつけイミュータブルにする  
オブジェクトを取得する場合は、そのコピーを渡す  
