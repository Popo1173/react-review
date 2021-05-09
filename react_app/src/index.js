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
import './index.css';
import App from './App';
import MemoStore, { memoReducer } from './memo/Store';


//Redux Persistの設定
const persistCofing = {
    key: 'memo',
    storage,
}

//パーシストレデューサーの作成
const persistedReducer = persistReducer(persistCofing, memoReducer)

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