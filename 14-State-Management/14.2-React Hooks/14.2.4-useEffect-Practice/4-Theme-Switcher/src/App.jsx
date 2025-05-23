import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  //Toggle Theme handler
  const toggleTheme = () =>{
    setTheme(prev => (prev  ==  'light' ? 'dark' : 'light'));
  }
  
  ///useEffect to update DOM when theme changes
  useEffect(()=> {

    //update background color
    document.body.style.background = theme === 'light' ? '#ffffff' : '#121212';

    //update document title
    document.title ==  `Current Theme:  ${theme}`;

  }, [theme]);  //run this effect whenver theme changes
  return (
      <div style={{ color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App
