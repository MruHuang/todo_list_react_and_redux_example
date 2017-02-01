# Todo List -  React and Redux Example

## 功能介紹
先來看看完成的樣子。

![Todo List -  React and Redux Example](demo.gif)

功能有：

- 新增一個task
- 刪除一個task
- 更改task狀態為完成 (初始狀態：未完成)
- 切換filter，選擇呈現全部或已完成的task

## 實作
程式碼主要分成以下幾個部份說明。

### Constants
定義Action Type和Model，其中會把初始值放在Model。

### Actions
使用`createAction`來包裝action creator，使其return的值是flux的標準的payload格式。

### Reducers
更新state。

### Store
儲存state。

### Components
純View的展示。

### Container
使用Container和Store溝通，對於這樣的拆分方式可參考[這篇](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nr2ds9lyk)。

## 參考資料
- [Redux 實戰入門](https://github.com/kdchang/reactjs101/blob/master/Ch07/react-redux-real-world-example.md)
- [Immutable.js 簡介](https://rhadow.github.io/2015/05/10/flux-immutable)
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nr2ds9lyk)