import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginComponent from './components/LoginComponent';
import Home from "./components/home";
ReactDOM.render(
  <React.StrictMode>
    <div style={{margin: '30px'}} >
    <h2>Please Login For Going To Home Page</h2>
    <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
