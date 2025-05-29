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

💡 Also, the **object returned by useRef remains the same between renders**. This stability makes it ideal for storing data that we want to **persist across renders** without triggering a re-render or being reset like local variables inside a function.

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
- **`useEffect(...)`**: Runs after the component mounts. Calls `.focus()` on the input element to set focus.
- **`focusRef.current.focus()`**: Directly calls the native DOM `focus()` method to set the cursor inside the input.
- **`ref{focusRef}`** :  attached to a input element with the `ref={inputRef}` attribute. It tells React to assign the actual DOM node of the input to inputRef.current after rendering.

**`⚠️ Note:`** The `ref.current` value for DOM elements is `null` during the initial render. It only gets populated **after the component mounts**, so if we try to access it immediately during rendering, it won’t work.
✅ That’s why we typically access or manipulate DOM elements inside a `useEffect` with an empty dependency array `[]` to ensure it runs **after the DOM is ready**.

**📝 Use Case**  
Automatically focusing on the username field enhances usability by allowing users to start typing immediately without clicking.

 
## 2. Storing Mutable Values Without Causing Re-renders   

**🔍 Overview**  
The **`useRef`** Hook in React can also store **mutable values** that persist across renders **without triggering a re-render** when updated. This makes it ideal for tracking values like previous state, timeouts, or counters that don't need to appear in the UI.  

Unlike `useState`, changing a `useRef` value doesn’t cause the component to update. The `.current` property of the ref can be updated directly, and React will not re-render in response.  

**Example: Tracking Render Count (Without Causing Extra Renders)**  
```jsx
import { useRef, useEffect, useState } from 'react';

function TrackRenderCount() {
  const [input, setInput] = useState('');
  const renderCount = useRef(1); // Start at 1 since the component will render once on mount

  useEffect(() => {
    renderCount.current += 1; // Increment on every re-render
  });

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>Component has rendered {renderCount.current} times</p>
    </div>
  );
}
```  
**How It Works**

- `renderCount` is created with `useRef(1)`, which is not tied to the render cycle.
- Inside `useEffect`, we increment `renderCount.current` every time the component renders.
- This doesn't cause a re-render itself—it only tracks how many renders occurred.  

**📝 Use Case**  
This pattern is useful when you want to:

- Track or cache values between renders (like timers, previous props, scroll positions).
- Avoid unnecessary re-renders that would happen with useState.
- Maintain non-UI state (like a mutable counter or ID reference) without affecting performance.


## 3: Tracking State Changes (Storing previous State with useRef)   
**🔍 Overview**    
- React does not provide a built-in way to get the previous state or props. However, with the help of **`useRef`**, we can store the previous value and update it during each render cycle — without triggering re-renders. 
- The **`useRef`** Hook can be used to keep **track of previous state values**.
- This is because we are able to persist **`useRef`** values between renders.

**Example: Tracking Previous State Value**   
```jsx
function PreviousValue() {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // This will store the previous value

  useEffect(() => {
    prevCountRef.current = count; // Update the ref with the current count
  }, [count]); // Run this effect whenever count changes

  const prevCount = prevCountRef.current; // Access the previous count

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
```

### 🔁 What Happens on First Render?  

**1. Component mounts (initial render):**

```jsx
const [count, setCount] = useState(0);
const prevCountRef = useRef();  // current = undefined initially
```
- `count` is initialized to `0`.
- `prevCountRef.current` is **undefined**, because we haven’t set it yet.

**2. useEffect runs:**

```jsx
useEffect(() => {
  prevCountRef.current = count;
}, [count]);
```
- Since `count = 0, prevCountRef.current = 0`.
- Now the **previous value is "0"**, ready for the next render.

**🖱 What Happens When We Click the Button?**
```jsx
<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
``` 

***🧠 Step-by-Step Lifecycle After Button Click***

**🟡 1. setCount() is called**

```jsx
setCount((prev) => prev + 1)
```
- **React schedules a re-render** with `count = count + 1`.

**🔁 2. Component re-renders**

**React calls the component function again:**  
```jsx
const [count, setCount] = useState(1); // count is now 1
const prevCountRef = useRef();         // this returns the **same object** as before
```
- **`useRef()`** **does not create a new object**, it gives us the same `prevCountRef` object from the last render.   
 
**🟠 3. Code after render is evaluated:** 

```jsx
const prevCount = prevCountRef.current;
```
- At this moment:

  - `count = 1`
  - `prevCountRef.current = 0` ← this is the value from previous render, which we saved in the last `useEffect`.

So:

```js
<p>Current: 1</p>
<p>Previous: 0</p>
```

This is **exactly what we wan**t — the previous value!  

**🟢 4. useEffect runs (after the render is committed)**  

```jsx
useEffect(() => {
  prevCountRef.current = count;
}, [count]);
```  

Now, since `count` has changed to `1`, the effect runs and updates the ref:

```jsx
prevCountRef.current = 1;
```  

Now the previous value is updated and ready for **next render**.


**🔄 This Cycle Repeats**

So if you click again:

- `count` becomes `2`
- The component re-renders.
- `prevCountRef.curren`t is still `1` → displayed as "Previous".
- Then `useEffect` updates it to `2` after render.



**📝 Use Case**
This technique is useful when we want to:

- Compare current and previous values for animations, conditionals, or debugging.
- Track changes over time without causing re-renders.   



# 🔁 useRef vs 🌀 useState – React Hook Differences  

While both useRef and useState can store values, they behave differently:
  - useRef does not trigger re-renders when updated, making it ideal for persisting values between renders.
  - useState triggers re-renders whenever the state value is updated.
  - Use useRef for storing references and preserving values, and useState for UI updates.  
  
**1. Purpose**  

**`useState`**: Used to store and manage ***stateful data*** that triggers re-renders on updates.

**`useRef`**: Used to persist ***mutable values*** that do not trigger re-renders when changed. Also used to reference DOM elements.

**2. Triggers Re-render?**  

**`useState`**: ✅ Yes – Updating state causes the component to re-render.

**`useRef`** ❌ No – Updating .current does not trigger re-render.

**3. Use Cases**
**`useState`**

Form inputs

Toggle UI states (e.g., modal open/close)

Data fetched from APIs

**`useRef`**

Accessing DOM nodes `(ref={myRef})`

Storing timers, intervals, or previous values

Preventing unnecessary re-renders

**4. Example Syntax**  

```jsx
// useState example
const [count, setCount] = useState(0);
setCount(count + 1); // re-renders component
```  

```jsx
// useRef example
const inputRef = useRef(null);
inputRef.current.focus(); // does NOT re-render component
```  

**5. Stored Value**  

**`useState`** Value is managed by React and survives re-renders.
**`useRef`** .current is a mutable container that persists across renders.
