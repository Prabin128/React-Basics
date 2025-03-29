# Understanding useState Hook in React (Functional Components)

## What is useState?

- The useState hook is a built-in React function that allows functional components to manage state. 
- In simpler terms, it helps store and update values that change over time, like user input, counters, or toggles. 
- Before hooks, only class components could manage state, but now functional components can too!

## Setting Up State with `useState`    

### 1. Importing useState 

To use useState, first  we need to import `useState` hook from React: 

```jsx
import { useState } from "react";
```

### 2. Basic Syntax  

We then define state inside our functional component. The useState hook is called inside our functional component like this:  

```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```  
- **`stateVariable`**: Holds the current value of the state.
- **`setStateFunction`**: Function that updates the state and triggers a re-render.
- **`initialValue`**: The starting/default value of the state.   

## Example: Counter App

Here’s a simple counter app where clicking a button increases a number.
```jsx
import { useState } from "react";

function Counter() {
  // Initializing state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;

```   

### Explaination 

**State Initialization**

When we call `useState(0)`, we're:

1. Creating a new state variable called `count`
2. Setting its initial value to `0`
3. Receiving an array with:
    - `count`: The current state value.
    - `setCount`: A function that updates count.
4. Updating State
    - Clicking the button triggers `setCount(count + 1)`, increasing `count` by 1.
    - React then re-renders the component to reflect the updated count.  

**Updating State**  

Never modify state directly! Always use the setter function.

✅ Correct: 
```jsx 
setCount(count + 1);
```  

❌ Wrong:  
```jsx
count = count + 1; // This won't work!
```  
**Re-rendering Components**

When we call the state setter function (like `setCount`):

1. React updates the state value
2. React re-renders the component with the new state
3. The UI updates to reflect the new state.  

## Important Details

1. **Multiple State Variables**: We can use multiple `useState` hooks in one component:  

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('Alice');
```  

2. **State is Isolated**: Each component gets its own state. If you render two Counters, they won't share state.

3. **Functional Updates**: When the new state depends on the previous state, use the function form: 

```jsx
setCount(prevCount => prevCount + 1);
```
3. **Object State**: We can store objects in state:

```jsx
const [user, setUser] = useState({ name: 'John', age: 30 });
// Update with spread operator to merge changes
setUser({ ...user, age: 31 });
```

## Common Mistakes to Avoid

1. **Calling useState conditionally**: Always call hooks at the top level of your component.    
❌ Wrong:

```jsx
if (condition) {
    const [state, setState] = useState(0);
}
```  

2. **Forgetting the state is asynchronous**: State updates don't happen immediately.
3. **Trying to mutate state directly**: Always create new values when updating state.


## Practical Example: Enhanced Counter

Let's make a more complete counter with increment, decrement, and reset:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```  

## Summary

-`useState` lets us add state to functional components
- It returns an array with the current state and a setter function
- Always use the setter function to update state
- State updates trigger re-renders
- We can have multiple state variables in one component