import React from 'react';
import logo from './logo.svg';
import './App.css';


/* eslint-disable */
  //alert('foo');  
/* eslint-enable */
// where each string is a global string or Object
/* "no-restricted-globals": [
  "error",
  {
    "name": "window",
    "message": "Use Local Parameter Instead"
  }
],
*/
/* 
var a = "hello";
var a = "sdf";
*/
console.log( void 0);
console.log(window);
const asy = 10;
const bsy = 10;
console.log(asy === bsy);
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);

export default App;
