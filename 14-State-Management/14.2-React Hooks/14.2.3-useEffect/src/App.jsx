import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Max and Min values
  const MAX_COUNT = 100;
  const MIN_COUNT = 0;

  const [count, setCount] = useState(0);  // count is the state, setCount is the setter function
  const [message, setMessage] = useState(''); // state to store feedback message
  const [posts, setPosts] = useState([]);

                          //useEffect 

  // 1. Runs after every render
  useEffect(()=>{
    console.log("🔁 Effect with no dependency");
    
  });

  // 2. Runs only once
  useEffect(() => {
    console.log("🏁 Component mounted (empty array)");
    fetch('https://jsonplaceholder.typicode.com/posts')  //dummy blog posts data provided by JSONPlaceholder —a free fake API for practice).
      .then(res => res.json())   //convert the response to JSON (gives us a JavaScript array of objects, which we can work with)
      .then(data => setPosts(data.slice(0, 3)));  ///slice(0, 3): take only the first 3 posts.
  }, []);     // empty array means runns only once.


  // 3. Runs when count changes
  useEffect(() => {
    console.log(`🎯 Count is now ${count}`);
  }, [count]);

  // 4. Timer effect with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("⏱ Tick");
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);


                            //useState 

  //Count value increases whe + button is clicked 
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

  //count value decreases when - is clicked
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
      <h3>useEffect Practice</h3>
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <div className="button-container">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <h2>{message}</h2>
      <div>
          <h3>Fetched Posts</h3>
          <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
          </ul>
    </div>
    </div>


  );
}

export default App