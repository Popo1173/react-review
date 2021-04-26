import React, { Component } from 'react';
//react-redux のconnect をインポートする
import { connect } from 'react-redux';
import './App.css';


//ステートのマッピング
//このコンポーネント利用するステートを返す関数
function mappingState (state) {
  return state;
}

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
//ストアのコネクト
App = connect()(App);

//メッセージ表示コンポーネント
class Message extends Component {
  style= {
    fontSize: "20px",
    padding: "20px 5px"
  }
  render(){
    return(
      <p style={this.style}>
        {/* ストアの値を取得 */}
        {this.props.message}:{this.props.counter}
      </p>
    );
  }
}
//ストアのコネクト
//connect を呼び出し引数にmappingState
//
Message = connect(mappingState)(Message);

//ボタン表示
class Button extends Component {
  style= {
    fontSize: "16px",
    padding: "5px 10px"
  }

  constructor(props) {
    super(props);
    //doAActionをbind
    this.doAction =this.doAction.bind(this)
  }

  doAction(e){
    if(e.shiftKey) {
      //this.props.dispatchの引数に{type: 'DECREMENT'})を指定して、レデューサーを呼び出して処理を実行
      this.props.dispatch({type: 'DECREMENT'});
    }else {
      this.props.dispatch({type: 'INCREMENT'})
    }
  }

  render(){
    return(
      <button style={this.style} onClick={this.doAction}>Click</button>
    );
  }
}
//ストアのコネクト
Button = connect()(Button);

export default App;
