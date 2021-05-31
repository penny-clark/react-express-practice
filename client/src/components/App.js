import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button.js';
import Nav from './Nav.js';
import TextBox from './TextBox.js'

function App() {
  const [message, setMessage] = useState(null);
  const [count, setCount] = useState(0);
  const [gif, setGif] = useState("");
  const [search, setSearch] = useState("");
  const [coolGif, setCoolGif] = useState("");

  useEffect(() => {
    axios.get("/api")
      .then((res) => setMessage(res.data.message));
  }, []);

  // useEffect(() => {
    
  // }, [gif]);

  return (
    <div className="App">
      <Nav>
        <p>
          {!message ? "Loading..." : message}
        </p>
      </Nav>
      <body className="App-main">
        <TextBox>
          <p>Say hello back to the server!</p>
        <p>Number of hellos: {count}</p>
        <Button className={"Button--ok"} onClick={() => setCount(count => count + 1)}>hi</Button>
        <Button className={"Button--nevermind"} onClick={() => setCount(count => count - 1)}>bye</Button>
        </TextBox>
        <TextBox className={"Text-Box--sidebar"}>
          <p>Get some GIFS!</p>
            <fieldset>
              <label>
                <p>What kind of GIF do you want:</p>
                <input name="gifs" value={search} onChange={(event) => setSearch(event.target.value)}/>  
              </label>
            </fieldset>
            <Button onClick={() => setGif(search)}>Get em</Button>
          
        </TextBox>
        {gif &&
        <TextBox>
          <img className="gif_image" src={coolGif} alt="gif" />
        </TextBox>
        }
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
