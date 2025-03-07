# React Props  
- In React, Props (short for properties) are inputs to React components.  
- They are passed down from a parent component to a child component to share data.  
- Props are read-only, which means the child component cannot modify the props      received from its parent.  
- They are a fundamental part of React and allow components to be dynamic and reusable by making them customizable.

**Key Points:**
- Props are immutable.
- Props allow data flow from parent to child components.
- They are similar to function arguments, but for components.  

# Sample Props Example   
To use props in React, we need to pass data from a parent component to a child component.  
The child component can then access these props and display or use them accordingly.

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

- Props are passed to child components as attributes within JSX syntax (like attributes in HTML tags).  
- These attributes can have any name (e.g., name, email, phone), and the values of these attributes will be accessible within the child component.
- We can pass any type of data as props, including strings, numbers, arrays, objects, and even functions.  

**Example 1: Passing Primitive Data Types**  

***Child Component***  
For example: consider  a `Child` component where the `Child` component receives props as a parameter (typically `props`) and uses them inside the JSX.  

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

The parent component passes data to the Child component as props.  
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
In the `Parent` component, we pass the following props to `Child`:  

- `name`: The string `"Developer"`
- `age`: The number `23`
- `email`: The string `"developer123@example.com"` 
- `img`: The string representing an image URL `"developer.jpg"`   

These values are passed to the `Child` component as attributes. Inside the Child component, we access them using `props.name`, `props.age`, `props.email`, and `props.img`.  

In this case:    
- `name`, `age`, `email`, and `img` are props.
- The values `"Developer"`, `{23}`, `"developer123@example.com"` and `"developer.jpg"` are the data passed down to the child component.   

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
- In the `Parent` component, we're creating an array called `items` and passing it as a prop to the `Child` component using the syntax `<Child items={items} />`.
- Inside the `Child` component, we're accessing the array via `props.items` and then using `.map()` to iterate over the array and render each item as a list item (`<li>`).
- The `key={index}` is important for React’s rendering optimization (it helps React identify which items have changed when the list updates).   

### 2. Accessing Props in the Child Component  

Inside the child component, we can access props by referencing `props` (an object) with the property names that were passed down from the parent.

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
In this example, the `Child` component accesses the `name`, `age`, `email`, and `img` props and displays them accordingly.

**Same for  Array or Objects**   

### 3. Using Default Props  
When we define a React component, we can provide default values for its props in case the parent component does not pass those values.This is done using `defaultProps`.  
It ensures that if no value is passed for a specific prop, React will use the default value we provided.  

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
- we added a defaultProps object to the Child component, specifying default values for the `name`, `age`, `email`, and `img` props. These default values will be used if the parent component does not provide a value for these props.  

***What Happens Without Props***  
In the `Parent` component, the first `<Child />` is provided with all the props (`name`, `age`, `email`, `img`).  
However, the second `<Child />` does not receive any props.   
In this case, the `defaultProps` will be used, and the `Child` component will render with the default values:

- `name: 'Unknown'`
- `age: 30`
- `email: 'no-email@example.com'`
- `img: 'default-image.jpg'`  

**`NOTE: If the parent does pass a value, that value will override the default.`**

#### Why Use Default Props
Default props are useful when:
- We want to ensure that your component has reasonable default values if the parent doesn’t pass all or some of the props.
- We avoid rendering undefined or incomplete content in the component.  
- It helps avoid errors or undefined content and is a good practice for building more robust components.  


# Prop Types (Type Checking)  

- To make our code more robust and ensure that the props passed to the `Child` component are of the correct types, we can define the expected types using `PropTypes`.  
- We can define the expected types for your props using the PropTypes library.
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
- `PropTypes.string.isRequired` ensures that the `name`, `email`,`age` prop is a string or number and is required.
- `img: PropTypes.string.isRequired` ensures `img` prop should contain the URL or path of the image that you want to display in the img element. 
- React will warn if the prop is not passed or is not a valid string or number.
- PropTypes can check for various data types like `string`, `number`, `array`, `object`, `func`, and more.
