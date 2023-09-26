# インデックス

## 課題4

### 複合インデックスの説明

トランプがスペード、クローバー、ハート、ダイヤの1〜13、合計52枚あるとする。  
複合インデックスを(マーク, 数字)の順で作成した場合、  
スペードの1〜13, クローバーの1〜13, ハートの1〜13, ダイヤの1〜13  
の並びででインデックスされる。  
この時、数字単体で見た場合はソートされていない。  
複合インデックスを(数字, マーク)の順で作成した場合、  
スペードの1, クローバーの1, ..., ハートの13, ダイヤの13  
の並びでインデックスされる。  
この並びであれば数字でソートされているため、  
数字単体の検索でもインデックスが効く。  

### 姓だけの検索について

以下SQLでインデックスを作成した場合、  
first_nameでソートされた後last_nameでソートされた順に並び、  
last_nameで検索してもインデックスが効かないため。　　

``` sql
CREATE INDEX employees_name ON employees (first_name, last_name);
```

例  
first_name, last_nameの順だと  
Adam Smith, Jimmy Smith,  
John Doe, John Smith, John Titor,  
Paul Smith, William Smith  
で並ぶためlast_nameでインデックスが効かない。  

last_name, first_nameの順だと  
John Doe, Adam Smith,  
Jimmy Smith, John Smith, Paul Smith,  
William Smith, John Titor  
と並ぶためlast_nameで検索するとインデックスが効く。  
