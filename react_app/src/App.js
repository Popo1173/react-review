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
  //入力された値を取得する
  doChange(event) {
    this.input = event.target.value;
  }
  //dosubumit()発火したらsetStateで値を更新する
  doSubmit(event) {
    this.setState({
      message: 'Hello. ' + this.input + '!!'
    });
    //発生したイベントをなくす　送信されなくなる
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
          {/* inputを必須項目にし、「半角アルファベット、スペース、カンマ、ピリオドのみ入力化とする」 */}
          {/* required：必須項目、pattern：正規表現のパターンを指定 */}
          Message:<input type="type" style={this.inputStyle} onChange={this.doChange} required pattern="[A-za-z _,.]+" />
        </label>
        <input type="submit" style={this.inputStyle} value="click" />
      </form>
    </div>;
  }
}

export default App;
