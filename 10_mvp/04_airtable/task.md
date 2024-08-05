# 課題01

## 実装

### 一覧取得

<http://localhost:3000/users>

```sh
[
    {
        "id": "rec0B3YzxJ2PB5X7s",
        "createdTime": "2024-08-04T15:18:18.000Z",
        "fields": {
            "Id": "2",
            "Name": "テスト 二郎",
            "Age": 22
        }
    },
    {
        "id": "recgkg5iDnhFgEj6r",
        "createdTime": "2024-08-04T15:18:18.000Z",
        "fields": {
            "Id": "1",
            "Name": "テスト 一郎",
            "Age": 21
        }
    },
    {
        "id": "recilcTBB8gvwUHkR",
        "createdTime": "2024-08-04T15:18:18.000Z",
        "fields": {
            "Id": "3",
            "Name": "テスト 三郎",
            "Age": 23
        }
    }
]
```

### Airtableに書き込む

```sh
curl -X POST -H "Content-Type: application/json" -d @test.json http://localhost:3000/users
```

### 参考

- [Authentication](https://airtable.com/developers/web/api/authentication)
- [List records](https://airtable.com/developers/web/api/list-records)
- [Create records](https://airtable.com/developers/web/api/create-records)
- [Finding Airtable IDs](https://support.airtable.com/docs/finding-airtable-ids)
