          //Normal code without history of all searched terms.

// import { useState, useRef, useEffect } from 'react';
// import './SearchBox.css';

// function SearchBox() {
//   const [inputValue, setInputValue] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const prevSearchRef = useRef('');

//   // Update prevSearchRef only when searchTerm changes
//   useEffect(() => {
//     if (searchTerm) {
//       prevSearchRef.current = searchTerm;
//     }
//   }, [searchTerm]);

//   const handleSearch = () => {
//     setSearchTerm(inputValue);
//     setInputValue('');
//   };

//   return (
//     <div className="search-box">
//       <h2>Search Box</h2>
//       <div className='search-controls'>
//           <input
//           type="text"
//           placeholder="Type your search..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       </div>

//       <div className="results">
//         <p><strong>Current Search Term:</strong> {searchTerm}</p>
//         <p><strong>Previous Search Term:</strong> {prevSearchRef.current}</p>
//       </div>
//     </div>
//   );
// }

// export default SearchBox;




                //Previous code + Keeping a history of all searched terms.
import { useState, useRef, useEffect } from 'react';
import './SearchBox.css';

function SearchBox() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const prevSearchRef = useRef([]);  //initializing the useRef with an empty array

  // Update prevSearchRef only when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      prevSearchRef.current = [searchTerm, ...prevSearchRef.current].slice(0, 5);  // keep latest 5
    }
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setInputValue('');
  };

  return (
    <div className="search-box">
      <h2>Search Box</h2>
      <div className='search-controls'>
          <input
          type="text"
          placeholder="Type your search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results">
        <p><strong>Current Search Term:</strong> {searchTerm}</p>
        <p><strong>Previous Search Term:</strong> {prevSearchRef.current}</p>
        <p><strong>Search History (last 5):</strong></p>
        <ul>
          {prevSearchRef.current.map((item, index) => {
            <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchBox;

