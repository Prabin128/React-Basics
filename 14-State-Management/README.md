# Understanding the Basics of State in React    


## Introduction to State in React

- State is a central concept in React that allows us to manage and track the data that can change over time in an application. 
- The UI (User Interface) of a React app is driven by the state of the app. 
- When the state of an application changes, React updates the UI to reflect the change.

To understand how state works in React, we need to explore two distinct ways of handling changes in the user interface: **Declarative Programming** and **Imperative Programming**.  


## 1. What is State?  

- **What is State?**  

    - **State** is a built-in React object that stores data or information about a component.
    - It is used to store data that can change over time and will trigger UI updates when updated.
    - It is used to manage dynamic data in a component, meaning data that can change over time.
    - When the state of a component changes, React automatically re-renders the component to reflect the updated state.  
    - Think of state as a way to store information that affects how a component looks or behaves (e.g., the count in a counter app, the form values in a form).

- **Why is State Important?**

    - State allows React components to be **interactive** and **dynamic**.
    - Without state, components would only render static content and couldn’t respond to user interactions or changes in data.

**How React uses state to track changes in the UI**  

- React keeps track of state internally for each component.

- When the state changes, React re-renders the component and its child components to reflect the updated state in the UI.

- React optimizes the re-rendering process to only update parts of the UI that depend on the state that has changed.  

### Difference Between Props and State

**Props:**

- Props are **immutable** (cannot be changed) and are passed from a parent component to a child component.

- They are used to pass data down the component tree.

**State:**

- State is **mutable** (can be changed) and is managed within a component.

- It is used to manage data that changes over time, such as user input, toggles, or counters.  


**Example: Props vs State**
```jsx

// Parent Component
function Parent() {
  const message = "Hello from Parent!"; // This is a prop
  return <Child message={message} />;
}

// Child Component
function Child(props) {
  return <div>{props.message}</div>; // Props are read-only
}
```
In the above example, `message` is a prop passed from Parent to Child. It cannot be changed by the Child component.






