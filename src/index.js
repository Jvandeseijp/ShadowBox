import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
const moralisAppId = 'VxE5zqqPPwUBiOJ4vcYsgA529AVRSg6pJUDI08Jb'
const moralisServerUrl = 'https://wktq1kdcj6ca.usemoralis.com:2053/server'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerUrl}>

      <App />
      </MoralisProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
