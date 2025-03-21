// We will be using and arrow function from now on. 
import './Input.css' 

const Input = (props) => {
    return (
        <div className="input-container">
            <input type={props.type} placeholder={props.placeholder} className="input" />
        </div>
    );
}

                // Or using a Destructuring  
                
// const Input = ({type, placeholder}) => {
//     return (
//         <div>
//             <input type={type} placeholder={placeholder} />
//         </div>
//     );
// }

export default Input;