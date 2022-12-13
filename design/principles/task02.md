# 課題02

## 問題点

PurchaseServiceのpurchaseメソッドにチェック処理と購入処理が混在し、  
チェック処理に修正が入る度にpurchaseメソッドが肥大化する  

## 解決策

PurchaseServiceにvalidateメソッドを追加し、そこでチェック処理を行う  
PurchaseServiceが実際のチェック処理はコンストラクタで受け取る  
