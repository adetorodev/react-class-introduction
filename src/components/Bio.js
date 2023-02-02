import React, { Component } from "react";
import './Bio.css'
export class Bio extends Component {
  render() {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      first
    //   }
    // }
    return (
      <div className="bio">
        <h2>Name</h2>
        <div>
          <h5>Ezekiel Adetoro</h5>
        </div>
        <div>
          <p>Senior Developer</p>
        </div>
      </div>
    );
  }
}

// export default Bio;
