# Counter
Let's make a counter component!

## Goal
Currently, the boilerplate is rendering a labeled counter that is displaying '0', as well as a button labeled 'Increase' that doesn't do anything when clicked. Edit the boilerplate so that when the button is clicked, a new variable that you create in state to keep track of the counter is increased, and the '0' in the component increases and re-renders accordingly.

## Tasks
1. Set initial state inside the constructor. Hint: Use this.state and create a counter variable that starts at 0.
2. Create a method that can increment the counter variable in state. Hint: Use the setState() method to update state and trigger a re-render.
3. Don't forget to bind the method to the class inside the constructor so that the "this" keyword will work inside the callback.
4. Inside the render/return and in the button tag, pass the method from step two as the onClick event handler. Hint: Remember the syntax from the toggle exercise.
5. Replace the '0' inside the span tags with JavaScript that references the counter variable in state. Hint: Remember to use curly braces and reference state using this.state. 