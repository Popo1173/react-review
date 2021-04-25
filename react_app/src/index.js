import React from 'react';
import ReactDOM from 'react-dom';
//redux ストアとレデューサーをインポート
import { createStore, combineReducers} from 'redux';
//react-redux Providerをインポート
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//ステートの値
//レデューサーに渡す初期値
let state_value = {
    counter: 0,
    message: "COUNTER"
}

//レデューサー
//引数に「stateとaction」を渡す
//action「レデューサーの呼び出し内容が入ったオブジェクト（呼び出した際の情報が保管されている）」
//state「初期値を渡す」
function counter(state=state_value, action) {
    //「.type」呼び出し種類のこと
    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter +1,
                message: 'INCREMENT'
            };
        case 'DECREMENT':
            return {
                counter: state.counter -1,
                message: 'DECREMENT'
            };
            default:
                return state;
    }
}

//ストアを作成
let store = createStore(counter);

//表示をレンダリング
ReactDOM.render(
    //store という属性にストアを指定する
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
