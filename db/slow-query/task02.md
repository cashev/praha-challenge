# スロークエリ

## 課題02

### mysqldumpslow

``` sh
mysqldumpslow /var/lib/mysql/mysql-employees-slow.log
```

結果

``` sql
Reading mysql slow query log from /var/lib/mysql/mysql-employees-slow.log
Count: 1  Time=0.57s (0s)  Lock=0.00s (0s)  Rows=100.0 (100), root[root]@localhost
  SELECT emp_no, MIN(salary), MAX(salary), MAX(salary) - MIN(salary) diff
  FROM employees.salaries
  GROUP BY emp_no
  ORDER BY diff DESC
  LIMIT N

Count: 1  Time=0.44s (0s)  Lock=0.00s (0s)  Rows=7.0 (7), root[root]@localhost
  SELECT title, COUNT(N)
  FROM employees.employees emp
  INNER JOIN employees.titles titles
  ON emp.emp_no = titles.emp_no
  AND emp.hire_date >= titles.from_date
  AND emp.hire_date <= titles.to_date
  GROUP BY title
  ORDER BY COUNT(N) DESC

Count: 1  Time=0.17s (0s)  Lock=0.00s (0s)  Rows=7.0 (7), root[root]@localhost
  SELECT DISTINCT title FROM employees.titles ORDER BY title
```

最も頻度高い

-s c

``` sh
mysqldumpslow -s c /var/lib/mysql/mysql-employees-slow.log
```

実行時間が最も長い

-s t

``` sh
mysqldumpslow -s t /var/lib/mysql/mysql-employees-slow.log
```

ロック時間が最も長い

-s l

``` sh
mysqldumpslow -s l /var/lib/mysql/mysql-employees-slow.log
```

### pt-query-digest

install

``` sh
sudo apt update && \
sudo apt install percona-toolkit
```

実行

``` sh
pt-query-digest /var/lib/mysql/mysql-employees-slow.log
```

<details>
<summary>実行結果</summary>

``` sql
# 80ms user time, 20ms system time, 36.00M rss, 44.88M vsz
# Current date: Tue Apr 19 07:43:33 2022
# Hostname: mysql-employees
# Files: /var/lib/mysql/mysql-employees-slow.log
# Overall: 3 total, 3 unique, 0.18 QPS, 0.07x concurrency ________________
# Time range: 2022-04-18T22:13:38 to 2022-04-18T22:13:55
# Attribute          total     min     max     avg     95%  stddev  median
# ============     ======= ======= ======= ======= ======= ======= =======
# Exec time             1s   166ms   573ms   394ms   552ms   163ms   433ms
# Lock time           42us    10us    19us    14us    18us     3us    12us
# Rows sent            114       7     100      38   97.36   42.60    6.98
# Rows examine       3.84M 432.92k   2.71M   1.28M   2.62M 1001.93k 717.31k
# Query size           431      58     232  143.67  223.14   67.87  136.99

# Profile
# Rank Query ID                           Response time Calls R/Call V/M
# ==== ================================== ============= ===== ====== =====
#    1 0x1736BD748BBBA6194F2001D8B39D338E  0.5729 48.5%     1 0.5729  0.00 SELECT employees.salaries
#    2 0x958B92370A74E0CC458EC8AADE836691  0.4430 37.5%     1 0.4430  0.00 SELECT employees.employees employees.titles
#    3 0x80CC0E2C9662036061AADC0C747BB8B0  0.1657 14.0%     1 0.1657  0.00 SELECT employees.titles

# Query 1: 0 QPS, 0x concurrency, ID 0x1736BD748BBBA6194F2001D8B39D338E at byte 431
# This item is included in the report because it matches --limit.
# Scores: V/M = 0.00
# Time range: all events occurred at 2022-04-18T22:13:46
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count         33       1
# Exec time     48   573ms   573ms   573ms   573ms   573ms       0   573ms
# Lock time     23    10us    10us    10us    10us    10us       0    10us
# Rows sent     87     100     100     100     100     100       0     100
# Rows examine  70   2.71M   2.71M   2.71M   2.71M   2.71M       0   2.71M
# Query size    32     141     141     141     141     141       0     141
# String:
# Hosts        localhost
# Users        root
# Query_time distribution
#   1us
#  10us
# 100us
#   1ms
#  10ms
# 100ms  ################################################################
#    1s
#  10s+
# Tables
#    SHOW TABLE STATUS FROM `employees` LIKE 'salaries'\G
#    SHOW CREATE TABLE `employees`.`salaries`\G
# EXPLAIN /*!50100 PARTITIONS*/
SELECT emp_no, MIN(salary), MAX(salary), MAX(salary) - MIN(salary) diff
FROM employees.salaries
GROUP BY emp_no
ORDER BY diff DESC
LIMIT 100\G

# Query 2: 0 QPS, 0x concurrency, ID 0x958B92370A74E0CC458EC8AADE836691 at byte 769
# This item is included in the report because it matches --limit.
# Scores: V/M = 0.00
# Time range: all events occurred at 2022-04-18T22:13:55
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count         33       1
# Exec time     37   443ms   443ms   443ms   443ms   443ms       0   443ms
# Lock time     45    19us    19us    19us    19us    19us       0    19us
# Rows sent      6       7       7       7       7       7       0       7
# Rows examine  18 725.92k 725.92k 725.92k 725.92k 725.92k       0 725.92k
# Query size    53     232     232     232     232     232       0     232
# String:
# Hosts        localhost
# Users        root
# Query_time distribution
#   1us
#  10us
# 100us
#   1ms
#  10ms
# 100ms  ################################################################
#    1s
#  10s+
# Tables
#    SHOW TABLE STATUS FROM `employees` LIKE 'employees'\G
#    SHOW CREATE TABLE `employees`.`employees`\G
#    SHOW TABLE STATUS FROM `employees` LIKE 'titles'\G
#    SHOW CREATE TABLE `employees`.`titles`\G
# EXPLAIN /*!50100 PARTITIONS*/
SELECT title, COUNT(1)
FROM employees.employees emp
INNER JOIN employees.titles titles
ON emp.emp_no = titles.emp_no
AND emp.hire_date >= titles.from_date
AND emp.hire_date <= titles.to_date
GROUP BY title
ORDER BY COUNT(1) DESC\G

# Query 3: 0 QPS, 0x concurrency, ID 0x80CC0E2C9662036061AADC0C747BB8B0 at byte 0
# This item is included in the report because it matches --limit.
# Scores: V/M = 0.00
# Time range: all events occurred at 2022-04-18T22:13:38
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count         33       1
# Exec time     14   166ms   166ms   166ms   166ms   166ms       0   166ms
# Lock time     30    13us    13us    13us    13us    13us       0    13us
# Rows sent      6       7       7       7       7       7       0       7
# Rows examine  10 432.92k 432.92k 432.92k 432.92k 432.92k       0 432.92k
# Query size    13      58      58      58      58      58       0      58
# String:
# Hosts        localhost
# Users        root
# Query_time distribution
#   1us
#  10us
# 100us
#   1ms
#  10ms
# 100ms  ################################################################
#    1s
#  10s+
# Tables
#    SHOW TABLE STATUS FROM `employees` LIKE 'titles'\G
#    SHOW CREATE TABLE `employees`.`titles`\G
# EXPLAIN /*!50100 PARTITIONS*/
SELECT DISTINCT title FROM employees.titles ORDER BY title\G
```

</details>

### 参考

mysqldumpslow  
<https://dev.mysql.com/doc/refman/8.0/en/mysqldumpslow.html>  
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0131>  

pt-query-digest  
<https://thinkit.co.jp/article/9617>  
<https://www.percona.com/doc/percona-server/LATEST/installation/apt_repo.html>  
