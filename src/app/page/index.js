import React, {useState} from 'react';
import './page.css'

export default function Page(props) {

    return (
      <div className="page-wrapper">
         <h3>Page Component</h3>
         <p>Hello {props.name}</p>

         <p>The current value is {props.value === true ? "true" : "false"}</p>

          <button
            onClick={()=>props.updateValue(!props.value)}>
          Toggle
          </button>
        </div>

    );
  }
