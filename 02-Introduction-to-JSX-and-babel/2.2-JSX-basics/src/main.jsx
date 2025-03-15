/* `StrictMode` is a wrapper component provided by React that helps to identify potential problems in an application. 
It doesn't render any visible UI but activates additional checks and warnings for its children in development mode. */
import { StrictMode } from 'react'   

/* `createRoot` is the method used to create a root React node. 
This method is part of the new React 18 API, which allows you to manage the rendering process more efficiently. */
import { createRoot } from 'react-dom/client'

/*This imports the App component from the App.jsx file. The App component is the main component of your application that gets rendered.*/
import App from './App.jsx'

import './index.css'



/*
                                            createRoot(document.getElementById('root')).render(...):

    - createRoot(document.getElementById('root')) creates a root where the React component tree will be rendered.
    - .render(...) renders the React component (in this case, <App />) inside the root element identified by document.getElementById('root'). */

createRoot(document.getElementById('root')).render(
  <StrictMode>   {/** `<StrictMode>` wraps the <App /> component to help us catch potential issues(error) early in the development process. */}
     <App />     { /* `<App />` is the root component of your application, which is defined in App.jsx. */}
    
  </StrictMode>,
)
