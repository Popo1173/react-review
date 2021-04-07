// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render() {
    return  <div>
      <h1>{this.title}</h1>
      <p>{this.message}</p>
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
