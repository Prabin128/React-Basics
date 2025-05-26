# What is useRef in React?

- The **`useRef`** hook is one of the built-in hooks in React.
- **`useRef`** is a hook that gives us a **mutable** reference to a DOM element or a **persistent value** that does not cause re-renders when changed.
- When a component renders in React, its `state` and other `variables` are typically **reset**. However, there are cases where we need to retain certain values even when the component re-renders. This is where the **`useRef`** Hook comes into play. It allows us to create a reference to a value that will persist between renders, ensuring that the value remains intact even if other parts of the component change.
- The **`useRef`** Hook serves two main purposes: **storing mutable values that do not cause a re-render when updated** and **storing references to DOM elements(Like `document.getElementById` in vanilla JS)**. 
- Unlike state variables, updating a ref does not trigger a component re-render.
- useRef() only returns one item. It returns an Object called `current`.
- When we initialize useRef we set the initial value: useRef(0).  
    `It's like doing this: const count = {current: 0}. We can access the count by using count.current.`

## Importing useRef in React

To start using the useRef Hook in our React project, import it from the React package:
```jsx
import { useRef } from 'react';
```

## Syntax
Once imported, we can declare a ref variable within our functional component using the useRef Hook:

```jsx
const ref = useRef(initialValue);
```
- useRef returns an object { current: initialValue }.
- The .current property can be updated without re-rendering the component.  

**What useRef Takes (Parameters)**  
`useRef(initialValue)`  
- `initialValue`:  The value we want to store in the `ref` when the component first renders. It sets the initial value of the ref object's `current` property. 
    - It can be **anything**: a number, a string, an object, null, etc.
    - This value is set only once, during the first render. This argument is ignored after the initial render.   
 
**🧠 Example:**
```jsx
const myRef = useRef(0); // initialValue is 0
```
Now `myRef.current` is `0` at the beginning.

**What useRef Returns**  
When we use useRef, it gives us back an object that looks like this:
`{ current: yourInitialValue }`
- This object only has **one property**: `current`.
- That `current` starts with the value we give it (called `initialValue`).
- We can **change** `current` later if we want.
- React will **not re-render** the component when we change `current`.

React will set the `initialValue` we pass to the **`useRef`** hook as the value of the `current` property of the returned `ref` object. As an example, if the `initialValue` is the boolean value `true`, then the `ref` object returned by the **`useRef`** hook will be `{ current: true }`. If we don't pass an initial value, the `current` property will be `undefined`.




## Simple Example
```jsx
function App() {
  const countRef = useRef(0);

  const incrementer = () => {
    countRef.current += 1;
    console.log('Clicked', countRef.current); // logs updated value
  };

  return (
    <div>
      <p>Check the console to see the count.</p>
      <button onClick={incrementer}>Click me</button>
    </div>
  );
}
```       

**What's Happening Here?**  

- **`useRef`** allows us to create a **reference object** that persists across renders and holds a **mutable value**.
- `useRef(0)` initializes `countRef` with a starting value of `0`.
- `countRef` is an object: `{ current: 0 }`
- Think of `countRef.current` as a variable inside a box that doesn't get cleared or reset when the component re-renders.
- Updating `countRef.current` does not cause a re-render of the component.
- When the button is clicked:
    - We increase `countRef.current` by `1`.
    - We log the new value to the **console**.
- Even though the value changes, the component **does not re-render**, so the UI doesn't update.
- This demonstrates that **`useRef`** can be used to store changing values without triggering React updates.  


# Implementing the useRef hook  

## 1: Accessing a DOM Element  

**🔍 Overview**  
In React, the useRef hook allows direct access to a DOM element. This can be useful for interacting with native DOM methods, such as setting focus to an input field when the component mounts.

The example below demonstrates how to automatically focus a username input field when a login form loads.

**Example: Auto-Focus on Username Input**  

```jsx
function Login() {

  const focusRef = useRef(null); // Create a ref object with an initial value of null

  useEffect(()=>{
    // Focus the input element when the component mounts
    focusRef.current.focus()
    console.log(focusRef.current);
    
  },[])

  return (
    <div>
      <form>
        <input type="text" ref={focusRef} placeholder='Username'/>
        <input type="text"  placeholder='Password'/>
      </form>
    </div>
  )
}
```   

- **`useRef(null)`**: creates a ref object, called **focusRef**, initialized with `null`.
- **`ref{focusRef}`** :  attached to a input element with the `ref={inputRef}` attribute. It tells React to assign the actual DOM node of the input to inputRef.current after rendering.
- **`useEffect(...)`**: Runs after the component mounts. Calls `.focus()` on the input element to set focus.
- **`focusRef.current.focus()`**: Directly calls the native DOM `focus()` method to set the cursor inside the input.

**📝 Use Case**  
Automatically focusing on the username field enhances usability by allowing users to start typing immediately without clicking.

 
