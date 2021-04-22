import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

//表示するコンポーネント
class App extends Component {
  input = '';

  //スタイル
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }
  constructor(props){
    super(props);
    this.state = {
      message: 'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello. ' + this.input + '!!'
    });
    event.preventDefault();
  }
  //レンダリング
  render() {
    return  <div>
      <h1>React</h1>
      <Message title="Children!">
        これはコンテンツコンポーネントです。
        マルでテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message>
    </div>;
  }
}

class Message extends Component {
  li = {
    fontSize: "16px",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }
  render() {
    //Messageコンポーネントの中に書かれているテキストを取り出す
    let content = this.props.children;
    //テキストを「。」で区切る
    let arr = content.split('。');
    //区切ったテキストを入れる配列を作る
    let arr2 = [];
    //ループさせる　arr配列の値の数までループする
    for(let i = 0; i < arr.length; i++){
      //trim()でスペースを削除してarr2配列に値を格納
      if(arr[i].trim() !=''){
        arr2.push(arr[i])
      }
    }
    //変数listにarr2配列を新しい配列に入れる
    let list = arr2.map((value,key)=>(
      <li style={this.li} key={key}>{value}。</li>)
      );
      return <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
  }
}
export default App;
