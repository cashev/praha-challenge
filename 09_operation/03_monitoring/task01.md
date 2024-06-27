# 課題01

## 質問

### ツール

#### WEBアプリケーションのクラッシュ

- Sentry  
[Metric Alert Configuration](https://docs.sentry.io/product/alerts/create-alerts/metric-alert-config/)  
[Slack](https://docs.sentry.io/organization/integrations/notification-incidents/slack/)

- Bugsnag  
[New Alerting and Workflow Engine helps prioritize errors and minimize noise](https://www.bugsnag.com/blog/new-bugsnag-error-alerting-and-workflow-engine/)  
[Slack](https://docs.bugsnag.com/product/integrations/team-notifications/slack/)

- Raygun  
[Alerting](https://raygun.com/documentation/product-guides/alerting-notifications/alerts/)  
[Slack (Plan-level)](https://raygun.com/documentation/product-guides/integrations/slack-plan-integration/)

- 参考
  - [6 Best Error Monitoring Software Tools To Analyze App Crashes](https://uxcam.com/blog/best-error-monitoring-software-tools/)
  - [監視・オブザーバビリティのツール - 製品一覧から機能の違いや活用事例を紹介](https://findy-tools.io/categories/monitoring-observability/4)

#### フロントエンドで何らかのエラーが発生

- Datadog  
  - [セッション リプレイ](https://www.datadoghq.com/ja/product/real-user-monitoring/session-replay/)

- new relic  
  - [Session Replay](https://newrelic.com/jp/platform/session-replay)

- Sentry  
  - [Session Replay](https://docs.sentry.io/product/explore/session-replay/)  
  - [Sentry Replayでアラート対応をお手軽に](https://tech.smarthr.jp/entry/2024/02/20/181429)

- 参考
  - [20 Best Session Replay Software To Capture User Interactions In 2024](https://theproductmanager.com/tools/best-session-replay-software/)

#### バックエンドのアプリケーションがクラッシュ

Webhookからアプリケーションを再起動するスクリプトを実行する、といった構成とする。

- Supervisord
  - [Configuration File](http://supervisord.org/configuration.html)  
    autorestart
  - [Event Type: PROCESS_STATE_EXITED](http://supervisord.org/events.html#process-state-exited-event-type)  
    プロセスが停止したタイミングでSlackのWebhookを呼ぶスクリプトを実行する など

- Datadog  
  - [OOM Killer](https://docs.datadoghq.com/ja/integrations/oom_kill/)  
  - [Workflow Automation を始める](https://docs.datadoghq.com/ja/getting_started/workflow_automation/)  

- AppDynamics  
  - [Health Rules](https://docs.appdynamics.com/appd/24.x/24.6/en/cisco-appdynamics-essentials/alert-and-respond/health-rules)
  - [Actions](https://docs.appdynamics.com/appd/24.x/24.6/en/cisco-appdynamics-essentials/alert-and-respond/actions)

- 参考
  - [Top 20 Web Application Monitoring Tools in 2024](https://statusgator.com/blog/top-20-web-application-monitoring-tools/)

#### レスポンスタイムが5秒以上かかっているエンドポイント

- Datadog
  - [Metrics > Distributions](https://docs.datadoghq.com/metrics/distributions/#enabling-advanced-query-functionality)
  - [Manage API performance, security, and ownership with Datadog API Catalog](https://www.datadoghq.com/blog/monitor-apis-datadog-api-catalog/#alert-on-api-endpoints-that-deviate-from-expected-performance)
 
- AppDynamics
  - [Monitor Service Endpoints](https://docs.appdynamics.com/appd/24.x/24.6/en/application-monitoring/service-endpoints#id-.ServiceEndpointsv24.3-MonitorServiceEndpoints)  
  - [Health Rule Entities](https://docs.appdynamics.com/appd/24.x/24.6/en/cisco-appdynamics-essentials/alert-and-respond/health-rules/health-rule-entities)
  - [Health Rule Conditions](https://docs.appdynamics.com/appd/24.x/24.6/en/cisco-appdynamics-essentials/alert-and-respond/health-rules/health-rule-conditions)

#### データベースのスロークエリを可視化

- CloudWatch  
  - [CloudWatch アラームとダッシュボード](https://docs.aws.amazon.com/ja_jp/prescriptive-guidance/latest/amazon-rds-monitoring-alerting/cloudwatch-dashboards.html)
  - [Monitor Amazon Aurora MySQL, Amazon RDS for MySQL and MariaDB logs with Amazon CloudWatch](https://aws.amazon.com/blogs/database/monitor-amazon-rds-for-mysql-and-mariadb-logs-with-amazon-cloudwatch/)

- Datadog  
  - [Amazon RDS マネージド Postgres のデータベースモニタリングの設定](https://docs.datadoghq.com/ja/database_monitoring/setup_postgres/rds/?tab=postgres15)
  - [クエリメトリクスの確認](https://docs.datadoghq.com/ja/database_monitoring/query_metrics/)
  - [Finding Slow Queries in Postgres Using Datadog](https://dev.to/readysettech/finding-slow-queries-in-postgres-using-datadog-4o45)

- 参考
  - [Third-party monitoring tools](https://docs.aws.amazon.com/prescriptive-guidance/latest/amazon-rds-monitoring-alerting/third-party-monitoring-tools.html)

### メトリクス

- サーバー
  - CPU使用率
  - メモリ使用率
  - ディスク使用率
- アプリケーション
  - APIリクエスト数
  - レスポンスタイム
  - エラー数
  - エラーレート
  - キャッシュヒット率
- データベース
  - クエリ数
  - スロークエリ数
  - スロークエリ率
  - 接続数
  - レプリケーションラグ
- フロントエンド
  - ページビュー数
  - ページビュー時間
  - エラー数
  - エラーレート
  - セッション数
