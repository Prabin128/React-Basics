
                                      //Simple count increment  and decrement

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);  // count is the state, setCount is the setter function


//   // Max and Min values
//   const MAX_COUNT = 100;
//   const MIN_COUNT = 0;

  
//   const increase = () => {
//     setCount(count + 1);  // Increases count by 1
//   };

//   const decrease = () => {
//     setCount(count - 1);  // Decreases count by 1
//   }; 

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <div className="button-container">
//         <button onClick={increase}>+</button>
//         <button onClick={decrease}>-</button>
//       </div>
//     </div>
//   );
// }

// export default App




                          //Adding some spices

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);  // count is the state, setCount is the setter function
  const [message, setMessage] = useState(''); // state to store feedback message


  // Max and Min values
  const MAX_COUNT = 100;
  const MIN_COUNT = 0;

  
  const increase = () => {
    setCount((previousCount)=>{
      const newCount = previousCount + 1;
      if (newCount > MAX_COUNT){
        setMessage('Cannot go above 100'); // Set message when trying to increase sbove MAX_COUNT
        return MAX_COUNT; // Cap the value at MAX_COUNT
      }
      return newCount;
    });  
    setMessage('');
  };

  const decrease = () => {
    setCount((previousCount) => {
      const newCount = previousCount - 1;
      if (newCount < MIN_COUNT){
        setMessage('Cannot go below 0');  // Set message when trying to decrease below MIN_COUNT
        return MIN_COUNT; // Prevent count from going below MIN_COUNT
      }
      return newCount;      
    });  
    setMessage('');
  }; 

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <div className="button-container">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default App