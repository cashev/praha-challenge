# インデックス

performance_schemaの情報を見やすくするツールについて記載

## ps-top

### install

#### goをinstall

``` sh
cd ~/work
wget https://dl.google.com/go/go1.17.8.linux-arm64.tar.gz
sudo tar -C /usr/local -xzf go1.17.8.linux-arm64.tar.gz
vim ~/.bashrc
```

PATHを追加  
以下を.bashrcに追記

``` sh
export PATH=$PATH:/usr/local/go/bin
```

PATHを更新

``` sh
source ~/.bashrc
```

#### ps-topをinatall

go getは1.18から使えない  
これからはgo installの時代  

``` sh
mkdir ~/go ; cd ~/go
go get -u github.com/sjmudd/ps-top
```

ps-top用にユーザを作成

``` sql
CREATE USER 'pstop'@'localhost' IDENTIFIED BY 'password';
GRANT SELECT ON *.* TO 'pstop'@'localhost';
```

### start

ps-topを起動する

``` sh
~/go/bin/ps-top --host=localhost --user pstop --password 'password'
```

## 参考

ps-top

<https://blog.vtryo.me/entry/ps-top-use>
<https://pkg.go.dev/github.com/sjmudd/ps-top>
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0086>
