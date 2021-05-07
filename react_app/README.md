# メモの構造を考える
データを用意するにあたり以下のデータをストアに保管、管理する。  
変数initDataに初期値を用意し、それを使ってレデューサーを作成する. 
## 値について
「message」「created」2つの値をもつオブジェクトを用意し、その配列を「ストア」で保管・管理する
- message: メモのテキスト
- created: 作成した時刻

### その他のデータ
- data: メモのデータ
- message: 表示するメッセージ
- mode: どういう操作をしたかを表す値
- fdata: 検索したメモをまとめておくもの

# reducerはただの分岐
アクションタイプの値をチェックし、それぞれのcaseで分岐をかける. 
「タイプごとの分岐」を行うだけにし、具体的な処理は関数として用意しておく。  
注意：returnする時の「関数は、ステートを戻り値とする」
```
export function memoReducer(state = initData, action){
    //アクションタイプの値をチェックし、それぞれのcaseで分岐
    switch(action.type) {
        case 'ADD':
            return addReduce(state, action); ← 戻り値ステート
        case 'DELETE':
            return deleteReduce(state, action);　← 戻り値ステート
        case 'FIND':
            return findReduce(state, action)　← 戻り値ステート
        
        default:
            return state
    }
}
```
return する関数<br>
reducerで呼び出す関数は常に新しいステートをreturnすることが約束
```
//メモの追加レデュース処理
function addReduce(state, action){
    let data = {
        //messageを格納
        message: action.message,
        //時刻を生成
        create:new Data()
    };
    //入力された値をslice()で末尾まで取りだして変数newdataに格納
    let newdata = state.data.slice();
    //変数newdataの値をdata配列に追加
    newdata.unshift(data);
    return {
        //追加する内容
        data:newdata,
        message:'Added',
        mode: 'default',
        fdata:[]
    };
}
```
# アクションクリエーター
ディスパッチの際に引数として渡す「アクション」を作成する関数。<br>
returnされたアクションは、そのままディスパッチ等で送信されレデューサーによって処理を実行される。<br>
アクションクリエータがあれば、ディスパッチの呼び出しが簡単になる<br>
下の例）アクションタイプ：「type」、値：「message」<br>

```
export function addMemo(text) {
    return {
        type: 'ADD',
        message: text
    }
}
```

# slice()について
配列の各要素を取り出して新しい配列を作るもの<br>
Reduxでは、setStateする時、stateにある値をそのまま渡すと変更なしと判断され<br>
値が更新されれない。なので、slice()メソッドを使って配列を作りなして、setStateする必要がある。
````
let newdata = state.data.slice();
````

# ReduxPersist　
ページをリロードしてもデータが初期化しない方法（永続化）<br>
ReduxPersistは、「ローカルストレージ」を利用して、データを管理する。<br>
ローカルストレージはHTMLでサポートされている。
```
npm install --save redux-persist

```

Reduxは必要な値の処理をまとめた「レデューサー」を作成し、これを元に「ストア」を作成したが、
Reduxpersistは、通常の「レデューサー」と「ストア」に永続化のための「パーシストレデューサー」と「パーシストストア」が用意されている

## 【ReduxPersist設定情報用意】
あらかじめ、ReduxParsistの設定情報を値として用意しておく。<br>
Webブラウザのローカルストレージはキーを使って値を保管するため、その値をあらかじめ用意する。
```
cons 変数　= {
    key: キーの指定,　→　値を保管するキーを指定します。
    使用ストレージ,　→　ReduxPersistに用意されている値を使う
}
```
## 【PersistReducer】の作成
ReduxPersistに用意されている「persistReducer」関数を利用する。<br>
引数には「ReduxPersist設定情報」と「使用するレデューサー」を指定する。<br>
このレデューサーは、Reduxで使用しているものをそのまま利用する。
```
const 変数 = persistReducer {設定, レデューサー}
```

## 【パーシスター】の作成
まずは、通常のストアを作成し、それを元にパーシスターを作成する。<br>
```
//ストアはreduxのcreateStoreで作成。引数には「パーシストレデューサー」を指定
ストア = createStore (パーシストレデューサー)
//persistStore関数を呼び出して、パーシストストアを作成する。
変数 = persistStore (ストア)
```

## 【パーシストゲートコンポーネント】の作成
コンポーネントの表示を待たせるもの。<br>
データをローカルに保存するため、書き込み完了まで表示を待たせる仕組み。<br>
persistGateがないと、保存完了前にコンポーネントを表示してしまう。<br>
JSXで表示を作成する場合、表示するコンポーネントをラップして利用する<br>
Providerの内部に、パーシストゲートを用意して表示するコンポーネント類はその中に用意する。
```
<Provider store={ストア名}>
    //loadingの値は、値のローディング中の表示。nullでOK
    <PersistGate loading={ 値 } persistor={パーシスター}>
     ...表示するコンポーネント...
    </PersistGate>
</Provider>
```

## 使用オブジェクトのインポート

### パーシストレデューサー、パーシスター
```
//redux-persistに用意されている「persistStore, persistReducer」関数を利用する
import {persistStore, persistReducer} from 'redux-persist'
```
### ストレージ
```
//storageというオブジェクトを利用する
import storage from 'redux-persist/lib/storage'
```
### パーシストゲート
```
//redux-persist/integration/react内にあるコンポーネントを利用
import {PersistGate} from 'redux-persist/integration/react'
```









# 大項目

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 中項目

In the project directory, you can run:

### 小項目

リンク [http://google.com]

段落段落段落段落段落\

