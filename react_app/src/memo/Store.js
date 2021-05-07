import {createStore} from 'redux';

//memoデータの初期値
const initData ={
    //サムプルデータ、アクセス時刻
    data: [{message: 'Sample data', created:new Date()}],
    //初回message表示
    message: 'please type message:',
    mode: 'default',
    fdata:[]
}

//レデューサー
//stateに初期データをセット、actionを引数にする
export function memoReducer(state = initData, action){
    //アクションタイプの値をチェックし、それぞれのcaseで分岐
    switch(action.type) {
        //case ADDの場合　addReduceを返す
        case 'ADD':
            return addReduce(state, action);
        //case DELETEの場合　deleteReduceを返す
        case 'DELETE':
            return deleteReduce(state, action);
        //case FINDの場合  findReduceを返す     
        case 'FIND':
            return findReduce(state, action)
        //入力がない場合
        default:
            return state
    }
}

//レデュースアクション
//メモの追加レデュース処理
function addReduce(state, action){
    let data = {
        //messageを格納
        message: action.message,
        //時刻を生成
        created:new Date()
    };
    //入力された値を取りだして変数newdataにslice();で生成
    let newdata = state.data.slice();
    //変数newdataの値をdata配列の一番最初に追加
    newdata.unshift(data);
    return {
        //追加する内容
        data:newdata,
        message:'Added',
        mode: 'default',
        fdata:[]
    };
}
//メモ検索のレデュース処理
function findReduce(state, action) {
    let f = action.find;
    let fdata = [];
    state.data.forEach((value) => {
        if(value.message.indexOf(f) >= 0) {
            fdata.push(value);
        }
    });
    return {
        data:state.data,
        message: 'find "' + f + '":',
        mode: 'find',
        fdata:fdata
    };
}
//メモ削除のレデュース処理
function deleteReduce(state, action) {
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);
    return {
        data:newdata,
        message: 'delete "' + action.index + '":',
        mode: 'delete',       
        fdata:[]
    }
}

//アクションクリエーター

//メモ追加のアクション
export function addMemo(text) {
    return {
        type: 'ADD',
        message: text
    }
}
//メモ削除のアクション
export function deleteMemo(num) {
    return {
        type: 'DELETE',
        index: num
    }
}
//メモ検索のアクション
export function findMemo(text) {
    return {
        type: 'FIND',
        find: text
    }
}

//ストアを作成してエクスポート
export default createStore(memoReducer);