# React Conditional Rendering with the Ternary Operator and AND Operator  

In React, conditional rendering allows to render different UI elements based on some condition, such as whether a user is logged in or not.   
Two common techniques for achieving ***conditional rendering*** are using the **`ternary` operator** and the **`AND` operator**.  

# What is Conditional Rendering in React?
In React, we often need to render different UI components depending on certain conditions.   
For instance, we may want to show a login form if the user is not logged in, and a welcome message if they are logged in.

This behavior is known as **conditional rendering**. We can achieve it using several methods, with the most popular being the **ternary operator** and the **AND operator**.  

# Using the Ternary Operator for Conditional Rendering   

The ternary operator is a compact way to handle conditional logic directly within JSX.   
It allows us to conditionally render components or elements based on a boolean value.

**Syntax**
```js
condition ? exprIfTrue : exprIfFalse;  
```   

- **condition**: The expression we want to evaluate (e.g., a boolean value).
- **exprIfTrue**: The JSX that will be rendered if the condition is true.
- **exprIfFalse**: The JSX that will be rendered if the condition is false. 

**Example**  

```jsx
function App() {
  const isLoggedIn = true;  // Set the condition here
  
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <Login />}
    </div>
  );
}
```  

Here:

- If `isLoggedIn` is `true`, the `<h1>Welcome back!</h1>` will be rendered.
- If `isLoggedIn` is `false`, the `<Login />` component will be rendered.  

**Simplified Example**  

Since `isLoggedIn` is already a boolean, we can simplify the condition:  

```jsx
function App() {
  const isLoggedIn = true;
  
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <Login />}
    </div>
  );
}
```    

# How the AND Operator Works:

The **AND (`&&`) operator** in JavaScript allows us to conditionally execute an expression based on whether a condition is `true`. Here's how it works:

- The AND operator evaluates two expressions: **the condition** and **the second expression**.
- If both the condition and the second expression evaluate to `true`, then the second expression is executed or rendered.
- If either the condition or the second expression is `false`, then nothing is rendered. This is because the AND operator requires both sides to be `true` for the entire expression to evaluate as `true`.

For example, let's consider this expression: `x > 3 && x < 7`.

- If `x` is `5`, both conditions are `true` (5 is greater than 3 and less than 7), so the expression evaluates to `true`, and the second expression is executed.
- If `x` is `1`, the first condition (`x > 3`) is `false`. Since one of the conditions is false, the entire expression evaluates to `false`, and the second expression is not executed.

Thus, this behavior makes it an efficient way to conditionally render content, as it skips the second expression when the condition is false.


# Using the AND Operator for Conditional Rendering   
 
- The **AND (`&&`) operator** is another way to conditionally render content.   
- This method works by checking if the condition is `true` and only rendering the second expression if the condition evaluates to `true`.   
- If the condition is `false`, nothing will be rendered.  


**Syntax**  

```js
condition && exprIfTrue;  
```  

- **condition**: The expression we want to evaluate (e.g., a boolean value).
- **exprIfTrue**: The JSX that will be rendered if the condition is `true`.    

**Example**  

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
} 
```  

Here:

- If `isLoggedIn` is `true`, the `<h1>Welcome back!</h1>` will be rendered.
- If `isLoggedIn` is `false`, nothing will be rendered (similar to returning `null`).  

**Practical Example with Time Check**  

```jsx
function App() {
  const currentTime = new Date().getHours();
  
  return (
    <div>
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
} 
```
Here:  

- If the current time is greater than 12 (e.g., after noon), the message `"Why are you still working?"` is displayed.
- If the time is before noon, nothing is rendered.  



# Code  Description

In this React app, we'll demonstrate the following:

**1. Ternary Operator**: This will allow us to conditionally render different content based on the value of a variable (`isLoggedIn`), which will be set to `true` or `false`. If `isLoggedIn` is `true`, we show a "Welcome back!" message. If it's `false`, we show a login form.

**2. AND (&&) Operator**: This will be used to conditionally render content based on a specific condition — in this case, checking the current time. If the current time is after 12 PM, we show the message "Why are you still working?". If the current time is before 12 PM, we display nothing.


# Best Practices  

**1. Use Ternary Operator for Multiple Conditions**: The ternary operator is more suitable when we need to handle two distinct cases (true/false) with different outputs. If we need more complex conditional logic, consider using the ternary operator.

**2. Use the AND Operator for Simpler Cases**: The AND operator is great when we only need to render something if a condition is true. If the condition is false, no content will be rendered, which can make our code simpler and cleaner.

**3. Avoid Complex Expressions in JSX**: Keep conditional logic simple and readable. Avoid placing too many nested conditions directly inside JSX. If the logic becomes complex, consider moving it to a helper function or using a separate component.

**4. When to Use Null**: If we want to render nothing when a condition is false, we can either use null in a ternary operator or rely on the AND operator. Both methods will effectively prevent any UI from being displayed.

**5. Ensure Readability**: Always make sure that our code is readable. While the ternary and AND operators are concise, too many inline expressions can lead to confusing code. Strive for a balance between brevity and clarity.
