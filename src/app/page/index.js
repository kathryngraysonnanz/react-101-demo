import React, {useState} from 'react';
import './page.css'

export default function Page(props) {

  const {value: [value, setValue]} = {value: useState(false), ...(props.state || null)};

    return (
      <div className="page-wrapper">
         <h3>Page Component</h3>
         <p>Hello {props.name}</p>

          { value ?
           <p>Now I'm true</p> :
           <p>Now I'm false</p>
          }

          <button
            onClick={()=>setValue(!value)}>
          Toggle
          </button>
        </div>

    );
  }
