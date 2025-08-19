// Option 1: Using JSX.Element as Return Type
import './App.css'
const App: React.FC = () => {

  return (
    <div>
      <h1>Functional Component</h1>
    </div>
  );
}

export default App;


          // Option 2: Using JSX.Element as Return Type

// import type { JSX } from 'react';
// import './App.css'

// const App=  (): JSX.Element => {

//   return (
//     <div>
//       <h1>Functional Component</h1>
//     </div>
//   );
// }

// export default App
