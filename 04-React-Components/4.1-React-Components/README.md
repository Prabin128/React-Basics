
# 1. What are React Components?  

- React apps are made out of components and React components are the building blocks of a React application.     
- A component is a piece of the UI (user interface) that has its own logic and appearance.  
OR, technically
- A component is a JavaScript function or class that optionally accepts inputs (called props) and returns a React element that describes how a section of the UI should appear.  
- Components are **independent** and **reuable** piece of code and **return HTML**.
- A component can be as small as a `button`, or as large as an `entire page`.

***Components allow developers to:***

- **Reusability**: Write once and reuse the component wherever required.
- **Separation of Concerns**: Break down a complex interface into smaller, manageable pieces.
- **Maintainability**: Make updates in one place, and they are reflected throughout the app.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

# 2. Components Naming Conventations   

React components are conventionally named in **PascalCase**, where each word begins with a **capital letter**.  
This helps differentiate React components from regular HTML elements, which are lowercase.

***Example:***

-  `Greetings` (React Component)
- `button`, `div`, `p` (HTML elements)   
By following `PascalCase`, React can easily distinguish custom components from built-in HTML elements.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


# 3. Types  of Components
There are two types of components:
1. `Functional Components `
2. `Class Components `

### 3.1. Functional Components   
A functional component is a simple JavaScript **function** that ***returns JSX*** (JavaScript XML). JSX is a syntax extension to JavaScript, allowing HTML-like syntax within JavaScript.   

```jsx
function Greetings() {
  return <h1>Good Morning, User!</h1>;
}
```  
Here, the `Greetings` function is a functional component that returns an `h1` tag. 

### 3.2. Class Components   
- A class component is a more traditional way of writing components in React.  
- Class components are ES6 classes that extend the **React.Component** class. 
- A class component must include the extends `React.Component` statement.  
- This statement creates an inheritance to `React.Component`, and gives our component access to `React.Component's functions`.  
- The component also requires a **render()** method, this method returns HTML.  

```jsx
import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    return <h1>Good Morning, User!</h1>;
  }
}
```  
Here,   
- `Greetings` is a **class component** that extends `React.Component`. This allows it to inherit the methods and behavior from React's base Component class.
- The `render()` method is **mandatory** in class components. It **returns JSX**, which is what React will render on the page. In this case, it renders an `<h1>` element with the text `"Good Morning, User!"`.


### Key Differences Between Functional and Class Components:
- **State Management**: Class components can manage local state, while functional components are stateless by default (though we can add state to functional components using hooks like `useState`).

- **Lifecycle Methods**: Class components provide lifecycle methods for managing side effects (e.g., `componentDidMount`, `componentWillUnmount`), while functional components use hooks like useEffect to achieve similar behavior.

Class components were the primary way to write React components before the introduction of hooks, which allow functional components to manage state and side effects as well. However, class components are still widely used, especially in older React codebases.   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


# 4. Splitting Code Into Multiple Components  
As our app grows, keeping all code in a single file becomes harder to manage.  
Breaking our UI into multiple components allows for cleaner code and better organization.

***For example***, we might start with a simple `h1` heading, but as the app grows, we could add a `div`, `navigation`, or `other elements`, which could make the code more complex.  
In such cases, it’s good practice to create separate components for each part of our UI.

Example:

```jsx
function Greetings() {
  return <h1>Good Morning, User!</h1>;
}
```
By separating the `Greetings` component, it becomes easier to maintain and manage its code separately.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


# 5. Importing and Exporting Components  

To organize React code effectively, we may want to keep our components in separate files.  
In such cases, we’ll need to **import** and **export** components between files.  

**Exporting a Component**: To export a component, use the `export` keyword. This allows the component to be imported in other files.

```jsx
export default Greetings;  
```
**Importing a Component**: To import a component into another file, use the `import` keyword. We specify the relative path to the file where the component is located.

```jsx
import Greetinngs from './Greetings';  
```
This makes the `Heading` component available to use in the file where it’s imported.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

# 6. Best Practices for Writing React Components  

**Component Size**: Components should be small and focused. A component should ideally do **one thing**.

**Self-Closing Tags**: If a component has no children, use a self-closing tag.

```jsx
<Greetings />  
```
**Functional Components**: ***`Prefer functional components over class components when possible`***, as they are simpler, especially with hooks.

**Use Prop Types**: For better maintainability, always define `propTypes` for our components to validate the type and shape of props.

**Destructure Props**: Destructure props directly in the function parameter for cleaner code.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


# 7. Creating and using First Component 

**`App.jsx`**  
```jsx
import './App.css'

function Greetings() {

  return (
    <>
      <h1>Good morning! This is displayed from the component. </h1>
    </>
  )
}


export default App;
```
**`main.jsx`**   

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**`Explanation:`**  

`in App.jsx`
**Functional Component: `App`:**

- `App` is a **functional component** in React. It is a JavaScript function that returns JSX, which React will render as UI elements.
- The purpose of the `App` component is to render a heading (`<h1>`) on the screen.
- We use it in `main.jsx` to display the content (`<h1>Good morning! This is displayed from the component.</h1>`).
- A functional component **returns JSX**, which defines how the UI will look.  

`in main.jsx`
**Rendering the `App` Component:**
- In `main.jsx`, we are importing the `App` component from `App.jsx` and rendering it inside the root div (`<div id="root"></div>`).
This happens inside `<StrictMode>`, which is a wrapper component provided by React to help identify potential problems in an application during development.
The `createRoot` function from `react-dom/client` is used to mount the component tree (in this case, just `App`) to the DOM.   


**Purpose of Components:**

- `App`: This component displays a simple message, `"Good morning! This is displayed from the component."`. In real-world applications, components like this are used to break the UI into reusable and maintainable chunks. In this case, `App` could eventually become a container component for other UI elements as the app grows.  

**Usage of Components from the above example:**

- The `App` component is imported into main.jsx and rendered using the `createRoot` method. React looks at this component and renders the JSX that it returns, in this case, the heading `<h1>Good morning! This is displayed from the component.</h1>`.  

- The purpose of having this `App` component is to encapsulate the logic for the part of the UI that we want to render (in this case, just the heading). As we build the application further, we can add more components, manage state, and pass props between components.   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

# 8. Component File Organization  
As our app grows, it’s important to keep our components organized. Here’s a basic structure for organizing React components:

```bash
/src
  /components
    Greetings.jsx
    List.jsx
    App.jsx
  main.jsx 
  ```
This way, all our components are in the /components folder, and the `main.jsx` file acts as the entry point, which imports the necessary components.   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


# Final Code Example 

**1 `./components/greetings.jsx`**  
```jsx  
function Greetings() {
    return(
        <>
            <h1>Good morning! This is displayed from the component. </h1>
       </>
    );
}
export default Greetings;
```

**2 `./components/list.jsx`**    
```jsx  
function List() {
    return(
        <ul>
            <li>Item number 1</li>
            <li>Item number 2</li>
            <li>Item number 3</li>
        </ul>
    );
}
export default List;
``` 

**3 `main.jsx`**    
```jsx  
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greetings from './components/greetings.jsx'
import List from  './components/list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Greetings />
   <List />
  </StrictMode>,
)
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


