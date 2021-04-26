import React, { Component } from 'react';
//react-redux のconnect をインポートする
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/FindForm';
import FindForm from './memo/DelForm';



//APPコンポーネント
class App extends Component {
  td = {
    with: "250px"
  }
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}><FindForm /></td>
              <td style={this.td}><DelForm /></td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    )
  }
}//APP-Component

export default App;
