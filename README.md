# Todo List: React and Redux Example
使用 React 與 Redux 實作 Todo List。

## 功能介紹 / Demo
![Todo List -  React and Redux Example](demo.gif)

功能有：

- 新增一個 todo
- 刪除一個 todo
- [待完成] 編輯一個todo的名稱
- 更改 todo 狀態：完成/未完成
- 切換 filter，列出全部或已完成的 todo

## 說明
程式碼說明如下。

### Constants
定義 Action Type 和 Model。

#### Action Type
將動作定義成常數，例如：建立一個 todo(CREATE_TODO)、刪除一個 todo(DELETE_TODO)。

#### Model
Model 的功能是

- 定義資料結構
- 設定初始值

這裡會使用`Immutable.fromJS()`將 TodoState 這個 JavaScript Object 轉換成 Immutable.js 可用的 Map 結構，之後的操作都會使用 ImmutableJS 的 API，而非一般 JavaScript Object 操作的 API，注意別混淆了。

### Actions
使用`createAction`來包裝 action creator，使其回傳值是 flux 的標準的 payload 格式。

### Reducers
更新 state。

這裡說明一下 Immutable.js 存取物件或陣列的方法，使用`set()`和`get()`；而當 list 或 map 內部有包list或map時，則需要使用`setIn()`和`getIn()`。如果 list 或 map 內部有包 list 或 map 時，指定索引的方式為放到陣列裡面，例如：

    var list_1 = Immutable.fromJS(['a', ['b', 'c', 'd'], 'e']);
    var list_2 = list1.set([1, 2], 'new'); //list_2 為 ['a', ['b', 'c', new'], 'e']

所以，當想要設定 TodoState 的 todos 中某個 item 的 completed 的值為 true 時，就要找到 TodoState 的 todos，再使用回傳的 index 找 todos 裡面指定的索引的元素，再再找這個 item 裡面的 completed，然後設定 completed 為 true。

    state.setIn(['todos', payload.index, 'completed'], true);

### Store
儲存 state 的地方。

### Components
純View的展示，這裡切分 Components 為

- Layout：最外層的框框，用來包裝 TodoHeader、TodoList 和 Filter
- TodoHeader：含有新增 todo 功能
- TodoList：顯示 todo 列表
- Filter：顯示全部或已完成的todo

### Container
使用 Container 和 Store 溝通，對於這樣的拆分方式可參考[這篇](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nr2ds9lyk)，所以，若 Component 要跟 Store 溝通，就會有對應的 Container。

## 參考資料
- [Redux 實戰入門](https://github.com/kdchang/reactjs101/blob/master/Ch07/react-redux-real-world-example.md)
- [Immutable.js 簡介](https://rhadow.github.io/2015/05/10/flux-immutable)
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nr2ds9lyk)
