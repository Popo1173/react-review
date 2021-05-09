import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

//パーシストストア、パーシストレデューサーの作成
import { persistStore, persistReducer } from 'redux-persist';
//ローカルストレージ
import storage from 'redux-persist/lib/storage';
//パーシストゲート
import { persistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import MemoStore, { memoReducer } from './memo/Store'

//Redux Persistの設定
const persistConfig = {
    key: 'memo',
    storage,
}

//パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, memoReducer);

//ストア、パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);

ReactDOM.render(
    //MemoStoreをProviderの中で利用することで、APPコンポーネント全てで使う
    <Provider store={store}>
        <PersistGate loading={<p>LOADING...</p>} persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
export default pstore;