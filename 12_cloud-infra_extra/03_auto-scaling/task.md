# 課題

## Auto Scaling

### ECS サービスに Auto Scaling を設定

![auto-scaling](./images/auto-scaling.png)

```sh
ab -k -n 10000000 -c 1500 http://my-alb-04-225352790.ap-northeast-1.elb.amazonaws.com/
```

### スケールアウト

アラート

![scale-out-alarm](./images/scale-out-alarm.png)

タスク数

![scale-out-tasks](./images/scale-out-tasks.png)

イベント

![scale-out-events](./images/scale-out-events.png)

### スケールイン

アラート

![scale-in-alarm](./images/scale-in-alarm.png)

タスク数

![scale-in-tasks](./images/scale-in-tasks.png)

イベント

![scale-in-events](./images/scale-in-events.png)
