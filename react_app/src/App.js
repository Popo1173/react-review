import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

//表示するコンポーネント
class App extends Component {
  //配列
  data = [
    "This is list sample",
    "これはリストのサンプルです",
    "配列をリストに変換します"
  ];
  //スタイル
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }
  //dataプロパティをlistステートで管理
  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
  }
  //レンダリング
  render() {
    return  <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect</h2>
      {/* /ListComponentにtitleを引数として渡す/ */}
      <List title="サンプルリスト" data={this.data} />
    </div>;
  }
}

//リスト全体をまとめて表示するComponent
class List extends Component {
  number = 1;
  title = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "blue"
  };
  render() {
    let data = this.props.data;
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {/* map関数でdata配列を繰り返す */}
          {data.map((item)=>
            // ItemComponentでnumber属性に番号（nmuber=1）、valueに配列の中身（テキスト）を指定
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}

//リストの各項目を表示するComponent
class Item extends Component {
  li = {
    listStyleType: "square",
    fontSize: "16px",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }
  num = {
    fontWeight: "bold",
    color: "red"
  }
  render() {
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    );
  }
}
export default App;
