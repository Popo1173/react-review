import {createStore} from 'redux';


const initData ={
    data: [{message: 'Sample data', created:new Data()}],
    message: 'please type message:',
    mode: 'default',
    fdata:[]
}

//レデューサー
export function memoReducer(state = initData, action){
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
        message: action.message,
        create:new Data()
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data:newdata,
        message:'Added',
        mode: 'default',
        fdata:[]
    };
}