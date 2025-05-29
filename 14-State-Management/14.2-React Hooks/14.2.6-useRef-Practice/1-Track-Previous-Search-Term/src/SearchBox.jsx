import { useState, useRef, useEffect } from 'react';
import './SearchBox.css';

function SearchBox() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const prevSearchRef = useRef('');

  // Update prevSearchRef only when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      prevSearchRef.current = searchTerm;
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
      </div>
    </div>
  );
}

export default SearchBox;

