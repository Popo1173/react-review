
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

## jsxをhtmlに記述する
「type="text/babel"」
Babelでコンパイルするため、↑のtypeとなる
```
<script type="text/babel">
    let dom = document.querySelector('#root')
    let el = (
        <div>
            <h2>JSX sample</h2>
            <p>sampleText</p>
        </div>
    );
    ReactDOM.render(el, dom)
</script>
```

## style
const mg_a = {
    fontSize: "20px",
    color: "red",
    border: "1px solid blue"
}

<h2 style={mg_a}>JSX sample</h2>
⇨　style={CSSクラス名}のように記述