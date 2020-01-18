import React, { Component } from "react";

class Welcome extends Component {
  constructor (props){
    super (props);
  }

  render() {
    return (
      <div className='card text-left'>
        <div className={`${ 'card-body' } ${ 'welcomeCard' }`}>
          <div className='welcomeCardHeader'>Welcome to Very Simple ToDo App!</div>
          <div>Get started now by adding a todo on the left.</div>
        </div>
      </div>
    );
  }
}

export default Welcome;
