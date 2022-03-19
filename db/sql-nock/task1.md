# SQL10本ノック

## 課題1 (実装)

**Chromeで実行すること!**
<https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all>  
safariだとErrorとなった

- --, /\* \*/のコメントアウト
- strftime

### 96年に3回以上注文した（Ordersが3つ以上紐づいている）Customerのidと、注文回数

``` sql
SELECT Orders.CustomerID, Count(*) AS OrderCount 
FROM Orders 
LEFT OUTER JOIN Customers 
  ON Customers.CustomerID = Orders.CustomerID
WHERE strftime('%Y', Orders.OrderDate) = '1996'
GROUP BY Orders.CustomerID 
HAVING OrderCount >= 3 
ORDER BY 
  OrderCount DESC,
  Orders.CustomerID DESC;
```

96年に最もよく注文したCustomer  

- 20
- 63
- 65

### 最もよく注文したCustomer

``` sql
-- 最大数の注文数をもつCustomerIDを取得
SELECT CustomerID, COUNT(*) AS OrderCount
FROM Orders 
GROUP BY CustomerID
HAVING OrderCount = 
(
  -- CustomerIDごとの注文数の最大値を取得
  SELECT MAX(OrderCount2) 
  FROM 
  (
    -- CustomerIDごとに注文数を取得
    SELECT COUNT(*) AS OrderCount2
    FROM Orders 
    GROUP BY CustomerID
  )
);
```

最もよく注文したCustomer

- 20

#### 参考

<https://www.w3resource.com/sql/aggregate-functions/max-count.php>

### 過去、最も多くのOrderDetailが紐づいたOrderを取得してください。何個OrderDetailが紐づいていたでしょうか？

``` sql
-- 最大値をもつOrderIDを取得
SELECT OrderID, COUNT(OrderID) AS OrderDetailCount 
FROM OrderDetails 
GROUP BY OrderID 
HAVING OrderDetailCount = 
(
  -- 最大値を取得
  SELECT MAX(OrderDetailCount2) 
  FROM 
  (
    -- OrderDetailsからOrderIDごとの件数を取得
    SELECT OrderID, Count(OrderID) AS OrderDetailCount2 
    FROM OrderDetails 
    GROUP BY OrderID 
  )
)
ORDER BY OrderID ASC;
```

### Order数が多い順番にShipperのidを並べてください。Order数も表示してください

``` sql
SELECT ShipperID, COUNT(ShipperID) AS ShippingCount 
FROM Orders 
GROUP BY ShipperID 
ORDER BY 
  ShippingCount DESC,  
  ShipperID ASC;
```

### 売上が高い順番にCountryを並べてください。売上も表示してください

``` sql
SELECT 
  ROUND(SUM(OrderDetails.Quantity * Products.Price)) AS sales, 
  Customers.Country 
FROM OrderDetails 
LEFT OUTER JOIN Orders 
  ON OrderDetails.OrderID = Orders.OrderID 
LEFT OUTER JOIN Products 
  ON OrderDetails.ProductID = Products.ProductID 
INNER JOIN Customers 
  ON Orders.CustomerID = Customers.CustomerID 
GROUP BY Customers.Country
ORDER BY sales DESC;
```

### 国ごとの売上を年ごとに集計する

``` sql
SELECT 
  ROUND(SUM(OrderDetails.Quantity * Products.Price)) AS sales, 
  strftime('%Y', Orders.OrderDate) AS OrderYear,
  Customers.Country 
FROM OrderDetails 
LEFT OUTER JOIN Orders 
  ON OrderDetails.OrderID = Orders.OrderID 
LEFT OUTER JOIN Products 
  ON OrderDetails.ProductID = Products.ProductID 
INNER JOIN Customers 
  ON Orders.CustomerID = Customers.CustomerID 
GROUP BY Customers.Country, strftime('%Y', Orders.OrderDate)
ORDER BY 
  Customers.Country ASC, 
  OrderYear ASC;
```

### Employeeテーブルに「Junior（若手）」カラム（boolean）を追加

``` sql
ALTER TABLE Employees 
ADD COLUMN Junior BOOL;
```

``` sql
UPDATE Employees 
SET Junior = 
CASE 
  WHEN strftime('%Y', BirthDate) > '1960' THEN True 
  ELSE False 
END;
```

### Shipperにlong_relationカラム（boolean）を追加

``` sql
ALTER TABLE Shippers 
ADD COLUMN long_relation BOOL 
DEFAULT False;
```

``` sql
UPDATE Shippers 
SET long_relation = True 
WHERE 
  ShipperID IN 
  (
    -- 対象のShipperIDを取得
    SELECT Orders.ShipperID 
    FROM Orders 
    LEFT OUTER JOIN Shippers 
      ON Orders.ShipperID = Shippers.ShipperID 
    GROUP BY Orders.ShipperID 
    HAVING COUNT(*) >= 70
  );
```

### それぞれのEmployeeが最後に担当したOrderと、その日付

``` sql
SELECT OrderID, EmployeeID, MAX(OrderDate)
FROM Orders 
GROUP BY EmployeeID 
ORDER BY EmployeeID;
```

### NULLの扱いに慣れる

``` sql
UPDATE Customers 
SET CustomerName = NULL 
WHERE CustomerID = 10 ;
```

``` sql
SELECT * 
FROM Customers 
WHERE CustomerName IS NOT NULL;
```

``` sql
SELECT * 
FROM Customers 
WHERE CustomerName IS NULL;
```

### JOINの扱いになれる

``` sql
DELETE FROM Employees 
WHERE EmployeeID = 1;
```

非表示

``` sql
SELECT Orders.OrderID, Orders.CustomerID, Orders.EmployeeID, Orders.OrderDate 
FROM Orders 
INNER JOIN Employees 
  ON Orders.EmployeeID = Employees.EmployeeID
```

表示

``` sql
SELECT Orders.OrderID, Orders.CustomerID, Employees.EmployeeID, Orders.OrderDate
FROM Orders 
LEFT OUTER JOIN Employees 
  ON Orders.EmployeeID = Employees.EmployeeID
WHERE Employees.EmployeeID IS NULL
```
