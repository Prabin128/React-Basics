# ES6 Import, Export and Module  

## Introduction
- ES6 (ECMAScript 2015) introduced new ways to handle imports and exports in JavaScript.  
- This is crucial for managing code in modular, maintainable pieces, especially when working with React.  
- Understanding ES6 Modules and how to use `import` and `export` statements will allow to structure React applications efficiently, making our code easier to manage, debug, and scale.   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


## 1. What are Modules?
- In JavaScript, modules are a way of dividing our code into reusable pieces.  
- With ES6 modules, JavaScript allows us to split our code into different files and load them as needed.  
- This is essential for maintaining clean, readable, and manageable code.

Modules allow to organize code logically by separating concerns (e.g., `components`, `utilities`, and `styles`).  
They also make it easier to share code across different files or projects. 


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

## 2. Exporting in ES6
The export statement is used to expose `functions`, `objects`, or values from one file so that they can be imported and used in other files.

There are two types of exports:

1. Named Exports
2. Default Exports  
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### 2.1 Named Exports  
Named exports allow to export multiple `variables`, `functions`, or `classes` from a single file. We can export as many items as we want from a file.  

Note : WE cannot directly use the ES6 import export. For that we need to initialize the npm as : `npm init` in terminal staying inside the folder in our case its "Using-Named-Export" folder. and
To load an ES module, we should set `"type": "module"` in the package.json or use the .mjs extension.
Now it will work fine.  
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### Setting Up ES6 Modules in Node.js
By default, Node.js does not support ES6 `import` and `export` syntax directly. To enable ES6 modules, follow these steps:

1. **Initialize npm**: Run the following command inside the project folder (in this case, "Using-Named-Export"):
   ```sh
   npm init -y
   ```
   This creates a `package.json` file.

2. **Enable ES Modules**: Add the following setting inside `package.json`:
   ```json
   {
     "type": "module"
   }
   ```
   Alternatively, we can use the `.mjs` extension for module files instead of `.js`.

Once these steps are completed, ES6 import/export syntax will work correctly.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

**Example: Named Exports**

**`utils.js`**
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b; 
```
When importing, we must use the same name as the exported items:   

**`main.js`**
```js
import { add, subtract } from './utils.js';

console.log(add(1, 2));  // 3
console.log(subtract(5, 2));  // 3  
```   
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### 2.2 Default Export
A default export allows us to export one item (`function`, `object`, `class`, etc.) from a module.  
A file can only have one default export.

**`greeting.js`**

```js
const greet = () => {
  return "Hello, World!";
};

export default greet;  
```
To import a default export, we can give it any name:  

**`main.js`**
```js
import greet from './greeting.js';

console.log(greet());  // "Hello, World!"  
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

## 3. Importing in ES6  

The import statement is used to bring in `variables`, `functions`, or `classes` that were exported from another file.    
We can import either named exports or default exports.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### 3.1 Importing Named Exports  

**`utils.js`**  
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```  
To import the named exports:  

**`main.js`**
```js
import { add, subtract } from './utils';

console.log(add(5, 3));  // 8   
```  
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### 3.2 Importing Default Exports


**`greeting.js`**  

```js
const greet = () => {
  return "Hello, World!";
};

export default greet;  
```
To import the default export:


**`main.js`**  
```js
import greet from './greeting';

console.log(greet());  // "Hello, World!"  
```   
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

### 3.3 Importing Everything from a Module   

We can import all the named exports from a module as an object:

**`utils.js`**
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;  
```  

**`main.js`**  

```js
import * as utils from './utils';

console.log(utils.add(2, 3));  // 5
console.log(utils.subtract(5, 2));  // 3
```    
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

## ⚠ Common Mistake When Importing Default Exports
If we try to import everything from a module that has a default export using import * as, it will cause an error.  

```js
import * as greetings from "./greetings.js"; // Incorrect way to import a default export

const greetedResult = greetings.greet(); // ❌ Error: greetings.greet is not a function

console.log(greetedResult);
```  

**Why does this error occur?**

- `import * as greetings` treats the entire module as an object.
- Since the module only has a default export, it is stored as `greetings.default`, not `greetings.greet`.
- The correct way to access it would be `greetings.default()`, but it's recommended to import default exports directly as shown earlier.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


## File Structure in Modules
When we're working with larger projects (like React apps), it is essential to organize our modules into a well-structured folder hierarchy.  
React encourages a modular approach to keep components and logic separate.  

**Example structure for a React project:** 

```sh 
src/
  components/
    Header.jsx
    Footer.jsx
    Main.jsx
  utils/
    math.js
    string.js
  App.jsx
  main.js
```    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   
 
#### Sample Example of Using ES6 Modules in React  

**`math.js (utility file):`**  
```jsx
// src/utils/math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```  

**`App.jsx (React component file):`**

```jsx
// src/components/App.jsx
import React from 'react';
import { add, multiply } from '../utils/math';

const App = () => {
  const sum = add(5, 3);
  const product = multiply(5, 3);

  return (
    <div>
      <h1>Welcome to React</h1>
      <p>The sum of 5 and 3 is: {sum}</p>
      <p>The product of 5 and 3 is: {product}</p>
    </div>
  );
};

export default App;
```   

**`main.js (main entry file):`**   
```jsx  
// src/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

## How ES6 Modules Relate to React  

React applications are built using `components`, and these components are usually written as separate files.  
The power of ES6 modules lies in its ability to import and export React components, hooks, and utilities from other files.

1.  **Modular Structure**: React encourages breaking down the UI into small, reusable components. Using ES6 modules, we can separate these components into individual files and import them into our main app file (`App.js` or `App.jsx`).

2. **Component Reusability**: With named exports and default exports, we can import components into different files and reuse them as needed. This makes our codebase modular, clean, and maintainable.

3. **Separation of Concerns**: We can organize the logic, styling, and behavior of our application in different files (using separate modules for state management, API calls, and UI components), allowing for better organization and easier debugging.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

## Summary
- **ES6 modules** enable a more organized and scalable way to write React applications.
- With **import/export**, we can modularize our code by separating components, utilities, and other logic into individual files.
- React applications naturally work well with ES6 modules, making them easier to maintain as the project grows.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 