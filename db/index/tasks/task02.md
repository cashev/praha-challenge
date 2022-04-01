# インデックス

## 課題2

### WHERE句が1つのSELECT

SQL 1

``` sql
SELECT * FROM employees.employees WHERE MONTH(birth_date) = 1;
```

SQL 2

``` sql
SELECT * FROM employees.salaries WHERE salary < 39000;
```

SQL 3

``` sql
SELECT * FROM employees.titles WHERE from_date BETWEEN '2000-01-01' AND '2000-12-31';
```

### Performance Schemaの設定

Performance Schemaが有効か確認  

``` sql
SHOW VARIABLES LIKE 'performance_schema';
```

### 測定

測定 (avg_latencyを確認)

``` sql
SELECT *  
FROM sys.statement_analysis
WHERE  digest = STATEMENT_DIGEST('query')\G
```

``` sql
SELECT *  
FROM sys.statement_analysis
WHERE digest = STATEMENT_DIGEST('SELECT * FROM employees.employees WHERE last_name like \'b%\'')\G
```

サンプル

``` sql
SELECT *  
FROM sys.statement_analysis
WHERE  digest = STATEMENT_DIGEST('SELECT * FROM employees.employees WHERE MONTH(birth_date) = 4')\G
```

インデックスを貼る前の結果 (3回実行した平均)

- SQL 1  
avg_latency: 113.23 ms
- SQL 2  
avg_latency: 361.33 ms
- SQL 3
avg_latency: 189.73 ms

計測記録をリセット

``` sh
CALL sys.ps_truncate_all_tables(0);
```

### インデックス作成

``` sql
CREATE INDEX employees_birth_date ON employees.employees(birth_date);
```

``` sql
CREATE INDEX employees_salary ON employees.salaries(salary);
```

``` sql
CREATE INDEX employees_from_date ON employees.titles(from_date);
```

### 参考

Performance Schemaについて  
<https://collapse-natsu.com/post/mysql_query_speed>  
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0130>  
<https://gihyo.jp/dev/serial/01/MySQL-tuning-scale/0004>  

sysスキーマについて  
<https://thinkit.co.jp/article/10028>
<https://yoku0825.blogspot.com/2015/10/mysqlsys.html>
<https://downloads.mysql.com/presentations/20151208_02_MySQL_Tuning_for_Beginners.pdf>

index
<https://www.dbonline.jp/mysql/index/index1.html>
