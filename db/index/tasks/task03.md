# インデックス

## 課題3

遅いクエリ

``` sql
SELECT emp.last_name, SUM(sal.salary) sum
FROM employees.employees emp 
INNER JOIN employees.salaries sal
ON emp.emp_no = sal.emp_no 
GROUP BY emp.last_name 
HAVING sum = 
(
    -- 最大値
    SELECT MAX(tmp.tmp_sum) 
    FROM
    (
        -- last_nameごとのsalaryのsumを計算
        SELECT SUM(sal2.salary) tmp_sum 
        FROM employees.employees emp2 
        INNER JOIN employees.salaries sal2
        ON emp2.emp_no = sal2.emp_no 
        GROUP BY emp2.last_name 
    ) tmp
);
```

<details>
<summary>実行結果</summary>

``` sql
+-----------+-----------+
| last_name | sum       |
+-----------+-----------+
| Flowers   | 146930271 |
+-----------+-----------+
1 row in set (14.96 sec)
```

</details>

<details>
<summary>EXPLAIN 実行結果</summary>

``` sql
+----+-------------+------------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-----------------+
| id | select_type | table      | partitions | type   | possible_keys | key     | key_len | ref                   | rows | filtered | Extra           |
+----+-------------+------------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-----------------+
|  1 | PRIMARY     | sal        | NULL       | ALL    | PRIMARY       | NULL    | NULL    | NULL                  |    1 |   100.00 | Using temporary |
|  1 | PRIMARY     | emp        | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | employees.sal.emp_no  |    1 |   100.00 | NULL            |
|  2 | SUBQUERY    | <derived3> | NULL       | ALL    | NULL          | NULL    | NULL    | NULL                  |    2 |   100.00 | NULL            |
|  3 | DERIVED     | sal2       | NULL       | ALL    | PRIMARY       | NULL    | NULL    | NULL                  |    1 |   100.00 | Using temporary |
|  3 | DERIVED     | emp2       | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | employees.sal2.emp_no |    1 |   100.00 | NULL            |
+----+-------------+------------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-----------------+
5 rows in set, 1 warning (0.01 sec)
```

</details>

indexを作成

``` sql
CREATE INDEX employees_salary ON employees.salaries(emp_no, salary);
```

<details>
<summary>index作成後の実行結果</summary>

``` sql
+-----------+-----------+
| last_name | sum       |
+-----------+-----------+
| Flowers   | 146930271 |
+-----------+-----------+
1 row in set (10.87 sec)
```

</details>

<details>
<summary>EXPLAIN 実行結果</summary>

``` sql
+----+-------------+------------+------------+--------+--------------------------+------------------+---------+-----------------------+------+----------+------------------------------+
| id | select_type | table      | partitions | type   | possible_keys            | key              | key_len | ref                   | rows | filtered | Extra                        |
+----+-------------+------------+------------+--------+--------------------------+------------------+---------+-----------------------+------+----------+------------------------------+
|  1 | PRIMARY     | sal        | NULL       | index  | PRIMARY,employees_salary | employees_salary | 8       | NULL                  |    1 |   100.00 | Using index; Using temporary |
|  1 | PRIMARY     | emp        | NULL       | eq_ref | PRIMARY                  | PRIMARY          | 4       | employees.sal.emp_no  |    1 |   100.00 | NULL                         |
|  2 | SUBQUERY    | <derived3> | NULL       | ALL    | NULL                     | NULL             | NULL    | NULL                  |    2 |   100.00 | NULL                         |
|  3 | DERIVED     | sal2       | NULL       | index  | PRIMARY,employees_salary | employees_salary | 8       | NULL                  |    1 |   100.00 | Using index; Using temporary |
|  3 | DERIVED     | emp2       | NULL       | eq_ref | PRIMARY                  | PRIMARY          | 4       | employees.sal2.emp_no |    1 |   100.00 | NULL                         |
+----+-------------+------------+------------+--------+--------------------------+------------------+---------+-----------------------+------+----------+------------------------------+
5 rows in set, 1 warning (0.00 sec)
```

</details>
