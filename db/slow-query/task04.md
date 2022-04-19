# スロークエリ

## 課題04

### LIMIT 1

LIMITは取得した結果から表示するレコード数を制限するだけ。  
そのためLIMIT 1とLIMIT 100でも抽出時間は変わらない。  

### WHERE と JOIN

WHEREとJOINの取得結果は同じ  

ただしどちらかに全て書くのではなく、  
抽出条件はWHEREに  
結合条件はJOINに  
と分けて書いた方がSQLの意図が伝わりやすく可読性につながる。  

WHEREで条件指定

``` sql
SELECT * 
FROM employees.employees e 
JOIN employees.salaries s 
ON e.emp_no = s.emp_no 
WHERE gender = "M" 
  AND birth_date > "1960-01-01";
```

``` sql
666018 rows in set (0.58 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key     | key_len | ref                | rows   | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
|  1 | SIMPLE      | e     | NULL       | ALL  | PRIMARY       | NULL    | NULL    | NULL               | 299778 |    16.66 | Using where |
|  1 | SIMPLE      | s     | NULL       | ref  | PRIMARY       | PRIMARY | 4       | employees.e.emp_no |      9 |   100.00 | NULL        |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
2 rows in set, 1 warning (0.02 sec)
```

JOINのONで条件指定

``` sql
SELECT * 
FROM employees.employees e 
JOIN employees.salaries s 
ON e.emp_no = s.emp_no 
  AND gender = "M" 
  AND birth_date > "1960-01-01";
```

``` sql
666018 rows in set (0.54 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key     | key_len | ref                | rows   | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
|  1 | SIMPLE      | e     | NULL       | ALL  | PRIMARY       | NULL    | NULL    | NULL               | 299778 |    16.66 | Using where |
|  1 | SIMPLE      | s     | NULL       | ref  | PRIMARY       | PRIMARY | 4       | employees.e.emp_no |      9 |   100.00 | NULL        |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
2 rows in set, 1 warning (0.00 sec)
```

#### 外部結合

しかし外部結合の場合、結合時にNULLが入り込むため取得結果が異なる

WHEREで条件指定

``` sql
SELECT * 
FROM employees.employees e 
LEFT JOIN employees.salaries s 
ON e.emp_no = s.emp_no 
WHERE gender = "M" 
  AND birth_date > "1960-01-01";
```

``` sql
666018 rows in set (0.74 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key     | key_len | ref                | rows   | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
|  1 | SIMPLE      | e     | NULL       | ALL  | NULL          | NULL    | NULL    | NULL               | 299778 |    16.66 | Using where |
|  1 | SIMPLE      | s     | NULL       | ref  | PRIMARY       | PRIMARY | 4       | employees.e.emp_no |      9 |   100.00 | NULL        |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
2 rows in set, 1 warning (0.00 sec)
```

JOINで条件指定

``` sql
SELECT * 
FROM employees.employees e 
LEFT JOIN employees.salaries s 
ON e.emp_no = s.emp_no 
  AND gender = "M" 
  AND birth_date > "1960-01-01";
```

``` sql
895844 rows in set (1.25 sec)
```

EXPLAIN結果

``` sql
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key     | key_len | ref                | rows   | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
|  1 | SIMPLE      | e     | NULL       | ALL  | NULL          | NULL    | NULL    | NULL               | 299778 |   100.00 | NULL        |
|  1 | SIMPLE      | s     | NULL       | ref  | PRIMARY       | PRIMARY | 4       | employees.e.emp_no |      9 |   100.00 | Using where |
+----+-------------+-------+------------+------+---------------+---------+---------+--------------------+--------+----------+-------------+
2 rows in set, 1 warning (0.00 sec)
```
