# 複合インデックス

## 課題02

### SQL01

``` sql
SELECT DISTINCT last_name, first_name 
FROM employees.employees 
WHERE last_name LIKE 'c%' AND first_name LIKE 'c%';
```

実行時間

``` sql
718 rows in set (0.10 sec)
```

EXPLAIN結果 (indexなし)

``` sql
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+------------------------------+
| id | select_type | table     | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra                        |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+------------------------------+
|  1 | SIMPLE      | employees | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 299778 |     1.23 | Using where; Using temporary |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+------------------------------+
1 row in set, 1 warning (0.00 sec)
```

インデックス作成

``` sql
CREATE INDEX emp_name ON employees.employees(last_name, first_name);
```

インデックス作成後の実行時間

``` sql
718 rows in set (0.03 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-----------+------------+-------+---------------+----------+---------+------+-------+----------+--------------------------+
| id | select_type | table     | partitions | type  | possible_keys | key      | key_len | ref  | rows  | filtered | Extra                    |
+----+-------------+-----------+------------+-------+---------------+----------+---------+------+-------+----------+--------------------------+
|  1 | SIMPLE      | employees | NULL       | range | emp_name      | emp_name | 124     | NULL | 34662 |    11.11 | Using where; Using index |
+----+-------------+-----------+------------+-------+---------------+----------+---------+------+-------+----------+--------------------------+
1 row in set, 1 warning (0.00 sec)
```

### SQL02

``` sql
SELECT emp_no 
FROM employees.titles 
WHERE title = 'Senior Engineer' 
  AND YEAR(from_date) >= '2002'
  AND to_date = '9999-01-01';
```

実行時間

``` sql
3634 rows in set (0.16 sec)
```

EXPLAIN結果 (indexなし)

``` sql
+----+-------------+--------+------------+------+---------------+------+---------+------+------+----------+-------------+
| id | select_type | table  | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |
+----+-------------+--------+------------+------+---------------+------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | titles | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    1 |   100.00 | Using where |
+----+-------------+--------+------------+------+---------------+------+---------+------+------+----------+-------------+
1 row in set, 1 warning (0.01 sec)
```

インデックス作成

``` sql
CREATE INDEX title_date ON employees.titles(title, from_date, to_date);
```

インデックス作成後の実行時間

``` sql
3634 rows in set (0.06 sec)
```

EXPLAIN結果

``` sql
+----+-------------+--------+------------+------+---------------+------------+---------+-------+------+----------+--------------------------+
| id | select_type | table  | partitions | type | possible_keys | key        | key_len | ref   | rows | filtered | Extra                    |
+----+-------------+--------+------------+------+---------------+------------+---------+-------+------+----------+--------------------------+
|  1 | SIMPLE      | titles | NULL       | ref  | title_date    | title_date | 202     | const |    1 |   100.00 | Using where; Using index |
+----+-------------+--------+------------+------+---------------+------------+---------+-------+------+----------+--------------------------+
1 row in set, 1 warning (0.01 sec)
```

### SQL03

``` sql
SELECT first_name, last_name, birth_date 
FROM employees.employees 
WHERE YEAR(birth_date) = '1952' AND first_name = 'Katsuo'
ORDER BY birth_date, last_name;
```

実行時間

``` sql
24 rows in set (0.11 sec)
```

EXPLAIN結果 (indexなし)

``` sql
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-----------------------------+
| id | select_type | table     | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra                       |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-----------------------------+
|  1 | SIMPLE      | employees | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 299246 |    10.00 | Using where; Using filesort |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-----------------------------+
1 row in set, 1 warning (0.01 sec)
```

インデックス作成

``` sql
CREATE INDEX emp_birthdate ON employees.employees(birth_date, first_name, last_name);
```

インデックス作成後の実行時間

``` sql
24 rows in set (0.04 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-----------+------------+-------+---------------+---------------+---------+------+-------+----------+----------------------------------------+
| id | select_type | table     | partitions | type  | possible_keys | key           | key_len | ref  | rows  | filtered | Extra                                  |
+----+-------------+-----------+------------+-------+---------------+---------------+---------+------+-------+----------+----------------------------------------+
|  1 | SIMPLE      | employees | NULL       | range | emp_birthdate | emp_birthdate | 61      | NULL | 29977 |   100.00 | Using where; Using index for skip scan |
+----+-------------+-----------+------------+-------+---------------+---------------+---------+------+-------+----------+----------------------------------------+
1 row in set, 1 warning (0.00 sec)
```
