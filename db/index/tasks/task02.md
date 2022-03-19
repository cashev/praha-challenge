# インデックス

## 課題2

### WHERE句が1つのSELECT

``` sql
SELECT * FROM employees WHERE MONTH(birth_date) = 4;
```

``` sql
SELECT * FROM salaries WHERE salary < 39000;
```

``` sql
SELECT * FROM titles WHERE from_date BETWEEN '2000-01-01' AND '2000-12-31';
```

### Performance Schemaの設定

Performance Schemaの確認  

``` sql
SHOW VARIABLES LIKE 'performance_schema';
```

``` sql
SELECT * 
FROM performance_schema.setup_instruments 
WHERE name like '%transaction%';
```

``` sql
UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED = 'YES' WHERE NAME LIKE '%statement/%';
UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED = 'YES' WHERE NAME LIKE '%stage/%';
UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME LIKE '%events_statements_%';
UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME LIKE '%events_stages_%';
```

### 測定

``` sql
SELECT
  EVENT_ID,
  TRUNCATE(TIMER_WAIT/1000000000000,6) AS Duration,
  SQL_TEXT
FROM
  performance_schema.events_statements_history_long
WHERE
  SQL_TEXT = 'SELECT * FROM employees WHERE MONTH(birth_date) = 4'
ORDER BY
  EVENT_ID DESC;
```

``` sql
```

### インデックス作成

``` sh
```

### 参考

Performance Schemaの設定
<https://collapse-natsu.com/post/mysql_query_speed>
<https://thinkit.co.jp/article/10028>
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0130>
<https://dev.mysql.com/doc/refman/5.6/ja/performance-schema.html>
<https://gihyo.jp/dev/serial/01/MySQL-tuning-scale/0004>
