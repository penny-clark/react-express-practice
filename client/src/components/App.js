import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button.js';
import Nav from './Nav.js';
import TextBox from './TextBox.js'

function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Nav>
        <p>
          {!data ? "Loading..." : data}
        </p>
      </Nav>
      <body className="App-main">
        {/* <img src="https://www.torontogardens.com/wp-content/uploads/2012/06/AsclepiasTuberosa-ButterflyWeed-Closeup.jpg" alt="butterfly-weed" /> */}
        <TextBox>
          <p>Say hello back to the server!</p>
        <p>Number of hellos: {count}</p>
        <Button className={"Button--ok"} onClick={() => setCount(count => count + 1)}>hi</Button>
        <Button className={"Button--nevermind"} onClick={() => setCount(count => count - 1)}>bye</Button>
        </TextBox>
        <TextBox className={"Text-Box--sidebar"}>
          <form>
          <p>Sign up for our mailing list!</p>
            <fieldset>
              <label>
                <p>Enter your email:</p>
                <input name="email" />  
              </label>
            </fieldset>
            <Button type="submit">Submit</Button>
          </form>
        </TextBox>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </body>
    </div>
  );
}

export default App;