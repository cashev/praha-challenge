# 課題02

## 実装

### 遠いリージョンのS3に保存

南アメリカ（サンパウロ）リージョンにS3バケットを作成し、画像をアップロードする。  

![createBucket](./images/createBucket.png)

![uploadImage](./images/uploadImage.png)

### S3のURLでアクセス

Bucket policyを設定して、外部からのアクセスを許可する。  

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::task05-cloudfront-test/jt7uh3a9cnpc005utlva.png"
        }
    ]
}
```

![editBucketPolicy](./images/editBucketPolicy.png)

<https://task05-cloudfront-test.s3.sa-east-1.amazonaws.com/jt7uh3a9cnpc005utlva.png>

![accessByS3Url](./images/accessByS3Url.png)

### CloudFrontを設定

![setupCloudFront01](./images/setupCloudFront01.png)

![setupCloudFront02](./images/setupCloudFront02.png)

### CloudFrontのURLでアクセス

<https://d1waebt0nk8sy5.cloudfront.net/jt7uh3a9cnpc005utlva.png>

![accessByCloudFrontUrl](./images/accessByCloudFrontUrl.png)

### S3とCloudFrontでリクエスト/レスポンス時間を確認

- S3  
  - Chrome: 2.69s  
![chromeS3Time](./images/chromeS3Time.png)
  - Firefox: 4.456s
![firefoxS3Time](./images/firefoxS3Time.png)

- CloudFront  
  - Chrome: 203ms  
![chromeCloudfrontTime](./images/chromeCloudfrontTime.png)
  - Firefox: 157ms
![firefoxCloudfrontTime](./images/firefoxCloudFrontTime.png)
