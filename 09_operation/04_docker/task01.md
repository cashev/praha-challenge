# 課題01

## 質問

### Dockerとは

ソフトウェアをコンテナという形でパッケージ化、配布、実行するためのプラットフォーム。  
アプリケーションとその依存関係を「コンテナ」と呼ばれる単位にパッケージ化し、どの環境でも一貫して動作させることができる。  

### 用語

#### イメージ

コンテナを作成するためのテンプレート。  
アプリケーションのコード、ライブラリ、設定ファイルなどが含まれる。

- 参考
  - [What is an image?](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-an-image/)

#### コンテナ

アプリケーションとその依存関係を含む軽量な仮想環境。  
コンテナはホストOSのカーネルを共有し、独立したプロセスとして動作するため、  
仮想マシンよりも軽量で高速に起動できる。

- 参考
  - [What is a container?](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-a-container/)

#### ベースイメージ

Dockerコンテナを作成する際の出発点となるイメージ。  
アプリケーションの実行に必要な基本的な環境を提供する。  
ベースイメージに追加のソフトウェアや設定を重ねていくことで、最終的なコンテナイメージを構築する。  

#### Dockerレジストリ

Dockerイメージを保存・配信するためのシステム。  
ユーザーは`docker push`コマンドでイメージをレジストリにアップロードし、  
`docker pull`コマンドでイメージをダウンロードする。  
Docker Hubは公開されているレジストリの一つで、誰でもイメージを公開・共有できる。  

- 参考
  - [What is a registry?](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-a-registry/)

#### ビルドコンテキスト

Dockerイメージをビルドする際に使用されるファイルやディレクトリの集合。  
ビルドコンテキストは`docker build`コマンドによって、  
Dockerデーモンに送信され、イメージのビルドに使用される。  

- 参考
  - [Build context](https://docs.docker.com/build/building/context/)

#### マルチストレージビルド

Dockerfile内で複数の`FROM`ステートメントを使用して、異なるビルドステージを定義し、  
最終的に必要な成果物だけを含む軽量なイメージを作成する手法。  
各ステージの成果物は次のステージに引き継ぐことができ、最終的に必要なファイルだけを含むイメージを作成できる。  

- 参考
  - [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)

### Dockerfileのメリット

### docker-composeの役立つ場面

### .dockerignoreに含めるファイル

### パッケージについて

### ENVについて
