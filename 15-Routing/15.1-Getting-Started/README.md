# React Router   

## 📘 1. Introduction to React Router

- React is a popular **JavaScript library** used for building modern web user interfaces.
- One critical requirement in modern web apps is **routing**, which allows:
    - Navigation between different views or pages.
    - Displaying specific content based on the user's interaction or URL changes.
- **React does not include routing by default.**
    - React is **focused** only **on** the **UI layer**.
    - To handle routing, we use an **external library** called **React Router**.
- In Single Page Applications (SPAs)—where the app runs on a single HTML file—routing becomes essential to:
    - ✅ Navigate users to different sections or views.
    - ✅ Dynamically load content without reloading the whole page.
    - ✅ Ensure a seamless and fast user experience.
- React Router helps implement these navigation features effectively:
    - Allows us to define different paths and map them to components.
    - Updates the UI based on the current route, without a full-page refresh.
- React Router helps implement these navigation features effectively:
    - Allows us to define different paths and map them to components.
    - Updates the UI based on the current route, without a full-page refresh.
    - Enables redirecting users based on their actions (e.g., after login or form submission).
    - Though powerful, it can be tricky to set up at first—but understanding its core features makes it much easier to use.
    In short, **React Router is essential** for building scalable, real-world **SPAs** using React.

## 2. What is React Router?

- **React Router** is a standard and widely-used **routing library** for React applications.
- It allows us to **map URL paths to specific React components**.
- Enables **navigation within SPAs** without refreshing the browser window.
- With React Router, we can:
    - Define **routes** that render different components based on the current URL.
    - **Navigate** between views declaratively using links or programmatically using functions.
    - Handle **dynamic routing** using parameters in URL paths.
    - Show **custom components** for unmatched routes (404 handling).
- It improves user experience by providing **smooth, seamless transitions** between views in **SPAs**.


## Why Use React Router?

- Routing is essential in building anything beyond a basic app.
- Benefits of using React Router include:
    - ✅ Enables page-to-page navigation in SPAs.
    - ✅ Avoids full-page reloads, updating only the necessary content.
    - ✅ Supports dynamic route parameters (e.g., /user/:id).
    - ✅ Allows programmatic redirection based on user actions (e.g., after login).
    - ✅ Helps display a custom 404 page using a no-match fallback route.
    - ✅ Provides declarative navigation through <Link> and <NavLink> components. 

## 🧭 Key Features of React Router

**1. 🔄 Dynamic Routing**  
- Lets us define routes with variables (e.g., `/product/:id`).
- Enables displaying different content based on **dynamic values in the URL**.  
```jsx
<Route path="/user/:id" element={<UserProfile />} />
```  

**2. 🧠 Programmatic Navigation**    
- Use the `useNavigate()` hook to **redirect users based on logic or events**.  
```jsx
const navigate = useNavigate();
navigate("/dashboard");
```    

**3. ❌ No-Matching Routes (404 Page)**  
- Define a catch-all route using `*` to show a **custom error or Not Found page**.  
```jsx
<Route path="*" element={<NotFound />} />
```     

**4. 🧾 SPA (Single Page Application) Support**  
- Works seamlessly in SPAs by **changing views without reloading** the whole page.  
- Enhances user experience with **faster transitions** and **better performance**.  

**5. 🔗 Declarative Navigation**  
- Use `<Link>` or `<NavLink>` to allow navigation **without refreshing the page**.  
```jsx
<Link to="/about">About</Link>
```  

**Summary**  

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Dynamic Routing**    | Routes are rendered as components, allowing runtime route generation.       |
| **Declarative Routing**| Use `<Routes>` and `<Route>` components to map URLs to views.               |
| **Programmatic Navigation** | Navigate using `useNavigate()` hook for redirection after events.       |
| **Nested Routes**      | Compose multiple route levels for complex UIs.                              |
| **404 Handling**       | Render a fallback component for unmatched or invalid routes.                |
| **SPA Optimization**   | No full-page reloads, ensuring fast and smooth navigation.                  |

---  

# Server-Side vs. Client-Side Routing in React

Routing determines how navigation between different pages/views in a web application is handled. In React applications, there are two main approaches:

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/serverside_vs_clientside.png)](#Routing)   


## 🚀 Client-Side Routing

### 🔧 How it Works:

- Routing is handled entirely by JavaScript in the browser  
- When a user clicks a link, React intercepts the request and updates the UI without a full page reload  
- Only the necessary components are re-rendered  

### ✅ Key Characteristics:

- ⚡ Faster transitions between views (no full page reload)  
- 💡 Smoother user experience (feels more like a native app)  
- 📄 The server only sends a single HTML page initially  
- 🔄 Subsequent routing is managed by **React Router** (or similar libraries)  



## 🖥️ Server-Side Routing

### 🔧 How it Works:

- Traditional approach where each URL change requests a new page from the server  
- The server processes the request and sends back a complete HTML page  
- Full page reload occurs with each navigation  

### ✅ Key Characteristics:

- 🌐 Each route results in a new HTTP request to the server  
- 🧠 The server is responsible for rendering the appropriate view  
- 📃 The browser receives and displays a complete HTML document each time  

---

## 🔁 Hybrid Approaches

Modern frameworks like **Next.js** offer hybrid solutions:

- 🛠 Initial page load is server-rendered (great for SEO)  
- 🚀 Subsequent navigation uses client-side routing (smooth UX)  
- 🔄 This is known as **universal** or **isomorphic** rendering  

---

## 📌 When to Use Each

### Use **Client-Side Routing** when:

- 🧩 Building interactive web applications  
- 🔄 Maintaining state between views is important  
- 📱 You want an app-like feel  

### Use **Server-Side Routing** when:

- 📈 SEO is critical and you can't use SSR  
- 📚 Your app has mostly static content  
- 🚫 You need to support browsers with JavaScript disabled  

---

> 🛠 In modern React development, **client-side routing** (often combined with **server-side rendering** for the initial load) is the most common approach for building **SPAs (Single Page Applications)**.


## 🔑 Key Concepts

Before we jump into coding, it's important to get familiar with some foundational terms used in routing with React:

- **Route**: Represents the connection between a specific URL path and the component that should be displayed for it. When the browser navigates to a certain path, the matching component is shown.

- **Router**: Acts as the core system that handles routing logic in the app. For web-based React apps, `BrowserRouter` is commonly used, while `HashRouter` is better suited for static file hosting environments.

- **Nested Routes**: These allow you to define child routes inside parent routes. This is especially helpful for layouts or pages that share common UI components (like headers or sidebars).

- **Link**: A special component from React Router that works like a regular anchor (`<a>`) tag, but without causing a full page reload. It updates the URL and navigates within the app seamlessly.


## 🔧 Installation
React makes use of an external library to handle routing; however, before we can implement routing with that library, we must first install it in our project, which is accomplished by running the following command in your terminal (within our project directory):
```sh 
npm install react-router-dom
```   
After successfully installing the package, we can set up and configure the React router for our project.  

## 📁 Basic Folder Structure  
```sh
/my-app
  /src
    /pages
      Home.jsx
      About.jsx
    /components
    App.js
    index.js
```   
## 🚀 4. Getting Started with Routing  

**Step 1: Setup BrowserRouter**  

In  `index.js` or `main.jsx`:  

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```  

**Step 2: Define Routes in `App.js`**   
```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```  

## 🧭 Core Components of React Router   

**🔹 `<BrowserRouter>`**

Wraps our app and enables routing functionality.  

**🔹 `<Routes>`**  

A container that holds all our routes.

**🔹 `<Route>`**

Defines the route’s path and the component to render.
```jsx
<Route path="/contact" element={<Contact />} />
```  
**🔹 `<Link>`**

Used to navigate without reloading the page.
```jsx
import { Link } from 'react-router-dom';

<Link to="/">Go to Home</Link>
```  

**🔹`<NavLink>`**  
Same as `<Link>`, but provides active styling for the current route.  
```jsx
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```
Use `NavLink` when building navigation menus and we need to visually indicate which page is active. 

## Navigating Programmatically  

**🔹 `useNavigate()` Hook**  
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return <button onClick={goToAbout}>Go to About</button>;
}
```  

## 🧩 Route Parameters

Use `:` to define a dynamic parameter.  
**🔸 Route definition:**
```jsx
<Route path="/user/:id" element={<User />} />
```  

**🔸 Accessing the param:**
```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```  

## 🧮 Query Parameters  

React Router doesn't handle query params natively—we use `useLocation()`.

```jsx
import { useLocation } from 'react-router-dom';

function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const term = query.get('term');

  return <h2>Search Term: {term}</h2>;
}
```  

## 📚 Nested Routes  

**App.jsx:**   
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="analytics" element={<Analytics />} />
  <Route path="reports" element={<Reports />} />
</Route>
```  

In `Dashboard.js`:  
```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Nested children will render here */}
    </div>
  );
} 
```    
**Index Route (Default child route)**  

Use `index` to define the default child when no path is matched/specified.

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="analytics" element={<Analytics />} />
</Route>
```
This means when a user visits `/dashboard`, the `DashboardHome` component is shown by default.

## 🧱 Layout Routes   
**Purpose**: When we have a common UI (like sidebar/header/footer), wrap it using a layout route: 

```jsx
<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```  

`MainLayout.jsx`:

```jsx
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```  
This structure allows nested routes to inherit the layout automatically.  

## 🔐 Protected Routes (Authentication)
```jsx
function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('isLoggedIn');
  return isAuth ? children : <Navigate to="/login" />;
}
```  

Usage:
```jsx
<Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />
```  

## 🔄 Redirects

Use `<Navigate />` to redirect:
```jsx
<Route path="/old" element={<Navigate to="/new" />} />
```  

## 🧰 Not Found Page
```jsx
<Route path="*" element={<NotFound />} />
```  
This will match any route that wasn’t matched above it.  

## 💬 useLocation() & useHistory()

**`useLocation()`**

Gives current URL info.

```jsx
const location = useLocation();
console.log(location.pathname); // '/about'
```  
 
`useNavigate()` replaces `useHistory()` from older versions.

## 🔁 useOutletContext() (Sharing data between parent and nested route)

In parent:
```jsx
<Outlet context={{ user: 'Praveen' }} />
```  
In nested child:
```jsx
const { user } = useOutletContext();
```  

## 🧪 Lazy Loading Routes  

```jsx
import { lazy, Suspense } from 'react';
const LazyAbout = lazy(() => import('./About'));

<Route
  path="/about"
  element={
    <Suspense fallback={<h1>Loading...</h1>}>
      <LazyAbout />
    </Suspense>
  }
/>
```    

## 🛑 Error Boundaries (React Router v6.4+)  
We can handle route-level errors using `errorElement`.

```jsx
<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
  <Route index element={<Home />} />
</Route>
Useful for catching errors from loaders or rendering logic and displaying custom error UIs.
# 🪝 All Useful Hooks Recap  

| Hook                 | Purpose                        |
| -------------------- | ------------------------------ |
| `useParams()`        | Get dynamic params from URL    |
| `useNavigate()`      | Programmatically navigate      |
| `useLocation()`      | Access current URL info        |
| `useOutlet()`        | Render nested route children   |
| `useOutletContext()` | Share context to nested routes |
