<a id="readme-top"></a> 

# Understanding the Basics of State in React    

## Introduction to State in React

- State is a central concept in React that allows us to manage and track the data that can change over time in an application. 
- The UI (User Interface) of a React app is driven by the state of the app. 
- When the state of an application changes, React updates the UI to reflect the change.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

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

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)      

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
 

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

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

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)    

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

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

# Comparing Declarative and Imperative Programming

| **Aspect**                      | **Declarative Programming**                                        | **Imperative Programming**                                             |
|----------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Description**                  | Describes the "what" the UI should look like based on state        | Describes the "how" to update the UI by directly manipulating the DOM |
| **Control Over DOM**             | React manages DOM updates automatically                             | Developer manually controls the DOM                                   |
| **Readability**                  | Easier to read and maintain, as it focuses on the logic of state management | Can be harder to maintain, especially as the app grows                |
| **Reactivity**                   | UI updates automatically when state changes                        | Manual DOM updates are needed on each change                           |
| **Example**                      | React components re-render automatically when state changes        | Direct DOM manipulation using event listeners                          |

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

## When to Use Each Approach:

- **Declarative Programming (React)** is generally preferred for most UI updates because it makes the code cleaner and easier to manage.

- **Imperative Programming** is typically used when you need to have more fine-grained control over how and when the DOM is updated, but it can become complex as your application grows.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)   

# Difference Between Props and State

**Props:**

- Props are **immutable** (cannot be changed) and are passed from a **parent component** to a **child component**.
- They are used to pass data down the component tree.
- The child component can only read props, not modify them.

**State:**

- State is **mutable** (can be changed) and is managed **within** a component.
- It is used to manage **dynamic data** that changes over time, such as user input, toggles, or counters.   
- The component that owns the state can modify it.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

## Props vs State in Code

### Props Example (Immutable)

In this example, the **Parent** component passes data to the **Child** component using **props**. The **Child** component cannot modify the `message` prop.  

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
- In the Parent component, `message` is a prop that is passed to the Child component.
- The Child component simply displays the message but cannot change it.

## State Example (Mutable)  

In this example, the **Parent** component uses **state** to manage a counter. 
The **Child** component can trigger a change in the state by calling a function passed down as a **prop**.  

```jsx
import React, { useState } from 'react';

// Parent Component
function Parent() {
  const [count, setCount] = useState(0);  // State to manage the count

  const increment = () => {
    setCount(count + 1);  // Modify the state
  };

  return (
    <div>
      <Child count={count} increment={increment} />
    </div>
  );
}

// Child Component
function Child(props) {
  return (
    <div>
      <p>Current Count: {props.count}</p>  // Read the count from props
      <button onClick={props.increment}>Increment</button>  // Modify state in Parent
    </div>
  );
}

```    

- In the **Parent** component, `count` is a **state** variable, and `setCount` is the function that updates it.
- The **Child** component receives `count` and `increment` as **props**, and when the button is clicked, it calls `increment`, which updates the state in the **Parent** component.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)    

## Key Differences Between Props and State

| **Aspect**           | **Props**                                    | **State**                                  |
|----------------------|----------------------------------------------|--------------------------------------------|
| **Mutability**       | Immutable (cannot be changed)                | Mutable (can be changed)                   |
| **Source**           | Passed from a parent component to a child    | Managed within the component itself        |
| **Purpose**          | Used to pass data from parent to child       | Used to manage dynamic data that changes over time |
| **Modification**     | Cannot be changed by the child component     | Can be changed within the component that owns the state |
| **Usage**            | For data that does not change                | For data that changes over time            |



[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

# Code Description   

- In this project, we are building a simple React application that demonstrates the use of state to control the UI. 
- The example uses a to-do list item (e.g., "Buy Milk") where the user can toggle a strikethrough effect by clicking on the text. 
- This interaction is achieved using React's `useState` hook to manage the state of whether the item is completed (struck through) or not.
   
**Key Concepts Covered:**  

- **State in React**: Using useState to manage dynamic data.
- **Conditional Rendering**: Updating the appearance of the UI based on the state.
- **Component Structure**: Organizing components in React for modularity and reuse. 

## Explanation of the Code:
**1. App Component:**
The **App** component contains the state (`isDone`) and the function (`toggleStrikeThrough`) to modify the state.   
The `App` component passes the state and the function down to the child component (`TodoItem`) as props.  

```jsx
function App() {
  const [isDone, setIsDone] = useState(false);  // Declare the state variable

  const toggleStrikeThrough = () => {
    setIsDone(!isDone);  // Toggle the state. It changes the state (isDone) to the opposite of its current value (true to false or false to true).
  };

  return (
    <div>
      <TodoItem isDone={isDone} toggleStrikeThrough={toggleStrikeThrough} />
    </div>
  );
}

```  

- `useState(false)`: This hook initializes a state variable `isDone` with a default value of `false` (meaning the item is not marked as done initially). `setIsDone` is the function used to update the state.

- `toggleStrikeThrough`: This function toggles the value of `isDone` between `true` and `false` each time it's called. This allows us to toggle the strikethrough effect on the to-do item.

- The `TodoItem` component is rendered inside the `App` component and receives `isDone` and `toggleStrikeThrough` as props. The state and state-modifying function are passed down for use in the child component. 

**2. TodoItem Component:**
The TodoItem component is a child component that renders the to-do item (`Buy Milk`) and applies a strikethrough effect when the user clicks on it. It receives `isDone` and `toggleStrikeThrough` as props from the parent component (`App`). 

```jsx
const TodoItem = ({ isDone, toggleStrikeThrough }) => {

  const strikeThroughStyle = isDone ? { textDecoration: 'line-through' } : null;

  return (
    <p style={strikeThroughStyle} onClick={toggleStrikeThrough}>
      Buy Milk
    </p>
  );
};

```
- `strikeThroughStyle`: This variable determines whether the text should be displayed with a strikethrough. If `isDone` is `true`, the text will have a `line-through` decoration (i.e., the strikethrough effect). If isDone is false, no styling is applied.

- `onClick={toggleStrikeThrough}`: The onClick event handler listens for when the user clicks on the "Buy Milk" text. When clicked, it triggers the `toggleStrikeThrough` function passed down from the parent component, which toggles the value of `isDone`.

**How It Works:**  

**1. Initial State**: When the app first loads, `isDone` is `false`, so no strikethrough is applied to the text "Buy Milk."

**2. Clicking the Text**: When the user clicks on the "Buy Milk" text, the `toggleStrikeThrough` function is called, which toggles the `isDone` state between `true` and `false`.

**3. Conditional Styling**: Based on the value of `isDone`, the `strikeThroughStyle` variable is either set to { `textDecoration: 'line-through'` } (when `isDone` is `true`) or `null` (when `isDone` is `false`). This updates the appearance of the text by either applying or removing the strikethrough effect.

**4. Re-render**: React automatically re-renders the component whenever the state (`isDone`) changes, updating the UI to reflect the new state.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)     

## Sample Output

1. When the `isDone` state variable is `false` (`Initial State`):  

<div align="center">
    <img src="https://github.com/Prabin128/React-Basics/blob/main/assets/state_todo_when_false.png " width="700" >
</div>  

2. When the `isDone` state variable is `true` (`After the user click the "Buy Milk"`):  

<div align="center">
    <img src="https://github.com/Prabin128/React-Basics/blob/main/assets/state_todo_when_true.png " width="700" >
</div>  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#state_in_React)   

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>