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

















# 大項目

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 中項目

In the project directory, you can run:

### 小項目

リンク [http://google.com]

段落段落段落段落段落\

