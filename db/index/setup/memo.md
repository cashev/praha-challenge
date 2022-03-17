# 環境構築メモ

## linux VM

Dockerを使わず
multipassでUbuntuのVMを立ち上げmysqlをinstall

### Runbook

Ubuntu VMを立ち上げ

``` sh
multipass launch --disk 10GB --name mysql-employees
multipass shell mysql-employees
```

必要なものをインストール、ダウンロード

``` sh
sudo apt update && sudo apt install -y mysql-server wget unzip && \
mkdir work && cd work && \
wget https://github.com/datacharmer/test_db/archive/master.zip -O test_db-master.zip && \
unzip test_db-master.zip
```

データ流し込み

``` sh
cd test_db-master && \
sudo mysql -t < employees.sql
```

テスト

``` sh
sudo mysql -t < test_employees_md5.sql
```

## Docker

### 環境

``` sh
hostnamectl
>> Virtualization: parallels
>> Operating System: ubuntu 20.04.4 LTS
>> Kernel: Linux 5.4.0-100-generic
>> Architecture: arm64

docker --version
>> Docker version 20.10.12, build e91ed57

docker compose version
>> Docker Compose version v2.2.3
```

### 事象01

<https://hub.docker.com/r/genschsa/mysql-employees>

docker-compose.yamlにplatformを追記しても立ち上がらなかった

``` yaml
version: '3'
services:
  database:
    image: genschsa/mysql-employees
    platform: linux/x86_64
    volumes:
      - ./data:/var/lib/mysql
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=college
```

error message

``` sh
standard_init_linux.go:228: exec user process caused: exec format error
```

### 事象02

[GithubのREADME.md](https://github.com/datacharmer/test_db)を参考にmariadbのコンテナにデータを流し込むまではできたが  
テストがこけたまま解決できなかったため断念。。。

#### 詳細メモ

以下テストでdepartments, dept_empのcrcが一致しない

``` sh
mysql -t < test_employees_md5.sql
```

[employees.sql](https://github.com/datacharmer/test_db/blob/master/employees.sql)の

``` sql
/*!50503 set default_storage_engine = InnoDB */;
/*!50503 select CONCAT('storage engine: ', @@default_storage_engine) as INFO */;
```

を以下に変更することでdepartmentsが一致した。  
dept_empは解決できず。。。

``` sql
set default_storage_engine = Maria;
select CONCAT('storage engine: ', @@default_storage_engine) as INFO;
```

## 参考

<https://dev.mysql.com/doc/employee/en/employees-installation.html>

<https://qiita.com/notakaos/items/928987623fc61e815363>

<https://phoenixnap.com/kb/install-mysql-ubuntu-20-04>

<https://qiita.com/houtarou/items/a44ce783d09201fc28f5>
