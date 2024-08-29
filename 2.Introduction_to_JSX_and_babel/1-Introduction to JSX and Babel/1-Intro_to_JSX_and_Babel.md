
# Understanding Basic concept of JSX in React

- JSX stands for JavaScript XML. 
- It is a syntax extension for JavaScript that allows us to write HTML-like syntax directly within JavaScript.  
- JSX makes our code more readable and easier to write by allowing us to visualize the structure of our UI directly in the code.
### Example of JSX in Action
``` In the App.jsx file of our React project: ```  
 ```js
   function App() {
    return ( 
        <h1>hello world</h1>  
    );
   }  
   ```  

Here, the **`<h1>`** tag is not HTML but JSX. This JSX is later transformed by React into a JavaScript object that represents a DOM node. This object is used by React to efficiently update the actual DOM in the browser, ensuring that the UI is always in sync with the application state.




# How JSX Works in the Code

#### JSX is used in the "App.jsx" file:
``` In the App.jsx file of our React project: ```  
 ```js
    return ( 
        <h1>hello world</h1>  
    );
   ```  

- JSX allows us to write what looks like HTML within your JavaScript code. 
- Under the hood, JSX is transformed into React elements via a tool like Babel.
- For example, the JSX `<h1>`hello world`</h1>` is transpiled to a React.createElement call like this:
 ```js
    return React.createElement('h1', null, 'hello world'); 
   ```  
- This React element is an object that describes what we want to appear on the screen. React uses this object to render the corresponding HTML in the DOM.

_Hence, what happens behind the scenes is that our HTML is picked up by a compiler, and it gets converted or compiled down to actual JavaScript. And the compiler comes from including this React module right on the top as: require("react"). Inside the React module, we'll find Babel, which is essentially a JavaScript compiler. Babel's main job is to take modern JavaScript features from ES6, ES7, ES8, and newer, and transform them into a version of JavaScript that all browsers can interpret.Additionally, Babel handles converting JSX into regular JavaScript._  
  

# The Rule when writing the JSX  

When writing JSX, the rule is that any component must return a single element. This means that all the HTML elements inside the component must be wrapped in a single enclosing tag. The reason for this rule is that JSX is ultimately transpiled to JavaScript, and JavaScript functions must return a single value.  

## Pssible Errors while using JSX (Error: "Adjacent JSX elements must be wrapped in an enclosing tag")  

``` In the App.jsx file, we're trying to return multiple elements: ```  

```js
   function App() {
      return (
         <h1>Top 3 Best Movies</h1>
         <ul>
            <li>MAVRIK</li>
            <li>TOP GUN</li>
            <li>TENET</li>
         </ul>
      )
   }
```  
Here, both **`<h1>`** and **`<ul>`** are siblings, which means they are adjacent JSX elements. Since JSX requires a single enclosing element, this will throw an error because the function App cannot return more than one root element.

### Error:
![Screenshot 2024-08-29 171934](https://github.com/user-attachments/assets/edaedd1a-a0db-4a9c-af28-cd8a5c88001a)


### Why Does This Rule Exist?
JSX is syntactic sugar for React.createElement() calls. When JSX is compiled, each JSX element is converted into a JavaScript function call that creates a React element. For example:

```js 
   return (
      <h1>Top 3 Best Movies</h1>
      <ul>
         <li>MAVRIK</li>
         <li>TOP</li>
         <li>TENET</li>
      </ul>
   )

```
gets transpiled into:  

```js 
   return React.createElement(
   React.Fragment, 
   null,
   React.createElement("h1", null, "Top 3 Best Movies"),
   React.createElement("ul", null, 
      React.createElement("li", null, "MAVRIK"),
      React.createElement("li", null, "TOP"),
      React.createElement("li", null, "TENET")
   )
   );
```
Here, React.createElement can only return a single root element. If we try to return two elements side by side, React doesn’t know how to handle them because it expects a single return value from the component.

### Solutions to Fix the Error

#### 1.Wrap in a **div:** The most common solution is to wrap all the JSX elements inside a div.   

```js 
   return (
      <div>
         <h1>Top 3 Best Movies</h1>
         <ul>
            <li>MAVRIK</li>
            <li>TOP</li>
            <li>TENET</li>
         </ul>
      </div>
   )
```  
This ensures that the component returns only one root element (div), which contains all the other elements.  

#### 2. Use a React Fragment (<>...</>):   
If we don't want to add an extra div to the DOM, we can use a React Fragment. Fragments allow us to group a list of children without adding extra nodes to the DOM.  

```js 
   return (
      <>
         <h1>Top 3 Best Movies</h1>
         <ul>
            <li>MAVRIK</li>
            <li>TOP</li>
            <li>TENET</li>
         </ul>
      </>
   )

```  
This will also compile into a single React.Fragment root element:  

```js 
   return React.createElement(
      React.Fragment, 
      null,
      React.createElement("h1", null, "Top 3 Best Movies"),
      React.createElement("ul", null, 
         React.createElement("li", null, "MAVRIK"),
         React.createElement("li", null, "TOP"),
         React.createElement("li", null, "TENET")
  )
);

```  
### Why Use One Solution Over the Other?  

**Using a div:** This is the simplest and most common approach. It’s straightforward and works well when we don’t mind adding an extra element to the DOM. However, if we're concerned about unnecessary divs cluttering our HTML, this might not be ideal.

**Using a Fragment:** This is more elegant when we don't want to introduce unnecessary elements into the DOM. It’s particularly useful in scenarios where we need to avoid altering the layout or when working with CSS where extra elements might interfere with styling.

### Conclusion to the error  
_The error we encountered is a common one and stems from the need for React components to return a single root element. The solutions, either using a div or a fragment, ensure that the JSX is wrapped in a single element, making it valid React code. Both methods have their use cases, so the choice between them depends on whether we want to add an extra element to the DOM or not._

# What is Babel?  

**Babel** is a popular JavaScript compiler that allows us to use the latest features of the JavaScript language, even if they are not yet supported by all browsers. It does this by transforming our modern JavaScript code into a backward-compatible version that can run in older environments.


## Why Use Babel?

In modern web development, especially with frameworks like React, we often write code using the latest ECMAScript (JavaScript) standards and syntax, such as arrow functions, classes, template literals, and JSX. However, not all browsers support these features natively. Babel ensures that our code remains functional across different environments by converting it into a version of JavaScript that older browsers can understand.

## How Babel Works
Babel takes in our modern JavaScript code as input, processes it according to a set of plugins and presets, and outputs a version of the code that is compatible with older JavaScript environments.  
**Example**

```Consider the following JSX code, which might be part of a React component:```  

```js
   const App = () => {
      return <h1>Hello World</h1>;
   };

   export default App;
```

This code uses both JSX and an arrow function, which are features not supported by older browsers.  

## How Babel Transforms Code  
Babel will transform this code into something like the following:

 ```js
   "use strict";

   var App = function App() {
      return React.createElement("h1", null, "Hello World");
   };

   export default App;
   ``` 

- **Arrow Function to Function Expression:** Babel converts the arrow function into a regular function expression, which is supported by all JavaScript environments.

- **JSX to React.createElement:** Babel also converts the JSX syntax into React.createElement calls, which the browser can then render into HTML.

# Babel in a React Project

When working in a React project set up with tools like Vite or Create React App, Babel is usually pre-configured to handle these transformations. This means we can write modern JavaScript and JSX without worrying about browser compatibility—Babel takes care of it behind the scenes.




