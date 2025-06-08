import { useState } from 'react'
import './App.css'
import LanguageProvider from './context/LanguageContext.jsx'
import LanguageSelector from './components/LanguageSelector'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <LanguageProvider>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <LanguageSelector/>
        <Home/>
        <About/>
        <Footer/>
      </div>
    </LanguageProvider>


  )
}

export default App
