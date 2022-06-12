# トランザクション

## 課題02

分離レベルの確認  

``` sql
SELECT @@GLOBAL.transaction_isolation, @@transaction_isolation;
```

### 再現クエリ

#### Dirty Read

分離レベルを設定

``` sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
```

TransactionA

``` sql
BEGIN;
SELECT * FROM employees.employees WHERE emp_no = 100000;
```

TransactionB

``` sql
BEGIN;
UPDATE employees.employees SET gender = 'F' WHERE emp_no = 100000;
```

TransactionA

``` sql
SELECT * FROM employees.employees WHERE emp_no = 100000;
```

#### Non-repeatable Read

分離レベルを設定

``` sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

TransactionA

``` sql
BEGIN;
SELECT * FROM employees.employees WHERE emp_no = 100000;
```

TransactionB

``` sql
BEGIN;
UPDATE employees.employees SET gender = 'F' WHERE emp_no = 100000;
COMMIT;
```

TransactionA

``` sql
SELECT * FROM employees.employees WHERE emp_no = 100000;
```

#### Phantom Read

分離レベルを設定

``` sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

TransactionA

``` sql
BEGIN;
SELECT COUNT(1) FROM employees.employees;
```

TransactionB

``` sql
BEGIN;
INSERT INTO employees.employees (emp_no, birth_date, first_name, last_name, gender, hire_date) VALUE(500000, '2000-01-01', 'Taro', 'Tanaka', 'M', '2020-04-01');
COMMIT;
```

TransactionA

``` sql
SELECT COUNT(1) FROM employees.employees;
```

### 映画のチケット販売システム

#### 楽観　or 悲観

楽観ロックを使う  
よほど運が悪くない限り多重予約が発生することがないため  

#### 楽観ロックを用いた排他制御の流れ

``` ts
seat = getEmptyMovieSeat(movieId) // DBからチケット情報を取得

if seat.isPurchased
  -> throw('その席は既に購入されていますよ!')

// (まだ席が購入されていない場合の処理に進む)
seat.isPurchased = true
if save seat
  -> throw('その席は既に購入されていますよ!')

// 外部APIを用いて決裁を行う
if make payment
  -> throw('決済に失敗しました')
  seat.isPurchased = false
  save seat
```

### 参考

<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0047>  
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0050>  
[Booking System with Pessimistic Locks](https://medium.com/javarevisited/booking-system-with-pessimistic-locks-4ec107e4bd5)
