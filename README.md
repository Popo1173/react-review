# JSX
基本　jsxを使ってレンダリング　　
DOMを取得する　　
```let dom = document.querySelector('#root')```
JSをreturnする　
※必ず一つのタグでラップされる必要があります。　　
複数の要素を返却することはできません。複数の要素で構成される場合は、div等の要素で必ずラップしましょう。
ただし、divを用いると、DOMに不要なノードが追加されることになります。
好ましくない場合は、React.Fragmentを使用することで、形式だけの要素を作成できます。
```
let el = (
    <div>　⇨　<React.Fragment> ⇨　<>
        hogehoge
    </div> ⇨　</React.Fragment> ⇨　</>
)
```
jsxの中身をレンダリングする 
```ReactDOM.render(el, dom)```

## 値の渡し方
```
let title = "タイトル";
let message = "NewMessage";
let link ="https://google.com";

let el = (
    <p>{title}</p>
    <p>{message}</p>
    <a href={link}>{title}</a></p>    
)
```

## styleの渡し方
```
const mg_a = {
    fontSize: "20px",
    color: "red",
    border: "1px solid blue"
}

let el = (
    <p style={mg_a}>hogehoge</p>
)
```

## 関数の戻り値を使ってスタイルする
printMsg関数が実行されたら、以下の引数が渡される  
``` {printMsg('最初のメッセージ', 30, '#ddd')}```

以下がの内容がreturnされる  
```return <p style={style}>{mg_a}</p>;```

```
let printMsg  = function(mg_a, size, color) {
    const style = {
        fontSize: size + "pt",
        fontWeight: '700',
        color: color,
        border: "1px solid" + color
    };
    return <p style={style}>{mg_a}</p>;
}
let el = (
    {printMsg('最初のメッセージ', 30, '#ddd')}
)

```
## 論理 && 演算子によるインライン If 条件部分が true であれば、&& の後に書かれた要素を出力
```
{flg &&
    <p style={mg_a}>{message_true}</p>
}
```
## ? 条件演算子
```
{flg ?
    //true の場合
    <p style={mg_a}>{message_true}</p>:
    //false の場合                            
    <p style={mg_a}>{message_false}</p>
}
```
## map関数
配列名.map((引数)=>(戻り値))  
引数のvalue に配列から取り出しオブジェクトが渡される
```
let dataMap = [
    {name: 'Taro', mail: 'taro@gmailcom', age: 45},
    {name: 'Hanako', mail: 'hanako@gmailcom', age: 20},
    {name: 'Ken', mail: 'ken@gmailcom', age: 45}
]
                
{dataMap.map((value) =>(
    <tr>
        <td>{value.name}</td>
        <td>{value.mail}</td>
        <td>{value.age}</td>
    </tr>
))}
```
## クリックして更新する
onClickしたらイベントが発火　　
counterがインクリメントする
```
var counter = 0;
let doAction = (event) => {
    counter++
    let el = (
        <div>
            <p onClick={doAction} style={p}>
                count: {counter}
            </p>
        </div>
    )
    ReactDOM.render(el,dom)
}
doAction()
```
