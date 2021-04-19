# JS class
同じオブジェクトを複数使う場合は、同じ構造のオブジェクトを生成する「コンストラクタ関数」を使う  
クラスを元にオブジェクト作成する時、自動的に「constructor」メソッドが呼び出され、初期化処理を行う  
(コンストラクターを使用すると、インスタンス化されたオブジェクトに対して、他のメソッドを呼び出す前に行う必要のある独自の初期化を提供することができます。)  
クラスにプロパティを用意する時は、「constructor」内にプロパティの値を代入する用意をしておけば、自動的に作成される  
```
class MyObj {
    constructor(r, g, b) {
        this.red = r; ⇦　　プロパティ
        this.green = g;
        this.blue = b;
    }
    ...
    
    let ob = new MyObj(255,200,200);
```

## get, set メソッド
getメソッドはプロパティのように値を取り出せる
setメソッドはプロパティを値のように代入できる
```
class MyObj {

get hex() {
    //プロパティの値を16進数の文字列に変換してreturn
    return '#'
    + ('00' + this.red.toString(16)).substr(-2)
    + ('00' + this.blue.toString(16)).substr(-2)
    + ('00' + this.green.toString(16)).substr(-2)
}
//  hex()の値をreturnの中で呼び出す
get startP(){
    return '<p style="background-color:' + this.hex +' ">';
}
}
関数()
```

## extends
すでにあるクラスを継承できる
```
class NewClassName MyObj(継承元ClassName) {
    constructorやget,set メソッドは継承するため記述不要になる
}
```

# JSX
## 基本　jsxを使ってレンダリング  
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

## doChange, doAction
```
let message = 'お名前をどうぞ:'
let in_val = ''


let doChange = (event)=>{
    //event.target.value valueの値を取り出してin_val変数に格納
    in_val = event.target.value
    message = 'こんにちは' + in_val + 'さん'
}
let doAction = (event)=> {
    let el = (
        <div>
            <p style={p}>{message}</p>
            <div>
                {/* 
                    inputに値が入る
                    doChangeが発火
                    in_val  に入力された値格納
                    messageに入力された値格納
                    onClickでdoActionが発火し、Domをレンダーする
                */}
                <input type="text" id="input" style={input} onChange={doChange} />
                <button onClick={doAction} style={input}>CLICK</button>
            </div>                                
        </div>
    )
```

# コンポーネント

## シンプルな関数コンポーネント  
引数に属性を与えることができる
```
finction コンポーネント名 (引数)　{
    return ...JSX...
}
```
## jsx内にコンポーネントを書く
指定した関数名を指定する  
コンポーネント名は必ず大文字から  
```<コンポーネント名 />　⇦　関数でreturnしたエレメントが出力される```

## 属性を渡す
```
.hoge {color: 'red'}

function Welcome(props) {
    return <p style={props.style}>{props.name}</p>
}

let el (
    <div>
        <Welcome name="YAMADA" style={hoge} />
    </div>    
)
```
DOM結果：```<p style="color: red;">YAMADA</p>```


## render() 
コンポーネントをレンダリングするメソッド 
引数のないシンプルなメソッドで、returnをもっていて表示するエレメントを返す

## export default App;
コンポーネント側でエクスポートしてインポートできるようにする
## import App from './App';
コンポーネントをインポートする


# React PJ 
- 1.アクセスすると「inde.html」が呼ばれる 
- 2.index.html内で、index.jsが読み込まれる
- 3.index.js内で「App.js」が呼ばれる


```
index.js 
//APP.js の<App />コンポーネントで引数を持たせて　APPコンポーネントに渡す
ReactDOM.render(
  <React.StrictMode>
    <App title="App" message="this is component!!"/>
  </React.StrictMode>,
  document.getElementById('root')
);


app.js
//引数として渡された値を指定した属性にいれて表示する
class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render() {
    return  <div>
      <h1>{this.title}</h1>
      <p>{this.message}</p>
    </div>
  }
}
```

## 複数のコンポーネントを呼び出す
1つのスクリプトに複数コンポーネント呼び出せ、引数をコンポーネントに渡す
```
  render() {
    return  <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />
      <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25"/>
    </div>;
  }
```

## コンポーネントを別ファイルから呼び出す
``` import ComponentName from './ComponentFileName'```

## プロパティ
クラスに値を保管しておく 
## props
コンポーネントの属性をまとめて保管するためのもの。基本的に「read only」 
## state
stateの値を操作することで、コンポーネントの値を操作できる。
- コンポーネントの「状態を表す値を保管」するためのもの。
- コンポーネントの「現在の状態」を扱うためのも。

プロパティは変更してもコンポーネントの表示は変わらないため、  
ReactDOM.renderを呼び出して表示を更新していたが、stateを使うことで、
値を変更するだけで、自動的に表示が更新される。

{}を使ったオブジェクトリテラルとして記述する。 
stateで使う値をまとめて設定しておく。 
あとはthis.stateの中から設定した値を取り出すだけ
```
this.state = { 値を用意 }
```
- stateの値は「this.state.xx」で取り出せる 
- 属性の値は「this.prpos.xx」で取り出せる 
## stateの更新
コンポーネントの「setState」メソッドを使う 
現在のstateの値を利用して新たな値を設定する場合は、関数を引数に指定する。アロー関数を用意する 
```(state) =>```
※setStateは値を追加するだけで削除はしません。
※setStateは同じ値があった場合は更新する
※setStateは値がstateに追加される

## bindメソッド
定義された関数に対して、thisを代入できるメソッドです。 
また、その名の通り関数などをbind（紐づけ）することができます。

## state解説
```
//stateのプロパティをセット
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start',
    };
   //bind して「this」を使えるようにする
    this.doAction = this.doAction.bind(this);
  }

  //doAction関数内で、setStateで値を書き換える
  //引数（e） 発生したイベントの情報をまとめたオブジェクトが入る。
  　 e.targetでイベントの発生したエレメントを取り出す
  doAction(e){
    this.setState((state)=>({
      //counter プロパティの値を+1する
      counter: state.counter + 1,
      //msg の文字列を書き換える
      msg: 'count: ' + state.counter
    }));
  }
    render() {
    return  <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      //ボタンをクリックしたら、onClickイベントで「doAction()」を発火させる
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }
```

## memo
三項演算子
変数 = 条件式 ? trueの時の値 : falseの時の値 ; 
```var ans = ( ( Math.random() * 100 ) > 50 ) ? 'larger' : 'smaller';```


