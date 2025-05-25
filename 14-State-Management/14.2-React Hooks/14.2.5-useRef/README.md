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