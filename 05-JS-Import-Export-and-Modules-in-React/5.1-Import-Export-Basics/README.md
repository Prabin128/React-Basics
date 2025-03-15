# Exporting from a Module in JavaScript

JavaScript provides two types of exports: **default exports** and **named exports**.
 
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

## 1. Default Exports  

A default export allows us to export a single `function`, `class`, or `object` from a module.  
The key feature of default exports is that we can import them with any name.

Until and unless we export module as a `default`, When importing a default export, we ***can use any name***.   

**Example**

**`calculation.jsx`**

```jsx
const add= (a,b) => a+b;   

export default add; //Default export
```

**`App.jsx`**
```jsx
import randomName from "./calculation.jsx"; //Importing with  any name 

function App() {
  return (
    <>
    <p>{randomName(1,2)}</p>  {/* Works fine since add was exported as default */}
    </>
  )
}
``` 
Here, instead of importing as `randomName` we can name anything since the export type is `default`.   

**Key Points About Default Exports:**

- ✅ A module can have only one default export.
- ✅ When importing a default export, we can use any name.   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

## 2. Combining Default and Named Exports  

If a module has multiple functionalities, we can:

- Export one function as the default
- Export others as named exports

**Example: Exporting Multiple Functions**

**`./components/calculation.jsx`**

```jsx
const add= (a,b) => a+b;
const subtraction = (a,b) => a - b;
const multiplication = (a,b) => a * b;

export default add;  //Default exports 
export {subtraction, multiplication};  //Named exports
```

**Example: Importing Both Default and Named Exports**  

**`App.jsx`**
```jsx
import randomName, { multiplication, subtraction } from './components/calculations.jsx'

function App() {
  return (
    <>
    <p>{randomName(1,2)}</p>  {/* Default export (add function) */}
    <p>{subtraction(1,2)}</p>  {/* Named export */}
    <p>{multiplication(1,2)}</p>   {/* Named export */}
    </>
  )
}
``` 

Apart from the default export, all named exports must be imported using their exact names.  
In the example above, `subtraction` and `multiplication` must be imported and used with the same identifiers as they were exported.  

**Key Points About Named Exports:**

- ✅ Named exports must be imported using the exact exported name inside `{}`.
- ✅ Unlike default exports, we cannot change the name when importing named exports.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 


## When to Use Default vs Named Exports?  

| Feature         | Default Export                 | Named Export                           |
|---------------|--------------------------------|--------------------------------------|
| **Number of Exports** | Only one per module       | Multiple per module                  |
| **Import Syntax**  | `import anyName from "module"` | `import { exactName } from "module"` |
| **Name Change**    | Yes, can be renamed        | No, must use the exact name         |
| **Use Case**       | When exporting one main function/class | When exporting multiple utilities |    


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

# Differences Between ES6 import/export and require()  

Before ES6, the `require()` function was commonly used in Node.js to import modules.  
The `require()` function and the `import/export` syntax achieve similar results, but there are some key differences:

- **Simplicity**: The `import/export` syntax is more declarative and clear, making the code more readable.
- **Static Analysis**: `import/export` allows for static analysis of the code, meaning tools like bundlers (Webpack) can optimize module loading more effectively.
- **Named Exports**: `import/export` allows for both default and named exports, which is not as straightforward with `require()`.  

**Example of using require() (common in Node.js):**  

**`calculation.js`**  

```js
const add= (a,b) => a+b;

module.exports = { add };    
```  

**`main.js`**    

```js
const randomName = require('./calculations.jsx');
console.log(randomName.add(1,2))
```   

Although `require()` is widely used in Node.js, it does not provide the static analysis benefits of the ES6 `import/export` syntax.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 