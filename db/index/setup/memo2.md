# SetUp

## 手順

multipassでVMを立ち上げ

``` sh
multipass launch --cpus 2 --mem 4G --disk 20GB --name praha-docker
multipass shell praha-docker
```

``` sh
mkdir work && cd work
vim ~/work/setup.sh
bash ./setup.sh
```

dockerの起動を確認

``` sh
sudo docker container list
```

dockerに接続

``` sh
sudo docker container exec -it mysql-employees bash
```

データを検証

``` sh
mysql -uroot -ppassword -t < test_db-master/test_employees_md5.sql
```

遊び終わったらstopしよう

``` sh
sudo docker container stop mysql-employees
```

次回からはstartでおk

``` sh
sudo docker container start mysql-employees
```

## 参考

mysqlのdocker
<https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0167>
<https://hub.docker.com/r/mysql/mysql-server>
<https://hub.docker.com/r/genschsa/mysql-employees>

multipass
<https://zenn.dev/ww24/articles/7e576d6f01a366>
<https://gist.github.com/ww24/7c6c722bbd842657b9cebfe600972904>

dockerのinstall
<https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository>

docker composeのinstall
<https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04>
<https://github.com/docker/compose>
