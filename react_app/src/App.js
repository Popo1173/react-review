import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

//変数にオブジェクトを代入
let data = {
  title: 'Title',
  message: 'this is sample message'
}

//React.createContext(data)　でコンテキストを設定
const sampleContext = React.createContext(data);

class App extends Component {

  newdata = {
    title: '新しいタイトル',
    message: 'これは新しいメッセージです'
  };

  render() {
    return(
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <sampleContext.Provider value={this.newdata} >
          <Title />
          <Message />
        </sampleContext.Provider>
        <Title />
        <Message />        
      </div>
    );
  }
}

class Title extends Component {
  //this.context.プロパティ名 で値を取り出せるようにする
  static contextType = sampleContext;

  render(){
    return(
      <div>
        {/* data titleプロパティの値を取り出す */}
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
//this.context.プロパティ名 で値を取り出せるようにする
  static contextType = sampleContext;

  render(){
    return(
      <div>
        {/* data messageプロパティの値を取り出す */}
        <p>{this.context.message}</p>
      </div>      
      );
  }
}
export default App;
