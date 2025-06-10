import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <main>
        <ProductList />
      </main>
    </div>
  )
}

export default App
