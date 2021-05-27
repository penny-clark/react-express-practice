import React from 'react';
import './Nav.css';

export default function Nav(props) {
  return (
    <header className="Nav">
      {props.children}
      </header>
  )
}