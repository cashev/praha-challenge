# 課題01

## SSR, CSR, SSGの違い

### SSR(Server Side Rendering)

サーバー側でHTMLを生成してクライアントに返す方法。  

- データ取得のタイミング  
  サーバー側でリクエストが来たときにデータを取得する  

- レンダリングのタイミング  
  サーバー側でデータを取得した後、HTMLを生成してクライアントに返す  

- SEO  
  サーバー側でHTMLを生成しているのでSEO対策がしやすい  

### CSR(Client Side Rendering)

クライアント側でJavaScriptを使ってHTMLを生成する方法。  
サーバーの負荷を下げることができる。  

- データ取得のタイミング  
  クライアント側(ブラウザ)でデータを取得する  

- レンダリングのタイミング  
  クライアント側(ブラウザ)でデータを取得した後、HTMLを生成する  

- SEO  
  クライアント側でHTMLを生成しているのでSEO対策がしにくい  
  サーバーは空のHTMLを返すので、クローラーがJavaScriptを解釈できない場合はデータを取得できない  

### SSG(Static Site Generation)

ビルド時にHTMLを生成する方法。  
リクエストがきたときには、既に生成されたHTMLを返す。  
CDNを使うことで高速化が期待できる。  

- データ取得のタイミング  
  ビルド時にデータを取得する  
  最新のデータを取得するためには、再ビルドが必要  

- レンダリングのタイミング  
  ビルド時にHTMLを生成する  

- SEO  
  サーバー側でHTMLを生成しているのでSEO対策がしやすい  

## 参考

<https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea>  
<https://aws.amazon.com/jp/blogs/news/ssg-vs-ssr-in-next-js-web-applications-choosing-the-right-rendering-approach/>  
