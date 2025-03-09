import React from 'react'
import './Parent.css'
import Child from './Components/Child.jsx'
import reactLogo from './assets/react.svg'


                  // 1. Sample Props Example 

// function Parent() {
  
//   return (
//     <>
//       <Child message = "This is the message from Parent Component" />
//     </>
//   )
// }

// export default Parent




              //2. Passing Primitive Data Types
              //4. Using Default props 
              //5. Destructuring Props
function Parent() {
  
  return (
    <>
      <Child name="Developer" age = {23} email="developer123@example.com" img= {reactLogo}  />
      <Child />

    </>
  )
}

export default Parent



            //  3. Passing Arrays or Objects
// function Parent() {
//   const items = ['apple', 'banana', 'cherry'];
//   return <Child items={items} />;
// }

// export default Parent  





