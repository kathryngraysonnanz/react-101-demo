import React, {Component} from 'react';
import './page.css'

export default class Frame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statue: false
    };
  }

  render() {
    return (
      <div className="page-wrapper">
         <h3>Page Component</h3>
         <p>Hello {this.props.name}</p>

          { this.state.status ?
           <p>Now I'm true</p> :
           <p>Now I'm false</p>
          }

          <button
            onClick={() => this.setState({
              status: !this.state.status
            })
          }>
          Toggle
          </button>
        </div>

    );
  }
}
