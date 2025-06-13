# React useReducer Hooks  

## Introduction  

- React **`useReducer()`** hook is a state hook used often as a versatile alternative to `useState()`. 
- It used for **managing more complex state logic** than `useState` can comfortably handle.
- It allows us to manage state using a reducer function.
- It accepts a **reducer** function as its first parameter and the **initial state** as the second. 
- useReducer **returns an array** that holds the current state value and a dispatch function to which we can pass an action and later invoke it. 
- It is useful when the state transitions depend on previous state values or when you need to handle actions that can update the state differently.

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