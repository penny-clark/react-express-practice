import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button.js';
import Nav from './Nav.js';
import TextBox from './TextBox.js'

function App() {
  const [message, setMessage] = useState(null);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("/api")
      .then((res) => setMessage(res.data.message));
  }, []);

  function joinMailList(email) {
    console.log(email)
    return axios
     .post("/api/mailinglist", {
      email: email
    })
    .then(res => {
      console.log('Success:', res)
      setEmail("")
    })
    .catch(error => console.error('Error:', error))
  }

  return (
    <div className="App">
      <Nav>
        <p>
          {!message ? "Loading..." : message}
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
          <p>Sign up for our mailing list!</p>
            <fieldset>
              <label>
                <p>Enter your email:</p>
                <input name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>  
              </label>
            </fieldset>
            <Button onClick={() => joinMailList(email)}>Join</Button>
          
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
