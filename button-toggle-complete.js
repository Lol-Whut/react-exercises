import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  
    //set initial state here
    this.state = {
      buttonOn: true
    };

    //bind the handleClick method to the Toggle class
    this.handleClick = this.handleClick.bind(this);
  };

  //create a handleClick method that will toggle the value of the button in state
  handleClick() {
    this.setState(state => ({buttonOn: !state.buttonOn}));
  }

  //add an onClick to the button that calls the handleClick method
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.buttonOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)

//set initial state inside the Toggle class constructor (hint, use this.state and create a variable that indicates whether the toggle is OFF or ON)
//create a handleClick method that toggles the variable you just created in state between OFF and ON
//use the bind method to bind handleClick to the Toggle class inside the constructor
//inside the render/return, add an onClick to the button so that the handleClick method runs when the button is clicked.
//edit the "ON" inside the button tag so that the button displays ON or OFF depending on state.