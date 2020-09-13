import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
// import SingleFieldCalculator from './components/SingleFieldCalculator';


ReactDOM.render(
  <React.StrictMode>
   <Calculator heading="Welcome to Math Buddy"/>
   {/* <SingleFieldCalculator heading="Welcome to Math Buddy"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


