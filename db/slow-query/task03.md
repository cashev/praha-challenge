# スロークエリ

## 課題03

SQL01

``` sql
SELECT DISTINCT title FROM employees.titles ORDER BY title;
```

インデックスを作成

``` sql
CREATE INDEX title ON employees.titles(title);
```

SQL02

``` sql
SELECT emp_no, MIN(salary), MAX(salary), MAX(salary) - MIN(salary) diff
FROM employees.salaries 
GROUP BY emp_no
ORDER BY diff DESC
LIMIT 100;
```

``` sql
CREATE INDEX emp_salary ON employees.salaries(emp_no, salary);
```
