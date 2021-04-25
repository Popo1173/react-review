import React, { Component } from 'react';
//Rect コンポーントインポート
import Rect from './Rect'
import './App.css';


let theme = {
  light: {
    backgroundColor : "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor : "#006",
    color: "#eef",
    padding: "10px"    
  }
};

//React.createContext(theme.light)　でコンテキストを設定
//theme.darkに切り替えることでスタイルを切り替える
const ThemeContex = React.createContext(theme.light);

class App extends Component {
  static contextType = ThemeContex;

  render(){
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="This is Content sample" />
        <Message value="※これはテーマのサンプルです。" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContex;

  render(){
    return(
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContex;

  render(){
    return(
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;
