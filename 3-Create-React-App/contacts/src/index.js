import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import the Contacts components
import Contacts from './components/Contacts';
import './components/Contacts.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />

    <Contacts contacts={[
      {id: 1, fullName: 'Valerio'},
      {id: 2, fullName: 'Leonor'},
      {id: 3, fullName: 'Grazia'}
    ]}/>

    <Contacts contacts={[
      {id: 1, fullName: 'valdal14'},
      {id: 2, fullName: 'lefemas'},
      {id: 3, fullName: 'missilotta'}
    ]}/>

    </div>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
