import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Post from './Components/Post/Post.jsx'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Post />
        <Footer />
      </div>
    </>
  )
}

export default App   




