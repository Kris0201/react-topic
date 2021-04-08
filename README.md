## 前言
嗨，我是Kris，歡迎來到我的專案Drunken Cake。以下是一些關於本專案的介紹，包含瀏覽前的環境建置與專案說明等。

## 環境建置
本專案結合前端畫面呈現與後端資料庫資料讀取兩部分，因此請連同node (https://github.com/Kris0201/node) 此專案一併下載，並視需求開啟mySQL資料庫，方能正常使用，詳細開啟專案方式如下：

1. 將本專案與上述提供之node專案一同下載到您的電腦中
react:  <https://github.com/Kris0201/react-topic.git>
node： <https://github.com/Kris0201/node.git>

2. 下載好後以vs code(Visual Studio Code)編輯器開啟，並分別於兩個專案的終端機輸入指令
`npm i`


3. 執行完安裝後，若欲看到完整資料庫資料，可至node專案中的"data"資料夾中下載所有sql檔；若不需要安裝資料庫，可直接進行步驟4
![image](https://github.com/Kris0201/react-topic/blob/master/%E8%AA%AA%E6%98%8E%E5%9C%96%E7%89%87/data-sql.png)

4. 在react專案終端機輸入yarn start指令，在node專案終端機輸入nodemon指令即可開啟靜態頁面。注意，若無建置資料庫，部分頁面(例如「商品列表」與「商品詳細頁」圖片或訊息將無法正常顯示，以下將改以附上說明圖片供參。

*各網頁縮圖*
![image](https://github.com/Kris0201/react-topic/blob/master/%E8%AA%AA%E6%98%8E%E5%9C%96%E7%89%87/%E5%90%84%E7%B6%B2%E9%A0%81%E7%B8%AE%E5%9C%96.pdf)


## 專案介紹
本專案為多人協作作品，非一己之力完成。我個人主要負責頁面為「商品列表」與「商品詳細頁」，詳細小組分工置於文末，敬請參考。

### 專案名稱: Drunken Cake || 醉糕品味

**專案主題**
本專案是以商品販售為主的網站設計，網站主要由「首頁」、「商品」、「體驗」、「場地租借」和「關於我們」組成。

主要的販售商品為結合酒精與蛋糕的商品，同時亦售有其它體驗型商品，例如在「體驗」頁面中的各式諸如手作課程、職人講座。此外，也提供蛋糕教室租借的服務。

**各頁面簡介**

- 首頁
- 商品
- 體驗
- 場地租借
- 關於我們


