import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //Step 1: add "counter" variable to state

    //Step 3: bind the handle click method to the class
  }

  //Step 2: create a handleClick method

//Steps 4 and 5: add an onClick method to the increase button that will increase the "0" based on changes in state
render() {

  return (

    <div id="mainArea">
      <p>Button count: <span>0</span></p>
      <button id="mainButton">Increase</button>
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