# Button Toggle
Let's make a functioning React component!

## Goal:
Currently, the provided React boilerplate renders a button that says 'ON' and doesn't do anything when it's clicked. Edit the boilerplate so that when the button is clicked, a new variable you create in state is updated and the button toggles accordingly to say 'ON' or 'OFF'.

## Tasks:
1. Set initial state inside the Toggle class constructor. Hint: Use this.state and create a variable that indicates whether the toggle is 'ON' or 'OFF'. [This](https://reactjs.org/docs/react-component.html#constructor) section of the React docs has some useful information about constructors.
2. Create a method that toggles the variable you just created in state between 'ON' and 'OFF'. Hint: Check out [this](https://reactjs.org/docs/react-component.html#setstate) section in the React docs that discusses the setState() method, which you can use in your method to update state and trigger a re-render of your component. 
3. So far, we have a variable in state that we want to update and a method that is capable of doing so. However, before we can add the method to the HTML section inside the return, we have to bind the method to the class inside the constructor. Note that if we don't bind the method here, the 'this' keyword will not work when we call the callback. Hint: The React docs on event handling ([here](https://reactjs.org/docs/handling-events.html)) have some great info.       
4. Inside the render/return, add the method we've created to the button as an onClick event handler. Hint: Adding an event handler to a React element with JSX is pretty similar to adding an event handler in HTML, with a few differences. In HTML, you pass in a string (i.e. onClick="methodName()"), whereas in JSX you pass in a function (i.e. onClick={methodName}). Revisit the event-handling docs from step three for an example. 
5. Edit the 'ON' text inside the button so that it renders 'ON' or 'OFF' conditionally inside the button, depending on the variable we created in step one. Hint: Replace the 'ON' with JavaScript functionality inside curly braces ({}). Remember that you can use this.state.theVariableName to access the current state.     
