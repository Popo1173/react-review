import React, { Component } from 'react';
//react-redux のconnect をインポートする
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';

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
    );
  }
}//APP-Component

export default connect()(App);
