# 課題02

## 問題点

PurchaseServiceのpurchaseメソッドにチェック処理と購入処理が混在し、  
チェック処理に修正が入る度にpurchaseメソッドが肥大化する  

## 解決策

製品ごとに購入ルールがあると想定し、購入ルールを抽象化  
PurchaseServiceクラスからチェック処理をなくし、基本的な処理の流れだけを記載する  
