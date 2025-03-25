# Understanding the Basics of State in React    


## Introduction to State in React

- State is a central concept in React that allows us to manage and track the data that can change over time in an application. 
- The UI (User Interface) of a React app is driven by the state of the app. 
- When the state of an application changes, React updates the UI to reflect the change. 

## 1. What is State?  

- **What is State?**  

    - **State** is a built-in React object that stores data or information about a component.
    - It is used to store data that can change over time and will trigger UI updates when updated.
    - It is used to manage dynamic data in a component, meaning data that can change over time.
    - When the state of a component changes, React automatically re-renders the component to reflect the updated state.  
    - It represents the data that determines how the application’s UI should look at any given point in time.
    - Think of state as a way to store information that affects how a component looks or behaves (e.g., the count in a counter app, the form values in a form).

- **Why is State Important?**

    - State allows React components to be **interactive** and **dynamic**.
    - Without state, components would only render static content and couldn’t respond to user interactions or changes in data.

**How React uses state to track changes in the UI**  

- React keeps track of state internally for each component.

- When the state changes, React re-renders the component and its child components to reflect the updated state in the UI.

- React optimizes the re-rendering process to only update parts of the UI that depend on the state that has changed.  


# Basic Explanation:

Think of **state** like a variable inside a component that React keeps track of. When we change the state, React automatically updates the UI to reflect the new data.  
   
***Step 1: Create state***  

```jsx 
  const [count, setCount] = useState(0); // Initializing state
```  
- `count` → A state variable that stores the current count value.

- `useState(0)` → A React Hook that creates state, initializing `count` with `0`.

- Why use `useState`? → To make the component remember and update values dynamically.

- `setCount` → A function that updates count, triggering a re-render to reflect the new value.

***Step 2: Display state***  

```jsx 
  <p>Count: {count}</p> 
```  
-  We show the current value of `count` inside the `<p>` tag using `{count}`.  

***Step 3: Update state***  

```jsx
<button onClick={() => setCount(count + 1)}>Increase</button> 
```   
- When the button is clicked, `setCount(count + 1)` increases `count` by `1`, and React updates the UI automatically.
 


**Complete Example**   

```jsx
import React, { useState } from "react";

function Counter() {
    // Step 1: Create state
  const [count, setCount] = useState(0); // Initializing state

  return (
    <div>
        {/* Step 2: Display state */}
      <p>Count: {count}</p> 

      {/* Step 3: Update state */}
      <button onClick={() => setCount(count + 1)}>Increase</button> 

    </div>
  );
}

export default Counter;

```  
Here: 


- `useState(0)` initializes state with `0`.

- `count` holds the current value.

- `setCount` updates the state.

- When the button is clicked, `setCount(count + 1)` updates the state, and React **automatically re-renders** the component.  


# State in React: Declarative vs Imperative Programming  

- The UI (User Interface) of a React app is driven by the state of the app. When the state of an application changes, React updates the UI to reflect the change.

- To understand how state works in React, we need to explore two distinct ways of handling changes in the user interface: **Declarative Programming** and **Imperative Programming**.  

## Declarative Programming in React
- In React, **Declarative Programming** refers to describing how the UI should look depending on the state, without manually managing the DOM. 
- Instead of telling the browser step-by-step how to change the DOM, React manages the updates automatically based on the state changes.

- When using declarative programming in React, we create components that automatically reflect the current state.   
- For example, when the state of a component changes, React takes care of re-rendering the component and updating the DOM to match the new state.
 
**Example: To-Do List with Strikethrough on Click**  

In a simple To-Do list app, we may want to toggle the "strikethrough" effect on a to-do item when clicked. 
The state variable `isDone` can track whether a task is completed (checked off) or not.
```jsx  
const [isDone, setIsDone] = useState(false);

```  
Here, `isDone` is a piece of state that determines whether the task has been completed or not. Initially, it is set to false.  

Here's an example of how this could be done declaratively:  
```jsx
import React, { useState } from 'react';

function App() {
  const [isDone, setIsDone] = useState(false);  // Declare the state variable

  const toggleStrikeThrough = () => {
    setIsDone(!isDone);  // Toggle the state
  };

  const strikeThroughStyle = isDone ? { textDecoration: 'line-through' } : null;

  return (
    <div>
      <p style={strikeThroughStyle} onClick={toggleStrikeThrough}>
        Buy Milk
      </p>
    </div>
  );
}

```  

**How it Works:**  

- The `useState` hook is used to create a state variable isDone and a function setIsDone to update the state.

- When the user clicks on the to-do item (`<p>`), the `toggleStrikeThrough` function updates the state.

- Based on the value of `isDone`, the `strikeThroughStyle` object conditionally applies a CSS style (`line-through`) to the paragraph.

- React automatically updates the UI when the state changes, re-rendering the component with the new style.

**Key Takeaway:**  

Declarative programming in React allows us to describe how the UI should look based on the state, and React handles the re-rendering and updates automatically.

## Imperative Programming

In **imperative programming**, we explicitly tell the program how to update the UI. 
We manipulate the DOM directly, specifying every step required to make changes.  
We tell the program ***how*** to achieve a specific result by manually manipulating the DOM. 
Instead of describing the UI's state and letting the framework update the DOM for us, imperative programming involves step-by-step instructions to modify the DOM based on events or actions.  

Example: In an imperative style, you would manually update the DOM element’s properties when the user interacts with it. 
```jsx 
// Manually applying the line-through style when the button is clicked
document.getElementById('todoItem').style.textDecoration = 'line-through';
```  
In this case, we are directly telling the program how to update the style, and the UI is updated only when we invoke this change.  


**Example: Imperative Approach to Strikethrough**  

Here's how the same to-do item with a "strikethrough" effect could be implemented imperatively using vanilla JavaScript:  

```html
<!DOCTYPE html>
<html>
<head>
  <title>Imperative Example</title>
</head>
<body>
  <div id="app">
    <p id="todo-item">Buy Milk</p>
    <button id="strike-button">Change to strike-through</button>
  </div>

  <script>
    const todoItem = document.getElementById('todo-item');
    const strikeButton = document.getElementById('strike-button');

    strikeButton.addEventListener('click', () => {
      todoItem.style.textDecoration = 'line-through';
    });
  </script>
</body>
</html>
```  

**How it Works:**  

- A `<p>` element with the id `todo-item` represents the to-do item.

- A `<button>` element with the id `strike-button` allows the user to trigger the strike-through effect.

- When the button is clicked, the `click` event listener changes the `textDecoration` style of the `todo-item` directly by accessing the DOM.  

**Key Takeaway:**  

In imperative programming, we need to manually manipulate the DOM, specifying exactly how elements should be updated. 
Every time we want to change something, we interact with the DOM directly, often using event listeners.  


# Comparing Declarative and Imperative Programming

| **Aspect**                      | **Declarative Programming**                                        | **Imperative Programming**                                             |
|----------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Description**                  | Describes the "what" the UI should look like based on state        | Describes the "how" to update the UI by directly manipulating the DOM |
| **Control Over DOM**             | React manages DOM updates automatically                             | Developer manually controls the DOM                                   |
| **Readability**                  | Easier to read and maintain, as it focuses on the logic of state management | Can be harder to maintain, especially as the app grows                |
| **Reactivity**                   | UI updates automatically when state changes                        | Manual DOM updates are needed on each change                           |
| **Example**                      | React components re-render automatically when state changes        | Direct DOM manipulation using event listeners                          |

## When to Use Each Approach:

- **Declarative Programming (React)** is generally preferred for most UI updates because it makes the code cleaner and easier to manage.

- **Imperative Programming** is typically used when you need to have more fine-grained control over how and when the DOM is updated, but it can become complex as your application grows.



### Difference Between Props and State

**Props:**

- Props are **immutable** (cannot be changed) and are passed from a **parent component** to a **child component**.
- They are used to pass data down the component tree.
- The child component can only read props, not modify them.

**State:**

- State is **mutable** (can be changed) and is managed **within** a component.
- It is used to manage **dynamic data** that changes over time, such as user input, toggles, or counters.   
- The component that owns the state can modify it.


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
