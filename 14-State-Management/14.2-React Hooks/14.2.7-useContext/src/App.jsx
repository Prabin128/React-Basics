import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import Page from './components/Page'

function App() {
  const [theme, setTheme] = useState("dark");
  
  // Provide both theme and setTheme
  const contextValue = { theme, setTheme };

  return (
    // Step 2: Provide the context
    <ThemeContext.Provider value={contextValue}>
      <div
        style={{
          background: theme === "dark" ? "#222" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>App Component</h1>
        <Page />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
