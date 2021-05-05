import {createStore} from 'redux';


const initData ={
    data: [{message: 'Sample data', created:new Data()}],
    message: 'please type message:',
    mode: 'default',
    fdata:[]
}

//レデューサー
export function memoReducer(state = initData, action){
    //アクションタイプの値をチェックし、それぞれのcaseで分岐
    switch(action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'FIND':
            return findReduce(state, action)
        
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
        create:new Data()
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
    state.data = forEach((value) => {
        if(value.message.indexOf(f) >= 0) {
            fdata.push(value);
        }
    });
    return {
        data:state.data,
        message: 'Find "' + f + '":',
        mode: 'find',
        fdata:fdata
    };
}
//メモ削除のレデュース処理
function deleteReduce(state, action) {
    let newdata = state.data.slice();
    newdata.slice(action.index, 1);
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
export function deletMemo(num) {
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