import React from 'react';
import './Button.css';

export default function Button(props) {
  // function setClassName(buttonprops) {
  //   if(buttonprops === "ok") return "Button--ok";
  //   if(buttonprops === "nevermind") return "Button---nevermind";
  //   return "Button";
  // }
  return (
  <button
    className={props.className}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  ) 
}