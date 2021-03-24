
## エレメントの作成
React.createElement('タグ名', 属性, 'こんてんつ')  
```
let element  =  React.createElement(
    'p', {}, 'Hellow React'
);
```

## レンダリングした表示
```
ReactDOM.render(element, dom);
```