import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';
import { useEffect } from 'react';

function App() {
  // 1. State for the search term (what user types)
  const [searchTerm, setsearchTerm] = useState('');
  // 2. State for storing API results
  const [results,setResults] = useState([])
  // 3. State for loading status
  const [isLoading, setIsLoading] = useState(false);
  // 4. State for error handling
  const [error, setError] = useState(null);


  useEffect(()=>{
    //Only search when the term has 2 or  more characters
    if(searchTerm.length <2){
      setResults([]);
      setError(null);
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!response.ok){
          throw new Error("Network response was not ok!");
        }

        const data = await response.json();

        ///filtering data 
        const filteredData  = data.filter(user => 
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredData);

      }catch(err){
        setError(err.message)
        setResults([]);
      }finally {
        setIsLoading(false);
      }
    };

    //Add delay to prevent too many API calls while typing
    const timerId = setTimeout(fetchData, 500);

    // Cleanup function to cancel the timer
    return ()=>clearTimeout(timerId)
  },[searchTerm])  //useEffect runs when searchTerm changes

  return (
    <div  className='app'>
      <h1>Search Filter</h1>
      <div className='search-container'>
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder='Type to Search'
          className='search-input'
        />
        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
      </div>

      <div className='results'>
        {results.length >0 ? (
          <ul>
            {results.map((data)=>(
              <li key={data.id} className='result-item'>
                {data.name}
              </li>
            ))}
          </ul>
        ) : (
          searchTerm.length >= 2 && !isLoading && !error && (
            <div className="no-results">No results found</div>
          )
        )}
      </div>
    </div>
  )
}

export default App
