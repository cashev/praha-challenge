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

### Dockerfileを作成するメリット

- 依存関係の明確化  
  依存するライブラリや設定をDockerfileに記述することで、アプリケーションの依存関係を明確化できる。
- 環境の再現性と一貫性の向上  
  Dockerfileによって同じ環境を簡単に容易に再現できる。  
  チーム内で同一の開発環境を共有できる。
- バージョン管理と変更履歴の追跡が可能
  環境をコード化しバージョン管理することで、変更履歴を追跡できる。  
- 自動化による効率化  
  環境構築の手順が自動化されるため、手作業による時間を削減できる。  
- スケーラビリティの向上  
  同じ環境を簡単に複製できるため、システムのスケールアウトが容易になる。  
  ECSなどのコンテナオーケストレーションツールと組み合わせることで、自動スケーリングが可能になる。  

### docker-composeの役立つ場面

- 複数のコンテナを使用する環境の構築
  - 開発環境の構築  
    アプリケーションとデータベース、キャッシュサーバーなど複数のコンテナを組み合わせた開発環境を構築できる。  
  - テスト環境の構築  
    テスト用のコンテナを組み合わせた環境を構築し、テストを自動化することができる。  
  - シングルホスト上で複数のコンテナを管理する場合  
    1つのホスト上でアプリケーションやデータベースを構築する場合、  
    docker-composeを使用することで複数のコンテナを管理しやすくなる。

- 参考  
  - [Why use Compose?](https://docs.docker.com/compose/intro/features-uses/)
  - [What is Docker Compose](https://phoenixnap.com/kb/docker-compose)

### .dockerignoreに含めるファイル

Dockerイメージのビルド時に除外したいファイルやディレクトリ  
不要なファイルやディレクトリを除外することで、ビルド時間の短縮しイメージサイズの削減することができる。

- ログファイル
- 一時ファイル
- テストデータ
- ドキュメント
- .git
- Dockerfile
- docker-compose.yml
- エディタの設定ファイル
  - .vscode
  - .idea

- 参考
  - [How to Use a .dockerignore File: A Comprehensive Guide with Examples](https://hn.mrugesh.dev/how-to-use-a-dockerignore-file-a-comprehensive-guide-with-examples)
  - [How to Use a .dockerignore File?](https://www.geeksforgeeks.org/how-to-use-a-dockerignore-file/)

### パッケージについて

分割して記述した場合、別々のレイヤーとしてキャッシュされる。  
そのため`apt-get install [something]`を編集しても、`apt-get update`は前のステップで作成したキャッシュを再利用するため、  
古いバージョンのパッケージがインストールされる可能性がある。  

- 参考
  - [Building best practices #apt-get](https://docs.docker.com/build/building/best-practices/#apt-get)

### ENVについて

- ENV NAME='hoge'  
  イメージ,コンテナ内で永続的に環境変数として利用できる。  
  マルチストレージビルドでも引き継がれる。  
- RUN export NAME='hoge'  
  そのRUNコマンド内でのみ有効な環境変数として利用できる。

- 参考
  - [docker ENV vs RUN export](https://stackoverflow.com/questions/33379393/docker-env-vs-run-export)
