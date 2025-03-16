import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bookstore from './data/bookStore.js'
import Book from './Components/Book'

// function App() {

//   return (
//     <div>
//       <h1>Book Store Inventory</h1> 
//       {bookstore.map((book)=>(
//           <Book 
//             key = {book.id}
//             title = {book.title}
//             author = {book.author}
//             description = {book.description}
//           />
//         ))}
//     </div>
       
//   )
// }



function App() {
  return (
    <div className="bookstore">
      <h1>Bookstore Inventory</h1>
      <div className="book-container">
        {bookstore.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image} // Assuming each book object has an image property
          />
        ))}
      </div>
    </div>
  );
}


export default App
