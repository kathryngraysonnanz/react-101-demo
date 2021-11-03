import './home.css';
import Page from '../page'
import React, { useState } from 'react';

export default function Home() {

  const [name, setName] = useState(null)
  const [value, setValue] = useState(false)

  function checkName(user) {
    if (user !== null && user !== "") {
      return ("Hello, " + user + "! Let's learn some React.")
    } else {
      return ("Who are you?")
    }
  }

  return (
    <div className="home-wrapper">
      <h3>Home Component</h3>
      <div className="flex-wrapper">
        <div>
          <p>Please enter your name:</p>
          <input type="text"
            onChange={event => setName(event.target.value)}>
          </input>
          <p>{checkName(name)}</p>

          <p>The page component value is {value === true ? "true" : "false"}</p>
        </div>

        <Page
          name={name}
          state={{value: [value, setValue]}}
        />
        </div>
    </div>
  );
}
