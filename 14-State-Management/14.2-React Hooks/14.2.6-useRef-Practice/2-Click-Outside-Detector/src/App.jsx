// 

import { useRef, useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return; // Only attach listener when open

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]); // Only re-run when `isOpen` changes

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>

      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            marginTop: '8px',
            padding: '10px',
            background: '#f0f0f0',
            border: '1px solid #ccc',
            width: '200px',
          }}
        >
          Dropdown Content
        </div>
      )}
    </div>
  );
}

export default App;
