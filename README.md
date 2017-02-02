# Todo List - React and Redux Example

## 功能介紹
先來看看完成的樣子。

![Todo List -  React and Redux Example](demo.gif)

功能有：

- 新增一個task
- 刪除一個task
- 更改task狀態為完成 (初始狀態：未完成)
- 切換filter，選擇呈現全部或已完成的task

## 實作
程式碼說明如下。

### Constants
定義Action Type和Model。

#### Action

#### Model
初始值放在Model。

這裡會使用`Immutable.fromJS()`將JavaScript Object轉換成ImmutableJS可用的Map結構。

### Actions
使用`createAction`來包裝action creator，使其return的值是flux的標準的payload格式。

### Reducers
更新state。

這裡說明一下Immutable.js存取物件或陣列的方法，使用`set()`和`get()`；而當list或map內部有包list或map時，則需要使用`setIn()`和`getIn()`。如果list或map內部有包list或map時，指定索引的方式為放到陣列裡面，例如：

    var list_1 = Immutable.fromJS(['a', ['b', 'c', 'd'], 'e']);
    var list_2 = list1.set([1, 2], 'new'); //list_2 為 ['a', ['b', 'c', new'], 'e']

所以，當想要設定TodoState的todos中某個item的completed的值為true時，就要找到TodoState的todos，再使用回傳的index找todos裡面指定的索引的元素，再再找這個item裡面的completed，然後設定completed為true。

    state.setIn(['todos', payload.index, 'completed'], true);

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
