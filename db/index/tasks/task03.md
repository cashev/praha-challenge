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
1 row in set (11.07 sec)
```

</details>
