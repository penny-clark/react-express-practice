import React from 'react';
import './TextBox.css';


export default function TextBox(props) {

  return (
    <div className={props.className || "Text-Box"}>
      {props.children}
    </div>
  )
}