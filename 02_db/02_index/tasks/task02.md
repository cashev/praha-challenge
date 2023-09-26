# インデックス

## 課題2

対象SQL

``` sql
SELECT * FROM employees.employees WHERE last_name like 'b%';
```

### 測定

sysスキーマから実行時間を確認

``` sql
SELECT * 
FROM sys.statement_analysis
WHERE digest = 
  STATEMENT_DIGEST('SELECT * FROM employees.employees WHERE last_name like \'b%\'')\G
```

<details>
<summary>実行結果</summary>

``` sql
*************************** 1. row ***************************
            query: SELECT * FROM `employees` . `employees` WHERE `last_name` LIKE ?
               db: NULL
        full_scan: *
       exec_count: 6
        err_count: 0
       warn_count: 0
    total_latency: 363.79 ms
      max_latency: 91.30 ms
      avg_latency: 60.63 ms
     lock_latency: 43.00 us
      cpu_latency:   0 ps
        rows_sent: 172764
    rows_sent_avg: 28794
    rows_examined: 1800144
rows_examined_avg: 300024
    rows_affected: 0
rows_affected_avg: 0
       tmp_tables: 0
  tmp_disk_tables: 0
      rows_sorted: 0
sort_merge_passes: 0
           digest: 61940ac8a11fb4319489d64023a5c511cf490a2e604fd789de84f8fd0ad2be67
       first_seen: 2022-04-03 13:21:20.983827
        last_seen: 2022-04-03 13:21:29.671915
1 row in set (0.02 sec)
```

</details>

indexが使われて**いない**ことを確認

``` sql
EXPLAIN SELECT * FROM employees.employees WHERE last_name like 'b%';
```

<details>
<summary>実行結果</summary>

``` sql
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
| id | select_type | table     | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra       |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
|  1 | SIMPLE      | employees | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 299778 |    11.11 | Using where |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
1 row in set, 1 warning (0.00 sec)
```
</details>

### indexを作成

``` sql
CREATE INDEX employees_last_name ON employees.employees(last_name);
```

<details>
<summary>実行結果</summary>

``` sql
Query OK, 0 rows affected (0.59 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

</details>

対象SQLを再度実行して再計測

<details>
<summary>測定結果</summary>

``` sql
*************************** 1. row ***************************
            query: SELECT * FROM `employees` . `employees` WHERE `last_name` LIKE ?
               db: NULL
        full_scan: *
       exec_count: 12
        err_count: 0
       warn_count: 0
    total_latency: 591.84 ms
      max_latency: 91.30 ms
      avg_latency: 49.32 ms
     lock_latency: 78.00 us
      cpu_latency:   0 ps
        rows_sent: 345528
    rows_sent_avg: 28794
    rows_examined: 1972908
rows_examined_avg: 164409
    rows_affected: 0
rows_affected_avg: 0
       tmp_tables: 0
  tmp_disk_tables: 0
      rows_sorted: 0
sort_merge_passes: 0
           digest: 61940ac8a11fb4319489d64023a5c511cf490a2e604fd789de84f8fd0ad2be67
       first_seen: 2022-04-03 13:21:20.983827
        last_seen: 2022-04-03 13:30:04.530735
1 row in set (0.01 sec)
```

</details>

indexが使われていることを確認

``` sql
EXPLAIN SELECT * FROM employees.employees WHERE last_name like 'b%';
```

<details>
<summary>実行結果</summary>

``` sql
+----+-------------+-----------+------------+-------+---------------------+---------------------+---------+------+-------+----------+-----------------------+
| id | select_type | table     | partitions | type  | possible_keys       | key                 | key_len | ref  | rows  | filtered | Extra                 |
+----+-------------+-----------+------------+-------+---------------------+---------------------+---------+------+-------+----------+-----------------------+
|  1 | SIMPLE      | employees | NULL       | range | employees_last_name | employees_last_name | 66      | NULL | 59922 |   100.00 | Using index condition |
+----+-------------+-----------+------------+-------+---------------------+---------------------+---------+------+-------+----------+-----------------------+
1 row in set, 1 warning (0.00 sec)
```

</details>

### docker containerを再構築

``` sh
sudo docker container stop mysql-employees && \
sudo docker container prune && \
sudo rm -rf data && \
sudo docker run -d \
  --name mysql-employees \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=password \
  -v $PWD/data:/var/lib/mysql \
  -v $PWD/test_db-master:/test_db-master \
  -v $PWD/init:/docker-entrypoint-initdb.d \
  mysql/mysql-server:latest && \
sudo docker container exec -it mysql-employees bash
```

indexがないことの確認

``` sql
SHOW index FROM employees.employees;
```

<details>
<summary>実行結果</summary>

``` sql
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| Table     | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| employees |          0 | PRIMARY  |            1 | emp_no      | A         |      299645 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
1 row in set (0.01 sec)
```

</details>

### 実行時間が短縮される理由

実行結果がバッファプールに保存されていくため

再度containerを立ち上げ直し、以下を実行

``` sql
SELECT * FROM information_schema.INNODB_BUFFER_POOL_STATS\G
```

<details>
<summary>実行結果</summary>

``` sql
*************************** 1. row ***************************
                         POOL_ID: 0
                       POOL_SIZE: 8192
                    FREE_BUFFERS: 6011
                  DATABASE_PAGES: 2177
              OLD_DATABASE_PAGES: 823
         MODIFIED_DATABASE_PAGES: 0
              PENDING_DECOMPRESS: 0
                   PENDING_READS: 0
               PENDING_FLUSH_LRU: 0
              PENDING_FLUSH_LIST: 0
                PAGES_MADE_YOUNG: 0
            PAGES_NOT_MADE_YOUNG: 0
           PAGES_MADE_YOUNG_RATE: 0
       PAGES_MADE_NOT_YOUNG_RATE: 0
               NUMBER_PAGES_READ: 2033
            NUMBER_PAGES_CREATED: 144
            NUMBER_PAGES_WRITTEN: 161
                 PAGES_READ_RATE: 0
               PAGES_CREATE_RATE: 0
              PAGES_WRITTEN_RATE: 0
                NUMBER_PAGES_GET: 15233
                        HIT_RATE: 0
    YOUNG_MAKE_PER_THOUSAND_GETS: 0
NOT_YOUNG_MAKE_PER_THOUSAND_GETS: 0
         NUMBER_PAGES_READ_AHEAD: 0
       NUMBER_READ_AHEAD_EVICTED: 0
                 READ_AHEAD_RATE: 0
         READ_AHEAD_EVICTED_RATE: 0
                    LRU_IO_TOTAL: 0
                  LRU_IO_CURRENT: 0
                UNCOMPRESS_TOTAL: 0
              UNCOMPRESS_CURRENT: 0
1 row in set (4.30 sec)
```

</details>

対象クエリを5回実行後、再度集計  
FREE_BUFFERSが減っている -> casheされている

<details>
<summary>再実行結果</summary>

``` sql
*************************** 1. row ***************************
                         POOL_ID: 0
                       POOL_SIZE: 8192
                    FREE_BUFFERS: 5080
                  DATABASE_PAGES: 3108
              OLD_DATABASE_PAGES: 1167
         MODIFIED_DATABASE_PAGES: 0
              PENDING_DECOMPRESS: 0
                   PENDING_READS: 0
               PENDING_FLUSH_LRU: 0
              PENDING_FLUSH_LIST: 0
                PAGES_MADE_YOUNG: 0
            PAGES_NOT_MADE_YOUNG: 0
           PAGES_MADE_YOUNG_RATE: 0
       PAGES_MADE_NOT_YOUNG_RATE: 0
               NUMBER_PAGES_READ: 2964
            NUMBER_PAGES_CREATED: 144
            NUMBER_PAGES_WRITTEN: 172
                 PAGES_READ_RATE: 18.045240963310214
               PAGES_CREATE_RATE: 0
              PAGES_WRITTEN_RATE: 0.21320907690269855
                NUMBER_PAGES_GET: 36339
                        HIT_RATE: 956
    YOUNG_MAKE_PER_THOUSAND_GETS: 0
NOT_YOUNG_MAKE_PER_THOUSAND_GETS: 0
         NUMBER_PAGES_READ_AHEAD: 832
       NUMBER_READ_AHEAD_EVICTED: 0
                 READ_AHEAD_RATE: 16.126359271185926
         READ_AHEAD_EVICTED_RATE: 0
                    LRU_IO_TOTAL: 0
                  LRU_IO_CURRENT: 0
                UNCOMPRESS_TOTAL: 0
              UNCOMPRESS_CURRENT: 0
1 row in set (0.00 sec)
```

</details>

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

EXPLAIN  
<http://nippondanji.blogspot.com/2009/03/mysqlexplain.html>

Buffer Pool  
<https://atsuizo.hatenadiary.jp/entry/2016/12/06/190624>
