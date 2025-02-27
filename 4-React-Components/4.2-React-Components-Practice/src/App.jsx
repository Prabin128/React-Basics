import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App(){
    return(
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}

export default App;