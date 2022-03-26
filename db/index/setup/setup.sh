#!/bin/sh

# set up shell script
# ubuntu on multipss

# install docker
sudo apt update && sudo apt install \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
sudo echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable test" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io

# download Employees Data
sudo apt update && sudo apt install -y wget unzip
mkdir ~/work && cd ~/work
sudo wget https://github.com/datacharmer/test_db/archive/master.zip -O test_db-master.zip
sudo unzip test_db-master.zip

# create docker-entrypoint-initdb.sh
mkdir ~/work/init
touch ~/work/init/docker-entrypoint-initdb.sh
echo "cd test_db-master" >> ~/work/init/docker-entrypoint-initdb.sh
echo "mysql -uroot -ppassword -t < /test_db-master/employees.sql" >> ~/work/init/docker-entrypoint-initdb.sh

# docker run
cd ~/work
sudo docker run -d \
  --name mysql-employees \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=password \
  -v $PWD/data:/var/lib/mysql \
  -v $PWD/test_db-master:/test_db-master \
  -v $PWD/init:/docker-entrypoint-initdb.d \
  mysql/mysql-server:latest
