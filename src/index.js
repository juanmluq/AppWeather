import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
//para usar Browser Router debemos envolver la etiqueta en este caso App
<BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
