import React from 'react';
import './button.css';
const Button = ({onAction, btnText}) => {
  return ( 
  <button 
  class="btn btn-dark btn-sm"
  onClick={onAction}>{btnText}
  </button>

)
}

export default Button;
