import React, { Component } from 'react';
//react-redux のconnect をインポートする
import { connect } from 'react-redux';
import './App.css';

//APPコンポーネント
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}//APP-Component
App = connect()(App)

//メッセージ表示コンポーネント
class Message extends Component {
  style = {
    fontSize: "20pt",
    padding: "20px 5px"
  }

  render(){
    return(
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}//Message-Component

//ストアのコネクト
Message = connect((state)=>state)(Message);

//ボタンコンポーネント
class Button extends Component {
  style = {
    fontSize: "16pt",
    padding: "5px 10px"
  }
  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this)
  }
  //ボタンクリックでディスパッチ
  doAction(e) {
    if(e.shiftKey){
      this.props.dispatch({type: 'DECREMENT'});
    } else if(e.ctrlkey){
      this.props.dispatch({type: 'RESET'});
    }else {
      this.props.dispatch({type: 'INCREMENT'});
    }
  }

  //表示
  render(){
    return(
      <button style={this.style} onClick={this.doAction}>Click!</button>
    );
  }
}//Button-Component

//ストアのコネクト
Button = connect()(Button);

export default App;
