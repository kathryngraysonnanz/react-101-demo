import './home.css';
import Page from '../page'
import React, { useState } from 'react';

export default function Home() {

  const [name, setName] = useState(null)

  function checkName(user) {
    if (user != null && user != "") {
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
        </div>

        <Page
          name={name}
        />
        </div>
    </div>
  );
}
