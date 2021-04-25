import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

class App extends Component {
  input = '';

  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }

  constructor(props) {
    super(props);
    this.state ={
      message: 'Type Your Name'
    };
    this.doCheck = this.doCheck.bind(this);
  }

  //
  doCheck(event) {
    alert(event.target.value + "は長すぎます。５文字以内にする");
  }

  render(){
    return <div>
      <h1>REACT</h1>
      <h2>{this.state.message}</h2>
      {/*  最大5文字の入力チェック */}
      <Message maxlength="5" onCheck={this.doCheck} />
    </div>
    }
  }

  class Message extends Component {
    inputStyle = {
      fontSize: "12px",
      padding: "5px"
    }
    constructor(props){
      super(props);
      this.doChange = this.doChange.bind(this);
    }
    // onChangeで値が更新されるとdoCheckが実行され、値のチェックが行われる
    //入力された値とコンポーント親から渡された「maxlength="5"」を比較
    //入力された値が5以上であれば、「onCheck」を実行すし、
    doChange(e) {
      if(e.target.value.length > this.props.maxlength) {
        this.props.onCheck(e);
        //入力された文字列を？？０番目から5番目までe.target.value代入する　
        e.target.value = e.target.value.substr(0,this.props.maxlength);
      }
    }
    render(){
      return <input type="text" style={this.inputStyle} onChange={this.doChange} />
    }
  }
export default App;
