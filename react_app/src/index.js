import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
//パーシストレデューサー、パーシスターインポート
import { persistStore, persistReducer } from 'redux-persist';
//ローカルストレージを利用
import storage from 'redux-persist/lib/storage';
//パーシストゲート
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import App from './App';

//ステートの値
let state_value = {
    counter: 0,
    message: "COUNTER"
}

function counter(state = state_value, action) {
    switch(action.type) {
        case 'INCREMENT':
        return {
            counter: state.counter + 1,
            message: "INCREMENT"
        };
        case 'DECREMENT':
            return {
                counter: state.counter - 1,
                message: "DECREMENT"
        };
        case 'RESET':
            return {
                counter: 0,
                message: "RESET"
        };
        default:
            return state;
        }
}

//Redux Persistの設定
const persistCofing = {
    key: 'root',
    storage,
}

//パーシストレデューサーの作成
const persistedReducer = persistReducer(persistCofing, counter)

//ストア、パーシスターの作成
let store = createStore(persistedReducer)
let pstore = persistStore(store)

//表示をレンダリング
ReactDOM.render(    
    <Provider store={store}>
        <PersistGate loading={<p>loadding...</p>} persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);