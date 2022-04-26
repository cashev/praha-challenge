# ビューを使いこなす

## 課題02

対象SQL

``` sql
SELECT DISTINCT last_name, first_name 
FROM employees.employees 
WHERE last_name LIKE 'c%' AND first_name LIKE 'c%';
```

Viewを作成

``` sql
CREATE VIEW emp_name AS SELECT last_name, first_name FROM employees.employees;
```

Viewの確認

``` sql
SHOW CREATE VIEW emp_name\G
*************************** 1. row ***************************
                View: emp_name
         Create View: CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `emp_name` AS select `employees`.`last_name` AS `last_name`,`employees`.`first_name` AS `first_name` from `employees`
character_set_client: latin1
collation_connection: latin1_swedish_ci
1 row in set (0.00 sec)
```

変更したSQL

``` sql
SELECT DISTINCT * 
FROM emp_name 
WHERE last_name LIKE 'c%' AND first_name LIKE 'c%';
```

パフォーマンス

View作成前

``` sql
718 rows in set (0.08 sec)
```

View作成後

``` sql
718 rows in set (0.07 sec)
```
