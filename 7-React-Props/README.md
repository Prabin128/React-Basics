# React Props  
- In React, **Props (short for properties)** are **inputs** to React components.  
- They are passed down from a **parent** component **to a child** component to share data.  
- Props are **read-only**, which means the child component cannot modify the props      received from its parent.  
- They are a fundamental part of React and allow components to be dynamic and reusable by making them customizable.

**Key Points:**
- Props are immutable.
- Props allow data flow from parent to child components.
- They are similar to function arguments, but for components.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)     

# Sample Props Example   
- To use props in React, we need to pass data from a `parent` component to a `child` component.  
- The child component can then access these props and display or use them accordingly.

```jsx
function ParentComponent(){
    return <ChildComponent message = "This is the message from the Parent Component" />
}

function ChildComponnent(props){
    return <h1>{prop.message}</h1>;
}  
```   
Here:

- `message` is a prop passed from the `ParentComponent` to the `ChildComponent`.
- The `ChildComponent` accesses the `message` prop using `props.message` and displays it in an `<h1>` tag.

# How to Use Props  

### 1. Passing Props to Components  

- **Props** are passed to `child` components **as attributes** within JSX syntax (like attributes in HTML tags).  
- These attributes can have any name (e.g., `name`, `email`, `phone`), and the values of these attributes will be accessible within the child component.
- We can pass any type of data as props, including `strings`, `numbers`, `arrays`, `objects`, and even `functions`.     


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)   


**Example 1: Passing Primitive Data Types**  

***Child Component***  
For example: Consider  a `Child` component where the `Child` component receives **props as a parameter**  (typically `props`) and uses them inside the JSX.  

```jsx
function Child(props) {
    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}  </p>
            <p>Email: {props.email}  </p>
            <img src= {props.img} alt =  {props.name}/>
        </>
    );
}
```  
***Parent Component***  

The `Parent` component passes **data** to the `Child` component as **props**.  
Now, To  pass the prop to `Child` component, we would use this syntax in the `Parent` component as:

```jsx
function Parent(){
    return(
    <>
        <Child name="Developer" age = {23} email="developer123@example.com" img="developer.jpg"  />
    </>
    )
}
```   
In the `Parent` component, we pass the following **props** to `Child`:  

- `name`: The string `"Developer"`
- `age`: The number `23`
- `email`: The string `"developer123@example.com"` 
- `img`: The string representing an image URL `"developer.jpg"`   

These values are passed to the `Child` component as attributes. Inside the Child component, we access them using `props.name`, `props.age`, `props.email`, and `props.img`.  

In this case:    
- `name`, `age`, `email`, and `img` are props.
- The values `"Developer"`, `{23}`, `"developer123@example.com"` and `"developer.jpg"` are the data passed down to the child component.   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)   

**Example 2: Passing Arrays or Objects**   

```jsx
function Parent() {
  const items = ['apple', 'banana', 'cherry'];
  return <Child items={items} />;
}

function Child(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```  
Here:  
- In the `Parent` component, we're creating an array called `items` and passing it as a **prop** to the `Child` component using the syntax `<Child items={items} />`.
- Inside the `Child` component, we're accessing the array via `props.items` and then using `.map()` to iterate over the array and render each item as a list item (`<li>`).
- The `key={index}` is important for React’s rendering optimization (it helps React identify which items have changed when the list updates).   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

### 2. Accessing Props in the Child Component  

Inside the child component, we can access **props** by referencing **props** (an object) with the property names that were passed down from the parent.

Example:  

```jsx
function Child(props) {
    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}  </p>
            <p>Email: {props.email}  </p>
            <img src= {props.img} alt =  {props.name}/>
        </>
    );
}
```  
In this example, the `Child` component accesses the `name`, `age`, `email`, and `img` **props** and displays them accordingly.

**Same for  Array or Objects**   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

### 3. Using Default Props  
When we define a React component, we can provide default values for its **props** in case the parent component does not pass those values.This is done using `defaultProps`.  
It ensures that if no value is passed for a specific **prop**, React will use the default value we provided.  

Here’s how we can apply default props to your `Child` component:  
```jsx
function Child(props) {
    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <img src={props.img} alt={props.name} />
        </>
    );
}

// Defining default props for Child component
Child.defaultProps = {
    name: 'Unknown',               // Default name if not passed
    age: 30,                       // Default age if not passed
    email: 'no-email@example.com', // Default email if not passed
    img: 'default-image.jpg'       // Default image if not passed
};

function Parent(){
    return(
        <>
            <Child 
                name="Developer" 
                age={23} 
                email="developer123@example.com" 
                img="developer.jpg" 
            />
            {/* If we don't pass props, the default values will be used */}
            <Child />
        </>
    );
}

```  
Here:  

***Adding defaultProps to the Child Component:*** 

- We added a `defaultProps` object to the `Child` component, specifying default values for the `name`, `age`, `email`, and `img` **props**. These default values will be used if the parent component does not provide a value for these **props**.  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

***What Happens Without Props***  

In the `Parent` component, the first `<Child />` is provided with all the **props** (`name`, `age`, `email`, `img`).  
However, the second `<Child />` does not receive any props.   
In this case, the `defaultProps` will be used, and the `Child` component will render with the default values:

- `name: 'Unknown'`
- `age: 30`
- `email: 'no-email@example.com'`
- `img: 'default-image.jpg'`  

**`NOTE: If the parent does pass a value, that value will override the default.`**  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

**Why Use Default Props**  

Default props are useful when:
- We want to ensure that our component has reasonable default values if the parent doesn’t pass all or some of the props.
- We avoid rendering undefined or incomplete content in the component.  
- It helps avoid errors or undefined content and is a **good practice** for building more robust components.  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 

# Props Are Read-Only  

Props are **immutable**, meaning that the child component cannot modify the props passed to it.  
If we need to change data, we should modify the state or use other mechanisms (like a ***callback function***) to trigger updates.

Example:

```jsx
function Child(props) {
  // You cannot directly modify props like this:
  // props.name = "New Name"; // This will throw an error
  return <h2>{props.name}</h2>;
}   
```

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)      

# Prop Types (Type Checking)  

- To make our code more robust and ensure that the **props** passed to the `Child` component are of the correct types, we can define the expected types using `PropTypes`.  
- We can define the expected types for our **props** using the **PropTypes library**.
- This allows us to catch potential bugs early, especially when working in large teams.  

```jsx
import PropTypes from 'prop-types';

function Child(props) {
    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <img src={props.img} alt={props.name} />
        </>
    );
}

// Define prop types for the Child component
Child.propTypes = {
    name: PropTypes.string.isRequired,      // name must be a string and is required
    age: PropTypes.number.isRequired,      // age must be a number and is required
    email: PropTypes.string.isRequired,    // email must be a string and is required
    img: PropTypes.string.isRequired,      // img must be a string (URL of the image) and is required
};

function Parent() {
    return(
        <>
            <Child name="Developer" age={23} email="developer123@example.com" img="developer.jpg" />
        </>
    );
}
```   
- `PropTypes.string.isRequired` ensures that the `name`, `email`,`age` **prop** is a string or number and is required.
- `img: PropTypes.string.isRequired` ensures `img` **prop** should contain the URL or path of the image that we want to display in the img element. 
- **React will warn** if the **prop** is not passed or is not a valid string or number.
- PropTypes can check for various data types like `string`, `number`, `array`, `object`, `func`, and more.


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   


# Dynamic Props   

By passing dynamic data via **props**, we enable child components to become flexible and reusable.  
In this example, the parent component (`Parent`) passes ***dynamic props*** (`name`, `age`, `email`, and `img`) to the `Child` component (`Child`), which displays the data.

- In React, **props** are read-only, meaning they cannot be changed by the child component directly.   
- They are immutable within the `Child` component, and any change must be handled by the parent component.    
- These are **props** that can change based on variables or state values. In the above example, `name`, `age`, `email`, and `img` are dynamic **props** because the values can change based on different data passed from the parent.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)    

### Example 1: Static Dynamic Props  
```jsx  
function Child(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <img src={props.img} alt={props.name} />
        </>
    );
}

function Parent() {
    return (
        <>
            <Child name="Developer" age={23} email="developer123@example.com" img="developer.jpg" />
            <Child name="Designer" age={30} email="designer456@example.com" img="designer.jpg" />
        </>
    );
}

```  

Here:  
- We are passing dynamic props like `name`, `age`, `email`, and `img` from the `Parent` component to the `Child` component.
- These **props** are hardcoded in the `Parent` component. For example:
    - The first `Child` gets `name="Developer"`, `age={23}`, etc.
    - The second `Child` gets `name="Designer"`, `age={30}`, etc.
- Both `Child` components receive different values for their **props**, which makes the props dynamic in the sense that each `Child` component can display different data.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)    

### Example 2: Dynamic Props from External Data  

We can also pass dynamic data to the `Child` component that comes from an **external source** (like a list of users, for example). Here’s how we could do that without `useState`:  

```jsx
function Child(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <img src={props.img} alt={props.name} />
        </>
    );
}

function Parent() {
    // List of dynamic data (could be fetched from an API or external source)
    const users = [
        { name: "Developer", age: 23, email: "developer123@example.com", img: "developer.jpg" },
        { name: "Designer", age: 30, email: "designer456@example.com", img: "designer.jpg" }
    ];

    return (
        <>
            {users.map((user, index) => (
                <Child 
                    key={index}
                    name={user.name} 
                    age={user.age} 
                    email={user.email} 
                    img={user.img} 
                />
            ))}
        </>
    );
}

```  

Here:  
- the parent (`Parent`) uses a **list** (`users`) containing dynamic data.
- The `users` list has several objects, and each object contains properties (`name`, `age`, `email`, and `img`).
- The `Parent` component iterates over this list and renders a `Child` component for each user, passing the dynamic data (like `user.name`, `user.age`, etc.) as props to the `Child`.
This way, the props passed to each `Child` are **dynamic** based on the list of users.    
 
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)     

# Destructuring Props  

Instead of accessing **props** using `props.someValue`, we can use ***JavaScript destructuring*** to simplify the code and extract specific values **directly**.  

```jsx
function Child({name,age, email,  img}){
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <img src={img} alt={name} />           
        </>
    )
}

function Parent() {
    return(
        <>
            <Child name="Developer" age={23} email="developer123@example.com" img="developer.jpg" />
        </>
    );
} 
```  
In this case, instead of accessing `props.name` and `props.age`, we directly extract `name` and `age` from `props` using **destructuring** in the function parameter.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)     

# Passing Functions as Props  

Props are not just limited to **data**; we can also pass **functions** as props.    
This is especially useful when we want the **child component** to trigger some behavior in the **parent component**.  

```jsx
function Child(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <img src={props.img} alt={props.name} />
            <button onClick={props.handleClick}>Click Me</button>
        </>
    );
}

function Parent() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <Child 
                name="Developer" 
                age={23} 
                email="developer123@example.com" 
                img="developer.jpg" 
                handleClick={handleClick} // Passing the function as a prop
            />
        </>
    );
}

```
***Passing the Function:***  

- The `Parent` component defines a function `handleClick`. Instead of directly invoking this function in the `Parent`, the function is passed down to the `Child` component as a **prop**.
- In JSX, this is done by adding the `handleClick={handleClick}` to the `Child` component tag.  
***Using the Function in the Child:***  
- The `Child` component receives the function `handleClick` via `props`.
-  It attaches the function to the `onClick` event of a button inside the child, which, when clicked, will trigger the `handleClick` function in the parent.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)   

### Why Use Functions as Props?  

**1. Parent-Child Interaction**: This approach allows the **child component** to communicate back to the **parent component**. By passing functions as **props**, the child can trigger actions or update data in the parent, which is a key feature in React's unidirectional data flow.

**2. Code Reusability**: Functions passed as **props** make the child components more reusable because the same child component can perform different behaviors based on the function passed by the parent.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

# Common Use Cases for Props:  

**1. Reusable Components**: Props allow to create reusable components that can accept different values each time they are used.

- For example, creating a `Child` component for each contact, passing different data for each person.  

**2. Customizable Components**: With **props**, we can create components that accept customizable data for various elements (`images`, `text`, `styles`).

**3. Passing Callbacks**: We can pass functions as **props** to handle events or interactions within `child` components. For example:

```jsx
function Button(props) {
  return <button onClick={props.handleClick}>Click Me</button>;
}
```
**4. Conditional Rendering**: We can use props to conditionally render content in a component, based on the data passed down.

```jsx
function Child(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.email && <p>{props.email}</p>}
    </div>
  );
}
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

# Best Practices  

**1. Destructure props**: Instead of using `props.someValue`, it's a common practice to destructure the props for cleaner and more readable code.

```jsx

function Child({ name, img, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{email}</p>
    </div>
  );
}
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

**2. Prop validation**: Always validate the types of our **props** to avoid bugs or unintended behavior in our components. Using `PropTypes` can help with this.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

# Prop Drilling and Context API   

## Prop Drilling

- **Prop drilling** in React refers to the process of passing **data** (`props`) from a **parent component** to a **deeply nested child component** through multiple intermediate components.  
- In simple terms, it's when **props** are passed down through several layers of components before they reach the component that actually needs them.

- Although this is a common pattern in React, it can become **cumbersome** when the component tree gets deeply nested.  
- At some point, we might feel that **props** are being passed through layers that don't really need them.  
- This can lead to less maintainable code, but it's a natural consequence of React's unidirectional data flow.  

**Example**  

```jsx
function GrandParent() {
    const name = "Developer";

    return (
        <div>
            <Parent name={name} />
        </div>
    );
}

function Parent(props) {
    return (
        <div>
            <Child name={props.name} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    );
}

```  
- The `GrandParent` component defines the `name` variable with the value `"Developer"` and passes it down to the `Parent` component as a prop (`name`).   
- The `Parent` component receives the `name` **prop** and, instead of using it directly, it passes it down further to the `Child` component.  
- The `Child` component finally receives the `name` prop and renders it.  

This is an example of **prop drilling**, where the `name` prop is passed through the `Parent` component even though it doesn't use the prop directly. The actual component that consumes the prop is the `Child` component.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)  

**When Does Prop Drilling Become a Problem?**  

While **prop drilling** is fine in small applications or with shallow component trees, it can become cumbersome and hard to maintain when:

1. **Deeply Nested Components**: If the data needs to be passed through many layers of components (which don't actually use the data themselves), the code can become messy and harder to understand.

2. **Unnecessary Passing of Props**: Intermediate components might not need to know about the prop, but they are required to pass it down anyway, just to get it to the final component that needs it.

3. **Component Reusability**: When components are unnecessarily tied to a parent’s data because they are required to pass props down through multiple layers, it becomes difficult to reuse components in other parts of the application.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)    

***Example of Prop Drilling in a Larger Component Tree***   

Imagine a more complex scenario where you have a **GrandParent** component passing data down to a **GreatGrandChild** component:  

```jsx
function GrandParent() {
    const theme = "dark";

    return (
        <div>
            <Parent theme={theme} />
        </div>
    );
}

function Parent(props) {
    return (
        <div>
            <Child theme={props.theme} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <GreatGrandChild theme={props.theme} />
        </div>
    );
}

function GreatGrandChild(props) {
    return (
        <div>
            <h1>The current theme is {props.theme}</h1>
        </div>
    );
}

```  

In this case, the `theme` prop is passed from **GrandParent** to **GreatGrandChild** through **Parent** and **Child**, even though **Parent** and **Child** don't directly use the `theme` prop. This is an example of **deep prop drilling**.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX)   

# How to Avoid Prop Drilling  
Although **prop drilling** is the **default behavior** in React, there are ways to avoid passing **props** through many levels of the component tree. Below are some alternatives:  

### 1. React Context API  

- **Context API** is a built-in feature of React that allows us to pass data through the component tree without having to explicitly pass props at each level.
- **Context** creates a **context provider** at a higher level in the component tree and makes data available to all components beneath it, without needing to pass the data down manually.  

```jsx
import React, { createContext, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

function GrandParent() {
    const theme = "dark";
    
    return (
        <ThemeContext.Provider value={theme}>
            <Parent />
        </ThemeContext.Provider>
    );
}

function Parent() {
    return <Child />;
}

function Child() {
    return <GreatGrandChild />;
}

function GreatGrandChild() {
    const theme = useContext(ThemeContext); // Consuming context directly
    return <h1>The current theme is {theme}</h1>;
}

```  
In this example, the `GreatGrandChild` component consumes the `theme` directly via `useContext`, eliminating the need for **prop drilling**.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX) 

### 2. State Management Libraries  

Libraries like **Redux** or **Recoil** are used for managing global state in large applications. Instead of drilling props down through multiple layers, we can store data in a global state store and access it from any component in our application.

Example using **Redux**:

With **Redux**, the `theme` state would be stored in the global Redux store, and components can access it using `useSelector` without needing to pass the `theme` prop down manually.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#JSX)   

### 3. Component Composition  

Another approach is to **compose** components in a way that reduces the need to pass props down through many layers. Instead of relying on a deep tree of components, we could flatten the component structure or pass data more selectively to where it's needed.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#JSX) 