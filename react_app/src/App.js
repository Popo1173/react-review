import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

class App extends Component {
  //inputの初期状態を空にする
  input = '';

  //スタイル
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }
  inputStyle = {
    fontSize: "12px",
    padding: "5px"
  }
  //stateの初期値設定
  constructor(props){
    super(props);
    this.state = {
      message: 'type your name:'
    };
    //doChange,doSubmit関数をbindする
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
    //ブラウザのデフォルト挙動をクリア
    event.preventDefault();
  }
  //レンダリング
  render() {
    return  <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
        <label>
          <spna style={this.inputStyle}></spna>
          Message:<input type="text" style={this.inputStyle} onChange={this.doChange}></input>
        </label>
        <input type="submit" style={this.inputStyle} value="click" />
      </form>
    </div>;
  }
}

export default App;
