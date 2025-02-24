# Inline Styling for React Elements  

## Introduction

In React, inline styling is a way to apply styles directly to elements using the `style` attribute.  
However, unlike HTML, where styles are defined as strings, React expects a JavaScript object.  

## Incorrect Usage in JSX   

```jsx
function App() {

  return (
    <>
      <h1>Hello Heavy Developers</h1>
    </>
  )
}
```


If this was in HTML, we could add styling inline just through the use of the style attribute as:  
```html
<h1 style= "color : red">Hello Heavy Developers</h1>
```  
Unfortunately, this is not HTML and when we write this code, This results in an error:
> `"The style property expects a mapping from style properties to values not a string."`  as below:

<div align="center">
  <img src="https://github.com/Prabin128/React-Basics/blob/main/assets/inline_react_styling_error.png" width="700" >
</div>   


**What's going on here?**

In this case, we're actually providing a string as the value to the style attribute.  
This would work fine if this was HTML, but in JavaScript, it wants this value for the style property as a JavaScript object.

**`REMINDER`**  `:` `JavaScript objects look like this: { }. They exist in a set of curly braces and then they have key-value pairs.`    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)    


## Correct Usage in JSX  

To apply styles inline in JSX, we must use an object: 

```jsx
function App() {
  return (
    <h1 style={{ color: "red" }}>Hello Heavy Developers</h1>
  );
}
```    
- In JSX (which is basically JavaScript and HTML mixed together), anything inside curly braces {} is treated as JavaScript.  
- React sees the `style={...}` part and knows that we are passing JavaScript code to the `style` attribute.  
- But style is expecting a JavaScript object with key-value pairs (like `color: "red"`), so we need the **second set of curly braces** to define that JavaScript object.  
- The second set of curly braces `{ color: "red" }` is just **a plain JavaScript object**.    

**Summary of the Code**   
- The `style` attribute expects a JavaScript object.
- Object keys represent CSS properties (e.g., `color`).
- Values are strings representing CSS values (e.g., `"red"`).
- CSS property names follow **camelCase** convention instead of kebab-case (`font-size` → `fontSize`).
- Key-value pairs in the object are separated by commas.    

***`NOTE: Whenever we want to inject some JavaScript into an HTML element in JSX, we have to wrap it inside a set of curly braces.`***  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)    

 
## Using a Separate Style Object

To make the code cleaner and reusable, styles can be stored in a separate constant:    
```jsx
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

function App() {
  return (
    <h1 style={customStyle}>Hello Heavy Developers</h1>
  );
}
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)    

## Why Use Inline Styling in React?   

While class-based styling is preferred for maintaining styles, inline styling is useful in scenarios where styles need to be dynamically updated. While updating dynamically we don't have to change our code, all we have to do is to just update the properties of `customStyle` object as below:  

For example:  

```jsx
const customStyle = {
  color: new Date().getHours() > 12 ? "blue" : "red",
};

function App() {
  return (
    <h1 style={customStyle}>Hello Heavy Developers</h1>
  );
}
```

Here, the text color changes dynamically based on the time of the day.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)    

## Best Practices  

- Use inline styles for dynamic styling needs.
- Store styles in variables for better readability and maintainability.
- Prefer class-based styling for large-scale projects to keep styles separate from logic.

By understanding inline styles in React, we can efficiently manage dynamic UI changes while ensuring clean and maintainable code.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)    

