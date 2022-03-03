FROM mariadb:10

RUN apt-get update && \
  apt-get install -y wget unzip && \
  wget https://github.com/datacharmer/test_db/archive/master.zip -O test_db-master.zip && \
  unzip test_db-master.zip
