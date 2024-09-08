# 負荷テスト

## タスク数: 1

```sh
ab -k -n 10000 -c 100 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      100
Time taken for tests:   5.833 seconds
Complete requests:      10000
Failed requests:        0
Keep-Alive requests:    10000
Total transferred:      8530000 bytes
HTML transferred:       6150000 bytes
Requests per second:    1714.24 [#/sec] (mean)
Time per request:       58.335 [ms] (mean)
Time per request:       0.583 [ms] (mean, across all concurrent requests)
Transfer rate:          1427.98 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1  10.4      0     171
Processing:     6   57  79.1     10     377
Waiting:        6   57  79.1     10     377
Total:          6   58  82.4     10     515

Percentage of the requests served within a certain time (ms)
  50%     10
  66%     16
  75%    160
  80%    167
  90%    186
  95%    195
  98%    220
  99%    298
 100%    515 (longest request)
```

```sh
ab -k -n 100000 -c 1000 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      1000
Time taken for tests:   64.922 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      85300000 bytes
HTML transferred:       61500000 bytes
Requests per second:    1540.31 [#/sec] (mean)
Time per request:       649.218 [ms] (mean)
Time per request:       0.649 [ms] (mean, across all concurrent requests)
Transfer rate:          1283.09 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   20 309.7      0    7628
Processing:    11  628 937.5    101   14743
Waiting:       11  628 936.1    101   14743
Total:         11  648 1070.6    101   17226

Percentage of the requests served within a certain time (ms)
  50%    101
  66%    135
  75%   1450
  80%   1924
  90%   2082
  95%   2119
  98%   2333
  99%   3316
 100%  17226 (longest request)
```

```sh
ab -k -n 1000000 -c 1000 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      1000
Time taken for tests:   148.379 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      853000000 bytes
HTML transferred:       615000000 bytes
Requests per second:    6739.51 [#/sec] (mean)
Time per request:       148.379 [ms] (mean)
Time per request:       0.148 [ms] (mean, across all concurrent requests)
Transfer rate:          5614.06 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1  45.5      0    5518
Processing:    15  147 355.1     91   10354
Waiting:       11  147 355.1     91   10354
Total:         15  148 376.6     91   11473

Percentage of the requests served within a certain time (ms)
  50%     91
  66%    100
  75%    106
  80%    111
  90%    126
  95%    149
  98%   1972
  99%   2059
 100%  11473 (longest request)
```

## タスク数: 4

```sh
ab -k -n 10000 -c 100 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      100
Time taken for tests:   4.277 seconds
Complete requests:      10000
Failed requests:        0
Keep-Alive requests:    10000
Total transferred:      8530000 bytes
HTML transferred:       6150000 bytes
Requests per second:    2338.35 [#/sec] (mean)
Time per request:       42.765 [ms] (mean)
Time per request:       0.428 [ms] (mean, across all concurrent requests)
Transfer rate:          1947.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1  31.5      0    1168
Processing:     4   41  57.9      7     291
Waiting:        4   41  57.8      7     291
Total:          4   43  68.8      7    1302

Percentage of the requests served within a certain time (ms)
  50%      7
  66%     11
  75%     98
  80%    120
  90%    130
  95%    135
  98%    200
  99%    238
 100%   1302 (longest request)
```

```sh
ab -k -n 100000 -c 1000 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      1000
Time taken for tests:   63.940 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      85300000 bytes
HTML transferred:       61500000 bytes
Requests per second:    1563.96 [#/sec] (mean)
Time per request:       639.403 [ms] (mean)
Time per request:       0.639 [ms] (mean, across all concurrent requests)
Transfer rate:          1302.79 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   17 222.7      0    7364
Processing:    17  623 1045.0     54   16601
Waiting:       13  621 1038.3     54   16601
Total:         17  639 1140.6     54   19214

Percentage of the requests served within a certain time (ms)
  50%     54
  66%     67
  75%   1390
  80%   1969
  90%   2143
  95%   2300
  98%   2458
  99%   3340
 100%  19214 (longest request)
```

```sh
ab -k -n 1000000 -c 1000 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

```sh
Concurrency Level:      1000
Time taken for tests:   113.077 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      853000000 bytes
HTML transferred:       615000000 bytes
Requests per second:    8843.54 [#/sec] (mean)
Time per request:       113.077 [ms] (mean)
Time per request:       0.113 [ms] (mean, across all concurrent requests)
Transfer rate:          7366.74 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1  59.6      0    7721
Processing:     6  112 404.6     52   14203
Waiting:        6  112 404.1     52   14203
Total:          6  113 421.0     52   14860

Percentage of the requests served within a certain time (ms)
  50%     52
  66%     55
  75%     58
  80%     59
  90%     64
  95%     74
  98%   2044
  99%   2151
 100%  14860 (longest request)
```
