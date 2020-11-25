import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './Person';
import reportWebVitals from './reportWebVitals';

let app = (
  // components must be wrapped inside a div since JSX only allows one root element
  <div>
    <Person name='Valdal14' age='42' />
    <Person name='Lefemas' age='45' />
  </div>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
