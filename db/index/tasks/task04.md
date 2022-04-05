# インデックス

## 課題4

### 複合インデックスの説明

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
