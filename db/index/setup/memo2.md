# SetUp

multipassでVMを立ち上げ

``` sh
multipass launch --cpus 2 --mem 4G --disk 20GB --name praha-docker
multipass shell praha-docker
```

dockerをinstall

``` sh
sudo apt update
sudo apt install \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
sudo echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable test" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

docker composeをinstall

``` sh
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-aarch64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
sudo chown $USER /var/run/docker.sock
```

employeesデータをダウンロード

``` sh
sudo apt update && sudo apt install -y wget unzip
mkdir work && cd work
wget https://github.com/datacharmer/test_db/archive/master.zip -O test_db-master.zip
unzip test_db-master.zip
```

dockerを起動

``` sh
docker compose up
docker container exec -it name bash
```

データを検証

``` sh
mysql -uroot -ppassword -t < test_employees_md5.sql
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
