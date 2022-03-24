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

# install docker compose
sudo mkdir -p ~/.docker/cli-plugins/
sudo curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-aarch64 -o ~/.docker/cli-plugins/docker-compose
sudo chmod +x ~/.docker/cli-plugins/docker-compose
sudo chown $USER /var/run/docker.sock

# download Employees Data
sudo apt update && sudo apt install -y wget unzip
mkdir ~/work && cd work
sudo wget https://github.com/datacharmer/test_db/archive/master.zip -O test_db-master.zip
sudo unzip test_db-master.zip
