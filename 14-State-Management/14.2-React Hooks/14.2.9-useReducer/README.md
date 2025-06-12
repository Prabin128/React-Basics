# React useReducer Hooks  

## Introduction  

- React **`useReducer()`** hook is a state hook used often as a versatile alternative to `useState()`. 
- It allows us to manage state using a reducer function.

## Syntax of useReducer  
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```  
- `reducer`: A function that determines the next state based on the current state and an action.It takes state and action as arguments and returns the next state. The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialState`: The initial state value. It can be of any type.
- `state`: It represents the current value and is set to the `initialState` value during the initial render.
- `dispatch`: A function we call to send an action to the reducer to update the state. This function updates the state value and always triggers a re-render, just like the updater function in `useState`.