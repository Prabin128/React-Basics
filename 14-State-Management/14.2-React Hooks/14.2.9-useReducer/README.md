# React useReducer Hooks  

## Introduction  

- React **`useReducer()`** hook is a state hook used often as a versatile alternative to `useState()`. 
- It used for **managing more complex state logic** than `useState` can comfortably handle.
- It allows us to manage state using a reducer function.
- It accepts a **reducer** function as its first parameter and the **initial state** as the second. 
- useReducer **returns an array** that holds the current state value and a dispatch function to which we can pass an action and later invoke it. 
- It is useful when the state transitions depend on previous state values or when we need to handle actions that can update the state differently.

## Syntax of useReducer  
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```  
- `reducer`: A function that determines the next state based on the current state and an action.It takes state and action as arguments and returns the next state. The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialState`: The initial state value. It can be of any type.
- `state`: It represents the current value and is set to the `initialState` value during the initial render.
- `dispatch`: A function we call to send an action to the reducer to update the state. This function updates the state value and always triggers a re-render, just like the updater function in `useState`.


## 🧠 Understanding Reducers and Actions in React  

### What Are Reducers and Actions?  
Reducers and actions are part of a **state management pattern**, especially popular when using tools like `useReducer` (built-in React hook) or libraries like Redux. They help us manage complex state logic in a predictable and scalable way.

This pattern is especially useful when:
- We have multiple state variables.
- The way our state updates depends on what kind of "event" happens (e.g. incrementing a counter, submitting a form, updating a list, etc.).
- We want a clear, centralized, and traceable way to manage state.

### Reducer Function   
A reducer is a **pure function** that:
- Takes the current `state` and an `action` object.
- Looks at the `action.type`.
- Returns a **new state** based on the `action.type`.  

**📘 Syntax**  
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'set_value':
      return { count: action.payload };
    default:
      return state; // No change
  }
}
```  
**Why switch?**  
The `switch` statement checks what type of action is being dispatched. It's like saying:

`"Hey, what kind of thing are we trying to do? Are we incrementing? Decrementing? Setting a specific value?"`

We could also use `if` statements, but `switch` is cleaner and more readable when we have multiple cases.  

**Key rules for reducers:**

- They must be ***pure functions*** (no side effects)
- They ***should not mutate the current state directly***
- They should ***return the same state if no changes*** are needed.  

**Actions**  
- An **action** is a plain JavaScript object. It **describes** ***what just happened or what should happen***.
- It typically has:
    - A **type** property (string): Describes what action to perform
    - Optional payload: Additional data needed to update the state.  

***Minimum structure:***
```jsx
{ type: 'increment' }
```  
***With additional data (called a payload):***   
```jsx
{ type: 'set_value', payload: 10 }
```  

***✅ What is type?***  
`type` is a **string** that tells the reducer what kind of update needs to happen. It's how the reducer knows which case to run.

***✅ What is `payload`?***  
The `payload` is **any additional data** needed to perform the update.
- If we're just incrementing a counter, we might not need a payload.
- If we're setting the counter to a specific number, we'll need to pass that number through the `payload`.  


# Getting Started with useReducer  
Before diving into building anything, the first step is to import the hook from the React package:

```jsx
import { useReducer } from "react";
```
Next, we'll use the hook inside our component:

```jsx
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // JSX will go here
  );
}
```
Here, `useReducer` takes in two main arguments:  
- `reducer`: a function that determines how state should change in response to an action.
- `initialState`: the default state value when the component loads for the first time.  

## Breaking Down the Reducer Function
The heart of `useReducer` lies in the **reducer function**. This function controls how the state is updated based on dispatched actions. It takes two parameters:  
- `state`: the current state
- `action`: an object describing the change to be made

Here's a sample skeleton of a reducer:
```jsx
function reducer(state, action) {
  // logic to return new state based on action type
}
```
The `action` is typically an object with a `type` property. It can also contain other properties that describe the update more specifically.  

## Building a Simple Counter  
To see everything in action, let’s build a basic counter application with increment and decrement functionality. We'll use the reducer to manage a simple state object with a `count` property.

**1. Define Initial State**
```jsx
const initialState = { count: 0 };
```  

**2. Create the Reducer Logic**  

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```
In this reducer: 
- The `increment` case increases the `count` by 1.
- The `decrement` case reduces the `count` by 1.
- The `default` case simply returns the existing state in case of an unknown action.  

### Dispatch Function and Event Handlers  
The `dispatch` function is used to trigger state changes. It accepts an action object, which the reducer uses to determine how to update the state.

Let’s define our event handlers:
```jsx  
function handleIncrement() {
  dispatch({ type: "increment" });
}

function handleDecrement() {
  dispatch({ type: "decrement" });
}
```
Each handler dispatches a specific action, and the reducer handles that action appropriately.  

### Returning the JSX
With the reducer and event handlers in place, we can now structure the UI of our counter app:

```jsx
return (
  <>
    <h1>Count: {state.count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
  </>
);
```
Each button triggers a dispatch, and the UI updates based on the new state returned from the reducer.  

### How It Works Behind the Scenes
When a button is clicked:

1. The corresponding `dispatch` function is called.
2. This triggers the `reducer` function with the current state and dispatched action.
3. The reducer processes the action and returns the new state.
4. React re-renders the component using the updated state.

At the moment `dispatch` is called, the current state is still the previous one — the update will take effect on the next render cycle. To visualize this better, add a console log inside the reducer:

```jsx
function reducer(state, action) {
  console.log("Current State:", state);
  console.log("Dispatched Action:", action);

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```
This will show how state changes step-by-step as actions are dispatched.  

**Visual Flow Summary**
```sql
User Clicks Button
       ↓
Function dispatches Action
       ↓
Reducer receives Action + Current State
       ↓
Reducer returns New State
       ↓
Component re-renders with Updated Count
```  
## Why Use useReducer?
So when should we reach for `useReducer` over `useState`?

- **Complex state logic**: When updates depend on previous state or involve multiple sub-values.
- **Centralized logic**: All update logic lives in one function, improving code organization.
- **Predictability**: The state transitions are easy to trace through action types and reducer conditions.


## Complete Code   

```jsx
import './App.css'
import { useReducer } from 'react'

// 1. Define Initial State
const initialState = {count: 0}

// 2. Create the Reducer Logic
const reducer =(state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1 };
    case 'decrement':
      return {...state, count: state.count - 1 };    
    default:
      return state;
  }
}

function App() {

  // useReducer hook: [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initialState);

   // Event Handlers
  function handleIncrement() {
    dispatch({type: 'increment'})
  }

  function handleDecrement() {
    dispatch({type: 'decrement'})
  }

   // 3. Returning the JSX
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
```  

**🟢 First Render:**  

When our app runs for the first time:

- React executes `useReducer(reducer, initialState)` → gives us `{ count: 0 }` as the state.
- Our JSX displays: `Count: 0`  

**🟡 What Happens on Button Click?**    

Let’s say the user clicks the Increment button:

**1. `handleIncrement()` runs**:
```jsx
dispatch({type: 'increment'})
```
We're telling React:

`"Dispatch an action to the reducer with type 'increment'"`

**2. React Calls the Reducer**  
React internally does:

```jsx
newState = reducer(currentState, action)
```
So:

```jsx
reducer({ count: 0 }, { type: 'increment' })
// returns => { count: 1 }
```  

**3. React Sets the New State**  

React sees that the state changed from `{ count: 0 }` to `{ count: 1 }`. So it:

- Updates the internal state
- Re-runs our component to reflect the new state

**4. Our Component Re-renders**  
This time:

```jsx
const [state, dispatch] = useReducer(...) 
```  

returns:

```jsx
state = { count: 1 }
```
So the JSX becomes:

```html
<h1>Count: 1</h1>
```
That’s how the UI updates.


**✅ Why action.payload in set?**  
Because we're not adding or subtracting — we're **replacing** the current value with a **new one** that comes from **outside**, like this:

```jsx
case 'set':
  return { ...state, count: action.payload }
```
Here:

- We **don’t care what the previous count was**
- We just want to set it to whatever value is inside `action.payload` (e.g., `100`)

**🎯 Simple Rule of Thumb:**   

**Use** `state.` **when...**
→ We need the **existing value** to calculate the new one (like incrementing, toggling, etc.)

**Use** `action.` **when...**
→ We need **external data** passed through `dispatch` to perform the update.