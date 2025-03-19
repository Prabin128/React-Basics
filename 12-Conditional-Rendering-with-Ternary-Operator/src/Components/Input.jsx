// We will be using and arrow function from now on. 

const Input = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} />
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