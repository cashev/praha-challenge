# スロークエリ

mysql-serverのdockerではmysqldumpslowがcommand not foundとなるため、  
vmにmysql-serverをinstallする

## Runbook

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
