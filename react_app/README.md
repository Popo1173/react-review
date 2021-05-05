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
















# 大項目

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 中項目

In the project directory, you can run:

### 小項目

リンク [http://google.com]

段落段落段落段落段落\

