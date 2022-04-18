# スロークエリ

## 課題01

スロークエリログを有効

``` sql
SET GLOBAL slow_query_log = 'ON';
```

設定確認

``` sql
SHOW variables LIKE 'slow_query_log%';
```

実行に0.1秒以上かかったクエリを記録するよう設定

``` sql
SET GLOBAL long_query_time = 0.1;
```

設定確認

``` sql
SHOW variables LIKE 'long_query_time%';
```

実行に0.1秒以下のクエリ

``` sql
SELECT * FROM employees.departments;
```

``` sql
SELECT * FROM employees.employees WHERE emp_no = 499999;
```

``` sql
SELECT DISTINCT emp_no FROM employees.dept_manager WHERE to_date = '9999-01-01';
```

``` sh
cat /var/lib/mysql/fbb25764d1e7-slow.log
/usr/sbin/mysqld, Version: 8.0.28 (MySQL Community Server - GPL). started with:
Tcp port: 3306  Unix socket: /var/lib/mysql/mysql.sock
Time                 Id Command    Argument
```

実行に0.1秒より長いクエリ

``` sql
SELECT DISTINCT title FROM employees.titles ORDER BY title;
```

``` sql
SELECT emp_no, MIN(salary), MAX(salary), MAX(salary) - MIN(salary) diff
FROM employees.salaries 
GROUP BY emp_no
ORDER BY diff DESC
LIMIT 100;
```

``` sql
SELECT title, COUNT(1)
FROM employees.employees emp
INNER JOIN employees.titles titles
ON emp.emp_no = titles.emp_no 
AND emp.hire_date >= titles.from_date 
AND emp.hire_date <= titles.to_date 
GROUP BY title 
ORDER BY COUNT(1) DESC;
```

logの中身

``` sql
cat /var/lib/mysql/fbb25764d1e7-slow.log
/usr/sbin/mysqld, Version: 8.0.28 (MySQL Community Server - GPL). started with:
Tcp port: 3306  Unix socket: /var/lib/mysql/mysql.sock
Time                 Id Command    Argument
# Time: 2022-04-18T13:13:25.267442Z
# User@Host: root[root] @ localhost []  Id:    61
# Query_time: 0.152239  Lock_time: 0.000037 Rows_sent: 7  Rows_examined: 443315
SET timestamp=1650287605;
SELECT DISTINCT title FROM employees.titles ORDER BY title;
# Time: 2022-04-18T13:13:37.844692Z
# User@Host: root[root] @ localhost []  Id:    61
# Query_time: 0.742932  Lock_time: 0.000026 Rows_sent: 100  Rows_examined: 2844147
SET timestamp=1650287617;
SELECT emp_no, MIN(salary), MAX(salary), MAX(salary) - MIN(salary) diff
FROM employees.salaries
GROUP BY emp_no
ORDER BY diff DESC
LIMIT 100;
# Time: 2022-04-18T13:13:49.013346Z
# User@Host: root[root] @ localhost []  Id:    61
# Query_time: 0.289439  Lock_time: 0.000014 Rows_sent: 7  Rows_examined: 886623
SET timestamp=1650287628;
SELECT title, COUNT(1)
FROM employees.employees emp
INNER JOIN employees.titles titles
ON emp.emp_no = titles.emp_no
AND emp.hire_date >= titles.from_date
AND emp.hire_date <= titles.to_date
GROUP BY title
ORDER BY COUNT(1) DESC;
```
