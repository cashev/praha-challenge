# SQL10本ノック

## 課題3 (クイズ)

1

CASE式でELSEを記述がなく、WHENのどれとも合致しない場合、  
どんな値が出力されるでしょうか。

``` sql
-- CustomerID = 1には何が出力されるか
SELECT 
  CASE 
    WHEN CustomerID >= 2 THEN CustomerID 
  END 
FROM Customers;
```

2

COUNTで指定したカラムにNULLがある場合、  
COUNT()はいくつで出力されるでしょうか。

``` sql
UPDATE Orders 
SET EmployeeID = NULL 
WHERE EmployeeID = 1;
```

``` sql
SELECT EmployeeID , COUNT(EmployeeID) 
FROM Orders 
GROUP BY EmployeeID;
```

3

LENGTH()にNULLを指定したとき何が出力されるでしょうか

``` sql
SELECT LENGTH(NULL);
```
