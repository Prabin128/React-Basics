# React DevTools  

## Introduction

- React DevTools is a powerful tool that allows developers to inspect and debug React component trees.  
- It provides a detailed view of the component hierarchy, props, state, and more, making it easier to understand and troubleshoot React applications.   
- React DevTools can be installed as a browser extension for Chrome or Firefox, or as a standalone package for debugging React applications in our local development environment.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)    

## 1. Installation  

- **Chrome Extension**

    - Open the `Chrome Web Store`.

    - Search for <p>(<a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">"React Developer Tools".</a>)</p>

    - Click on the `"Add to Chrome"` button to install the extension.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)   

- **Firefox Extension**

    - Open the `Firefox Add-ons site`.

    - Search for <p>(<a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">"React Developer Tools".</a>)</p>  

    - Click on the "Add to Firefox" button to install the extension.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

- **Other Browsers**

React DevTools is primarily available for Chrome and Firefox. For other browsers, we may need to use alternative methods or tools.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)     

## 2. Overview of Features

React DevTools provides an interface for interacting with the React component tree and inspecting the various components, props, and state of a React application. Below are the main features available.  

**React Component Tree**  
- React DevTools displays the structure of our React components as a tree, showing how components are nested within each other.   
- We can see each component and navigate between them to understand their relationships.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Inspecting Props and State**  
- React DevTools allows us to inspect the props and state of each component. 
- We can inspect the props and state of any component by selecting it in the component tree. 
- This is crucial for understanding what data is being passed to each component and how it affects the UI.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Selecting Components**
- Using the "Select a Component" tool (which looks like a pointer inside the Components tab), we can select a component on the screen to inspect its properties and state. 
- We can select a component in the browser and see it highlighted in the React DevTools panel.
- This is useful for quickly understanding the data being used by any part of the UI.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Viewing Source Code**  
- React DevTools allows us to view the source code for any component by clicking on the component in the tree. 
- This will open the relevant file in our browser’s developer tools. 
- This feature helps us quickly navigate to the relevant part of our codebase.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Filtering**  
- React DevTools allows us to filter out native HTML elements, showing only React components.  
- This makes the component tree cleaner and easier to navigate.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Editing Props**  
- We can edit the props of a component directly in the React DevTools panel.  
- This is useful for testing how our component behaves with different prop values.    


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)     

## 3. Using React DevTools  

**Opening React DevTools**

- Open React application in the browser.

- Open the `browser's Developer Tools` (usually by pressing ***F12*** or ***Ctrl+Shift+I***).

- Navigate to the `"Components"` tab in the `Developer Tools`.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Inspecting Components**

- We can see the new **Component** tab after the installation of DevTools. 
- In the `"Components"` tab, we will see the component tree of our React application.
- In the `"Components"` tab, we can:
    - Navigate the React component tree.
    - Inspect the `props` and `state` of any component by selecting it.
    - View the rendered output of each component.


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)     

## 4. Debugging with React DevTools  

React DevTools is extremely helpful for debugging issues in our React application:

- **Check Props**: If a component is not rendering correctly, check its props to ensure they are being passed correctly.
- **Track State Changes**: If a component is supposed to update in response to user actions, check the state changes to verify that they are being handled properly.
- **Inspect Component Renders**: Using the profiler (discussed in advanced features), we can monitor how often components are rendering and identify any unnecessary re-renders.   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  


## 5. Troubleshooting Common Issues

- **Props Not Updating**: If props are not updating correctly, check that we are passing them properly through each layer of components.
- **State Not Updating**: Ensure that the state is being updated via useState or setState and that any changes are triggering re-renders.
- **Component Not Rendering**: Verify that the component is correctly mounted, that it’s receiving the correct props, and that no errors are preventing it from rendering.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)     

## 6. Advanced Features  

**Profiling and Performance Monitoring**  

React DevTools includes a **Profiler tab** (in React 16.5+), which allows us to monitor the performance of our app.  
We can track how long it takes for components to render, and we can identify unnecessary renders that might be slowing down our app.

***How to use the Profiler:***

1. In the "Profiler" tab, click on `"Record"` to start capturing render performance data.
2. Interact with our app as usual (click buttons, change inputs, etc.).
3. Once we've completed some actions, click `"Stop"` to see a report of the render times for each component.
4. The Profiler will show you which components are slow to render or are rendering too frequently, helping us optimize our app’s performance.  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)     

# Example Question: Debugging and Enhancing the Contact Card App

### 1. Set Up the Project  
- We’ll create a simple React app that displays contact cards. 
- Each card will show a name, avatar image, phone number, and email. We’ll use React DevTools to debug and enhance the app.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)   

### 2. Folder Structure  
Here’s the folder structure we’ll use:
```sh
src/
├── components/
│   ├── Card.jsx
│   ├── Detail.jsx
├── App.js
├── contacts.js
├── index.css
├── index.js
```  
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

### 3. Step-by-Step Code   

**Step 1: Create contacts.js (Sample Data in data/contact.js)**  
This file contains the data for the contacts.  

```js
const contact = [
    {
        name: 'Senior Developer',
        image: image1,
        phone: '00000000000',
        email: 'seniordev123@example.com',
    },
    {
        name: 'Intermediate Developer',
        image: image2,
        phone: '4444444444',
        email: 'intermediatedev123@example.com',
    },
    {
        name: 'Junior Developer',
        image: image3,
        phone: '00000000000',
        email: 'juniordev@gmail.com',
    }
];

export default contact;
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools) 

**Step 2: Create Detail.jsx (Reusable Component)**    

This component will display a single piece of contact information (e.g., phone number or email).  

```jsx
function Detail(props){
    return <p className="detail">{props.detailInfo}</p>
}
export default Detail;
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)  

**Step 3: Create Card.jsx (Contact Card Component)**  

This component will display a contact card using the `Detail` component.  
```jsx  
import Details from './Detail.jsx'
function Card(props){
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>     {/* //"Senior Developer" */}
                <img className="circle-img" src={props.image} alt= {props.name} />     {/* image= image 1    , name = "Senior Developer*/}
            </div>
            <div className="bottom">
                {/* Use the Detail component for phone and email */}
                <Details detailInfo = {props.phone}/>        {/*phone = '00000000000' */}
                <Details detailInfo ={props.email} />         {/* email  =  'seniordev123@example.com'*/}
            </div>
        </div>
    )
}

export default Card;
```

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)     

**Step 4: Create App.js (Main App Component)**

This component will render multiple `Card` components, passing the necessary props.    
```jsx
import Card from './components/Card'
import contacts from './data/contact'
import './App.css'

function App() {

  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Card 
        name = {contacts[0].name}      // "'Senior Developer'"
        image = {contacts[0].image}    //image1
        phone = {contacts[0].phone}    //'00000000000'
        email = {contacts[0].email}    // 'seniordev123@example.com'
      />

      <Card 
        name = {contacts[1].name}
        image = {contacts[1].image}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
      />

      <Card 
        name = {contacts[2].name}
        image = {contacts[2].image}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
      />
    </div>
  )
}

export default App;

```   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)   

**Step 5: Add Styling in index.css**  

Add some basic styling to make the app look presentable.

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.heading {
  text-align: center;
  color: #333;
}

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;
  width: 300px;
  text-align: center;
}

.top {
  margin-bottom: 20px;
}

.circle-img {
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100px;
  height: 100px;
}

.bottom {
  text-align: left;
}

.detail {
  margin: 10px 0;
  color: #555;
}
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)  

**Step 6: Render the App in main.jsx**  

This is the entry point for the React app.  
```jsx 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```  
[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

### 4. Debugging with React DevTools

**1. Install React DevTools:**

- Install the React DevTools extension for desired browser (Chrome or Firefox).  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)  

**2. Open React DevTools:**

- Open your React app in the browser.
- Open the browser’s Developer Tools (F12 or Ctrl+Shift+I).
- Go to the Components tab in React DevTools.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)   

**3. Inspect the Detail Component:**

- Select the `Detail` component in the component tree.
- Check the `props` section to ensure the `detailInfo` prop is being passed correctly.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/cut_line.png)](#devtools)   

**4. Inspect the Card Component:**

- Select the `Card` component in the component tree.
- Verify that the `img`, `tel`, and `email` props are being passed correctly.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)   

### 5. Enhancing the App  

**Add an address Field (UPDATED On CODE)**

1. Update `contacts.js` to include an `address` field  
2. Update `Card.jsx` to display the `address` using the `Detail` component  
3. Update `App.js` to pass the `address` prop 

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)   

### 6. Final Output

The app will display three contact cards, each with:

- Name
- Avatar image
- Phone number
- Email
- Address  


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)   