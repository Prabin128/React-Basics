import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const image2 = 'https://m.media-amazon.com/images/I/91mrVIMAMCL.jpg';
const image3 = 'https://m.media-amazon.com/images/I/91oMmAPaaeL.jpg';
function App() {

  return (
    <>
    <div>
      <h1 className="heading" contentEclassName = "movie-picture" ditable = "true"  spellCheck ="false">Top 3 Best Movies</h1>
      <ul>
        <li>Spiderman</li>
        <li>TOP GUN</li>
        <li>TENET</li>
      </ul>
    </div>

    <div>
          <h1>TOp 3 Best Movies with their Images</h1>
          <img alt = 'spiderman' className = "movie-picture" src='https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/12/IMG_4483-scaled.jpeg'></img>
          {/* We can also pass the variable inside the attributes as below: */}
          <img alt = 'top gun' className = "movie-picture" src= {image2} />
          <img alt = 'tenet' className = "movie-picture" src={image3} />
    </div>
    </>
  )
}

export default App
