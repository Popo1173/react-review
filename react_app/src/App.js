import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';

class App extends Component {
  //空の配列
  data = []

  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }
  area = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  }

  //dataプロパティをlistステートで管理
  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
    this.doAction = this.doAction.bind(this);
  }
  //引数(e)からクリックした画面x,y座標を取得
  //data[]にpushする
  //setStateで値を更新する
  doAction(e) {
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y});
    this.setState ({
      list:this.data
    });
  }
  //draw関数で四角形を描画する
  draw(d){
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25)  + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3"
    };
    return <div style={s}></div>
  }

  render() {
    return  <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect</h2>
      {/* /クリック位置を崇徳する/ */}
      <div style={this.area} onClick={this.doAction}>
        {/*data配列をmap関数に入れる　 */}
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>;
  }
}
export default App;
