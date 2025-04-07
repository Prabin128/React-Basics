# Introduction to useEffect

**`useEffect`** is a React Hook that lets us perform side effects in function components.   

**👉 What are side effects?**  
Side effects refer to operations that can affect something outside the scope of the current function, such as:

- Fetching data from an API
- Directly manipulating the DOM
- Setting up subscriptions
- Cleaning up resources (like event listeners or timers)

# Why do we need useEffect?

**Functional components are just functions** — and in functions, we can't do things like fetching data or subscribing to events directly in the main body of the function without affecting how the component renders.

So, **`useEffect`** helps:
- Separate rendering from side effects
- Ensure those side effects only run when needed.  

React components need to be pure functions with respect to their props and state. This means they should:

- Not modify external state
- Return the same output for the same inputs
- Not contain side effects

However, real applications need to perform side effects. **`useEffect`** provides a way to do this ***without violating the purity principle of components***.

Without **`useEffect`**, we might be tempted to perform side effects directly in the component body, which would cause problems:
```jsx
function BadExample() {
  // ❌ Never do this - side effect in render
  document.title = 'New Title';
  
  return <div>Hello World</div>;
}
```  
- `useEffect` ensures our side effects run at the appropriate time in the component lifecycle.

# ✅ Basic Syntax

The basic syntax of useEffect is:

```jsx
useEffect(() => {
  // Our side effect code here
}, [dependencies]);
```  

**`useEffect`** takes two arguments:  
1. **A callback function** —  A function containing the side effect code we want to run.
2. **A dependency array** — controls when the effect runs.



# Component Lifecycle and useEffect  

Understanding when `useEffect` runs is crucial. Here's how it fits into the component lifecycle:  

## 1. Mounting Phase: 

- **What happens?**

    - When the component is rendered for the first time (added to the DOM), React will call the effect inside `useEffect`.
    - This happens **after** the initial render, and the effect function is executed **only once** when the component is mounted.

- **Example:**

```jsx
useEffect(() => {
  console.log("Component has mounted");
}, []); // Empty dependency array means it runs once  
```  

## 2. Updating Phase: 

- **What happens?**

    - Whenever the component re-renders (due to changes in state or props), React checks for any dependencies in `useEffect`.
    - **If the dependencies have changed** since the last render, React **cleans up** the previous effect (if a cleanup function is provided) and then runs the new effect.

- **Example:**

```jsx
useEffect(() => {
  console.log("Component has updated");
}, [someState]); // This will run whenever `someState` changes 
```
If `someState` changes, the old effect will be cleaned up and the new effect will run.

## 3. Unmounting Phase:
- **What happens?**

    - When the component is removed from the DOM (unmounted), React runs the cleanup function if we provided one inside useEffect.

- **Example:**

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  return () => {
    clearInterval(timer); // This is the cleanup, which will run on unmount
  };
}, []); // Runs only once when the component mounts and cleans up when unmounting 
```  


## Summary:  

- **Mounting**: `useEffect` runs after the first render.
- **Updating**: `useEffect` runs after each render if dependencies change, and cleans up the old effect before running the new one.
- **Unmounting**: `useEffect` runs the cleanup function when the component is removed from the DOM.




# ✅ Step-by-Step Breakdown with Examples  

## useEffect with Dependency Array  

The dependency array controls when the effect runs. Here are the possibilities:

**1. No dependency array**: Effect runs after every render  

```jsx
useEffect(() => { /* runs every render */ });
```  

**2. Empty dependency array**: Effect runs only once after initial render (like componentDidMount)  

```jsx
useEffect(() => { /* runs once */ }, []);
``` 

**3. Dependencies specified**: Effect runs when any dependency changes    

```jsx
useEffect(() => { /* runs when count changes */ }, [count]);
```

## 🟢 1. useEffect without Dependency Array (Runs after every render) 

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This runs after every render");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
```    
**Explanation:**  
In this case, **`useEffect`** **is executed after every render of the component**.

- **How**: When React renders a component, after rendering the JSX, it checks if any `useEffect` hooks are defined. If they are, they will run right after the component renders. The hook without a dependency array (`[]`) doesn't have any condition to stop it from running, so it runs on every render.

- **Why**: `useEffect` without a dependency array essentially says, "run after every render, regardless of whether state or props change". This is useful for performing side-effects that should happen every time the component updates, such as logging or DOM manipulation.

**When it runs:**
- **After the first render**: React runs the effect after rendering the component for the first time.

- **After every update (like when `count` changes)**: Every time the state changes, `useEffect` runs because there's no dependency array to limit when it should run.  



## 🟡 2. useEffect with an Empty Dependency Array (Runs once, like `componentDidMount`)  

```jsx
useEffect(() => {
  console.log("Runs only once after initial render");
}, []);
```  

**Explanation:**  
This `useEffect` runs only `once`, just after the initial render of the component.

- **How**: The empty dependency array (`[]`) tells React to only run the effect once — after the component is first rendered to the DOM. The effect will **not run again** on subsequent renders or updates, because there’s no dependency to trigger it.

- **Why**: This is the perfect place for **one-time setup operations** like fetching data, setting up subscriptions, or adding event listeners, which should only occur once when the component is mounted, and not every time the component re-renders.

**When it runs**:
- **After the first render only**: The effect only runs once after the initial render and will not run on subsequent renders.  


## 🔵 3. useEffect with Dependencies (Run only when specific values change)  

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This runs after every render");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
```  
**Explanation:**  

This `useEffect` is **dependent on the count state**. It will run only when `count` changes.

-  **How**: The dependency array [count] tells React to monitor the `count` state. If `count` changes, the effect runs again. If count doesn’t change, the effect won't run on subsequent renders.

- **Why**: This is useful when we need to perform side-effects based on changes to a specific value or state. For example, if we want to fetch new data or make a network request every time a value changes, this is where we would do it.

**When it runs:**  

- **After the first render**: It will run once when the component mounts because it checks the state when the component is rendered.

- **Any time `count` changes**: It will run again whenever `count` is updated (e.g., if a button clicks to update the `count` state).


## 🟠 4. Cleanup in useEffect (Like componentWillUnmount)

```jsx
useEffect(() => {
  console.log("Effect started");

  return () => {
    console.log("Cleanup: effect ended or component unmounted");
  };
}, []);
```  

**Explanation:**
The **cleanup function** inside `useEffect` runs when the component is about to be removed from the DOM or when the effect is re-executed due to dependency changes.

- **How**:  The cleanup function (inside the `return` statement) is a way to **undo** any changes made by the effect. It runs when the component unmounts or when the effect is about to rerun (due to dependencies changing). In this example, the effect runs once because the dependency array is empty, and the cleanup happens when the component is unmounted.

- **Why**: This is helpful for cleaning up side effects such as:

    - Clearing intervals or timeouts.
    - Removing event listeners.
    - Cancelling API requests to avoid memory leaks.

**When it runs:**  
- **Cleanup function** runs when the component unmounts or when the effect is about to be re-executed (for example, if the dependency array changes).

## 🟣 5. useEffect with setInterval (Timer Example with Cleanup)

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);  // Empty dependency array ensures this runs only once

  return <h2>Timer: {seconds} seconds</h2>;
}
```  

**Explanation:**   
Here, we create a **timer** that increases every second using `setInterval`. The effect sets the interval once and cleans it up when the component unmounts.

- **How**: `useEffect` sets an interval when the component first mounts. The cleanup function (`clearInterval`) ensures that when the component is unmounted, the interval is cleared, avoiding memory leaks or unwanted side-effects.

- **Why**: Using an interval or timeout in a component can cause issues if it’s not cleared when the component is removed. This cleanup ensures that the timer is cleared once the component is no longer in use.

**When it runs**:   
- **On initial render**: The effect sets the interval when the component mounts.

- **Cleanup when component unmounts**: The cleanup function clears the interval to avoid unnecessary operations.  

## 🟤 6. Multiple useEffect Hooks in One Component  
```jsx
useEffect(() => {
  console.log("Fetch user profile");
}, []);

useEffect(() => {
  console.log("Theme changed");
}, [theme]);

```  

**Explanation**:   
We can use multiple `useEffect` **hooks** in a single component to manage different side effects independently.

- **How**: Each `useEffect` is executed independently. The first one runs only once (after the first render), while the second one runs whenever the theme state changes.

- **Why**: Dividing side effects into separate `useEffect` hooks is useful when we want to manage different logic in different ways. It avoids having too many conditions inside one effect and makes the code easier to maintain.

**When it runs**:  
-  The first `useEffect` runs **once after the initial render**.
- The second `useEffect` runs **whenever `theme` changes**.  


## 🔴 7. useEffect and Fetching API Data

```jsx
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);  // Empty array means this effect runs once after the first render

  return (
    <div>
      <h3>Fetched Posts</h3>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```   

**Explanation**:
This example fetches data from an API only **once**, right after the component mounts.

- **How**: The effect fetches data once because of the empty dependency array (`[]`). The fetch is only triggered once when the component mounts.

- **Why**: Fetching data when the component mounts is a common use case. We don't want to make an API call on every render, just when the component is first displayed.

**When it runs**:
- **On the first render**: Fetch data when the component mounts for the first time.