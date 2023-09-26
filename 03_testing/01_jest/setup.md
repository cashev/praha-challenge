# SetUp

install nvm  
<https://github.com/nvm-sh/nvm>

``` shell
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
```

install node

``` shell
nvm install node
node -v
```

必要なpackageをinstall

``` shell
cd jestSample
npm install
```

エラーが発生する場合は、nodeのversionを下げて再実行

``` shell
nvm install v14.0.0
npm install
```

testを実行

``` shell
npm test
```
