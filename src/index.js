import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';


ReactDOM.render(
  <React.StrictMode>
   <Calculator heading="Welcome to my Calculator App"/>
  </React.StrictMode>,
  document.getElementById('root')
);


