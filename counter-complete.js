import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //add "counter" variable to state
    this.state = {
      count: 0
    }

    //bind the handle click method to the class
    this.handleClick = this.handleClick.bind(this);
  }

  //create a handleClick method
  handleClick() {
    this.setState(state => (
      {count: state.count+=1}
    ));
  }

//add an onClick method to the increase button that will increase the "0" based on changes in state
render() {

  return (

    <div id="mainArea">
      <p>Button count: <span>{this.state.count}</span></p>
      <button id="mainButton" onClick={this.handleclick}>Increase</button>
    </div>

  )

}

}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)

//use this.state to add a counter to state
//create a handleClick method in the constructor that, when invoked, increases the counter in state by one. (Hint, use this.setState to alter state)
//use the bind method to bind the handle click method to the Counter class
//inside the render/return, add onClick functionality to the button; invoke handleClock on each click.
//replace the "0" with a correct reference to the counter variable in state. 