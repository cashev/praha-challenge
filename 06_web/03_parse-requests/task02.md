# 課題02

## Content-typeの違い

### application/x-www-form-urlencoded

キーと値の1対1の形式で送る。  
formエレメントで送信するとこの形式になる。  
キー,値に&, =など特殊文字を使うにはエンコードする必要がある。  

```http
key1=value1&key2=value2&key3=value3
```

### application/json

JSON形式で送る。  
文字列だけではなく、数値やネストしたJSONも送れる。  
", \を使う場合は\でエスケープする必要がある。  

```json
{
  "key1": "value1",
  "key2": 2,
  "key3": {
    "key3-1": "value3-1",
    "key3-2": "value3-2"
  }
}
```

## 参考

<https://developer.mozilla.org/ja/docs/Glossary/percent-encoding>  
<https://redj.hatenablog.com/entry/2022/08/06/011409>  
<https://developer.mozilla.org/ja/docs/Learn/Forms/Sending_and_retrieving_form_data>  
