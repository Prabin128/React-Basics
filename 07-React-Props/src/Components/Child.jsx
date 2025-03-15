import React from "react"; 
import PropTypes from 'prop-types';



  //1. Sample Props Example

// function Child (props){
//     return (
//         <>
//             <h1>This is the part rendered  from the Child Component</h1>
//             <h1>{props.message}</h1>

//         </>
//     )
// }

//export  default Child;  



                //2. Passing Primitive Data Types   
                //4. Using Default props  
                
function Child(props) { 
    console.log('Props received in Child:', props); // Check what props are received
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}  </p>
            <p>Email: {props.email}  </p>
            <img src={props.img} alt="photo"/>
        </>
    );
}

// Defining default props for Child component
Child.defaultProps = {
    name: 'Unknown',               // Default name if not passed
    age: 30,                       // Default age if not passed
    email: 'no-email@example.com', // Default email if not passed
    img: 'https://via.placeholder.com/150' // Default image if not passed
};

// Define prop types for the Child component
Child.propTypes = {
    name: PropTypes.string.isRequired,      // name must be a string and is required
    age: PropTypes.number.isRequired,      // age must be a number and is required
    email: PropTypes.string.isRequired,    // email must be a string and is required
    img: PropTypes.string.isRequired,      // img must be a string (URL of the image) and is required
};

export default Child; // Export the component at the end 



                // 3. Passing Arrays or Objects
// function Child(props) {
//     return (
//       <ul>
//         {props.items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     );
// }

// export  default Child;




                //5. Destructuring Props

// function Child({name,age, email, img}){
//     return (
//         <>
//             <h2>Name: {name}</h2>
//             <p>Age: {age}</p>
//             <p>Email: {email}</p>
//             <img src={img} alt={name} />           
//         </>
//     )
// }

// export default Child;