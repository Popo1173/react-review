import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import MemoStore from './memo/Store';

ReactDOM.render(
    //MemoStoreをProviderの中で利用することで、APPコンポーネント全てで使う
    <Provider store={MemoStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);