# useContext Hook in React 

**Overview**
- useContext is a **React Hook** that lets **functional components** use **React Context**.

To say it simply:

- 🔹 useContext helps our component **get values from a central place (context)**, instead of passing them **manually as props** down through every level of your component tree (from parent to child, and so on).   

# What is Context in React (Basic Idea)?  

- Think of **Context** like a **global storage** — a shared place where we keep some data that **many components** might need (e.g., theme, language, logged-in user info). 
- Context provides a way to **pass data through the component tree** without having to pass props down manually at every level. It's like a global variable, but scoped to a tree of React component.  

**✅ Common use cases:**

  - Theme (light/dark)
  - Authentication status
  - Language preferences
  - Shared state or config

**✅ Example (Before Context):**
```jsx
<App theme="dark" />
```
Inside `<App>` we pass the theme to `<Header>`, `<Header>` passes to `<Navbar>`, then to `<Button>`... and so on. This is called **prop drilling.**
Too much hassle.

**✅ Example (With Context + useContext):**   

Create a context to store `theme = dark`, then ANY component can directly read it. No need to pass it step-by-step!

# Why Use useContext? (in detail)  

## 🚫 Problem: Prop Drilling:
Without context, we might pass data through many components even if only the bottom one needs it.
Prop drilling happens when we pass data through several layers of components that don’t need it, just to get it to one that does. This makes the code harder to read and maintain.

### With Prop Drilling (Without useContext)
```jsx
// App.jsx
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <h1>App Component</h1>
      <Page theme={theme} />
    </div>
  );
}

function Page({ theme }) {
  return (
    <div>
      <h2>Page Component</h2>
      <Section theme={theme} />
    </div>
  );
}

function Section({ theme }) {
  return (
    <div>
      <h3>Section Component</h3>
      <Toolbar theme={theme} />
    </div>
  );
}

function Toolbar({ theme }) {
  return (
    <div>
      <h4>Toolbar Component</h4>
      <button>{`Current Theme: ${theme}`}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

```
**Disadvantage:**  

- `theme` is only needed in the `Toolbar`, but it's passed down through `Page` and `Section`, which don’t actually use it.
- This is **prop drilling** — and it becomes more painful as our app grows.

**✅ Solution: Using useContext**  
We can eliminate this problem using React's Context API.   


**Example 2: Solving with useContext**  
```jsx
// App.jsx
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

// Step 1: Create the context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    // Step 2: Provide the context
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>App Component</h1>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

function Page() {
  return (
    <div>
      <h2>Page Component</h2>
      <Section />
    </div>
  );
}

function Section() {
  return (
    <div>
      <h3>Section Component</h3>
      <Toolbar />
    </div>
  );
}

// Step 3: Use the context in the child component
function Toolbar() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h4>Toolbar Component</h4>
      <button>{`Current Theme: ${theme}`}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```
**Advantage:**
- Only `Toolbar` accesses the `theme`, and intermediate components like `Page` and `Section` no longer need to pass props.
- This makes our code **cleaner, more maintainable, and scalable**.

# How to Import useContext
To use `useContext` in our component, import it from React like this:

```jsx
import { useContext } from 'react';
```
- `{ useContext }`: This pulls out just the `useContext` hook from React.

# Syntax of useContext   

```jsx
const contextValue = useContext(MyContext);
```  
**Parameters of useContext:**  
- `MyContext`: A single argument - the context object returned by or we get from `React.createContext()`.

**What does useContext Returns?**
- It returns **current value** of the context from the nearest `<Provider>` above in the component tree.
- If no provider is found, the **default value** is used.  

**Explanation:**  

- `MyContext`: This is the **context object** we created using `React.createContext()`. Example:
```jsx
const MyContext = React.createContext(defaultValue);
```
- `useContext(MyContext)`:  This hook subscribes the component to the context so that it always uses the latest value from the nearest <MyContext.Provider>.

- `contextValue`: This is the **current context value** provided by the closest matching `<MyContext.Provider>` above in the component tree.



# Proper Syntax and Explanation
**Step-by-step Syntax:**
```jsx
// 1. Create a Context
const MyContext = React.createContext(defaultValue);

// 2. Provide the Context in a parent component
<MyContext.Provider value={/* some value */}>
  <ChildComponent />
</MyContext.Provider>

// 3. Consume the Context in a child component using useContext
import React, { useContext } from 'react';

function ChildComponent() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```  

**Explanation:**
- `React.createContext(defaultValue)`
    - Creates a context object with an optional default value.
    - `defaultValue` is used **only when no matching `<Provider>` is found above in the component tree.

- `<MyContext.Provider value={someValue}>`
    - Wraps part of the component tree and provides the context value.
    - All child components using `useContext(MyContext)` will receive this value.

- `useContext(MyContext)`
    - Takes a context object (from `createContext`) and returns the current context value.
    - Triggers re-render when the context value changes.


# How Context API Works with useContext
Let’s say we want to pass a theme (`dark` or `light`) across our app.

**Step 1. Create the context**
```jsx
import React from 'react';

const ThemeContext = React.createContext('light');
```
- `React.createContext('light')` creates a **context object**.
- `'light'` is the default value if no provider is found.
- We store it in `ThemeContext`.

**Step 2. Wrap our app (or part of it) with the Provider**  
```jsx
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```
- `<ThemeContext.Provider>` wraps any part of the app that needs access.
-  `value="dark"` means all child components will now get `"dark"` if they use this context.

**Step 3. Use useContext in child component**
```jsx
import React, { useContext } from 'react';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Theme is {theme}</button>;
}
```
- `useContext(ThemeContext)` fetches the value (`"dark"`) from the nearest `<Provider>`.
- We store that in a `theme` variable and use it inside the component.

**🔄 Flow Recap:**
1. Create the context → `const ThemeContext = React.createContext()`
2. Provide the value → `<ThemeContext.Provider value="dark">`
3. Use the value → `const theme = useContext(ThemeContext)`


# How does it work?

The useContext hook allows to consume values from a React Context, enabling easy access to shared state across multiple components without **prop drilling**. Here’s how it works:
- useContext hook consumes values from a React Context, making them accessible to functional components.
- First, create a Context object using React.createContext(), which holds the shared state.
- Use useContext to access the context value in any component that needs it, avoiding prop drilling.
- When the value of the Context updates, all components consuming that context automatically re-render with the new value.

# When to Use Context

**Use context when:**

- We need to access the same data from many components at different nesting levels
- We find ourself passing props through multiple intermediate components
- The data is truly global in nature (theme, authenticated user, etc.)

**Don't use context for:**
- Data that's only needed by a single component and its direct children
- Data that changes frequently (consider state management libraries instead)  



# Advanced Concepts  

**1. Providing Both Value and Setter**

To allow child components to read and update the context, **pass an object as value**:  

```jsx
<ThemeContext.Provider value={{ theme, setTheme }} /> 
```  

And consume like this:  
```jsx
const { theme, setTheme } = useContext(ThemeContext);

<button onClick={() => setTheme("light")}>Light Mode</button>
```  

**2. Creating a Custom Context Hook: Best Practice**

To keep code clean and consistent:
```jsx
// theme-context.js
import { createContext, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
```  
Now in any component:  
```jsx
const { theme, setTheme } = useTheme();
```  
✅ Cleaner import  
✅ Reusable pattern  

**3. Default Value Behavior**

If no `<Provider>` wraps our component, useContext will return the default value:
```jsx
const MyContext = createContext("default");
const value = useContext(MyContext); // returns "default" if no provider
```  

**4. Re-renders and Performance**

- Any value change in `<Provider value={...}>` ***causes all components consuming that context to re-render***.
- Even if the component doesn’t directly use the part of the value that changed.
- For frequent updates (e.g., keystrokes), prefer `useState` or `useReducer`.   

**5. Nested Providers Hell**

Using too many nested providers can get messy:  

```jsx
<AuthContext.Provider>
  <ThemeContext.Provider>
    <LangContext.Provider>
      <App />
    </LangContext.Provider>
  </ThemeContext.Provider>
</AuthContext.Provider>
```  
✅ Solution: Create a single wrapper component:   

```jsx
function AppProviders({ children }) {
  return (
    <AuthContext.Provider value={...}>
      <ThemeContext.Provider value={...}>
        <LangContext.Provider value={...}>
          {children}
        </LangContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}
```  

## ⚠️ Important Notes
- `useContext` will cause a component to **re-render** whenever the context value changes.
- We can only use `useContext` **inside functional components or other hooks**.  

## ⚠️ Potential Pitfalls   
**1. Re-rendering**  
All components using `useContext` will **re-render** when the value changes — even if they don’t use the changed part of the context.  

**2. Overusing Context**
Don’t use context for frequently changing data like form input fields or animation states. This can make the app slow.  

**3. Nested Context Hell**   
If we use too many different contexts, your app may look like this:    

```jsx
<ThemeContext.Provider>
  <AuthContext.Provider>
    <LangContext.Provider>
      <MyApp />
    </LangContext.Provider>
  </AuthContext.Provider>
</ThemeContext.Provider>
```  
**Solution**: Combine them into a single provider if possible or use a custom `AppProvider`.    
