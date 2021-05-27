import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button
      className={props.className || "Button"}
      onClick={props.onClick}
      >
        {props.children}
    </button>
  ) 
}