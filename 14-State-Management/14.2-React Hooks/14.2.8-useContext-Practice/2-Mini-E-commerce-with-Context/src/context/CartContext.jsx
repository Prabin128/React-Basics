// 3. Create the Cart Context

// Inside context/CartContext.jsx:

//     Create the context.
//     Create a provider component.
//     Use useState to manage cartItems (an array).
//     Add functions: addToCart, removeFromCart, clearCart.
//     Pass both cartItems and functions as values via the context provider.
import { createContext } from "react"; 

//Create Context
export const CartContext = createContext()

//create provider component 
const CartProvider = ()=>{

    // Use useState to manage cartItems (an array).
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product from the cart (increase quantity or add new product to cart)
    const addToCart = (product)=>{
        setCartItems((prevItems) => {
            const existingItems = prevItems.find((item) => item.id === product.id);
            if(existingItems){

                // If exists, increase quantity
                return prevItems.map((data)=>(
                    data.id === product.id ? {...data, quantity: data.quantity + 1} : data
                ));
            }else{
                 // If not exists, add with quantity = 1
                return [...prevItems, { ...product, quantity: 1 }];
            }

        })
    };

    // Function to remove a product from the cart (decrease quantity or remove entirely)
    const removeFromCart = (product) =>{
        setCartItems((prevItems)=>{
            const existingItems = prevItems.find((item)=>item.id === product.id);
            if(existingItems.quantity === 1){
                return prevItems.filter((item) => item.id !== product.id)
            }else{
                return prevItems.map((item)=>(
                    item.id === product.id ? {...item, quantity: item.quantity - 1} : item
                ));
            }
        });
    }

    const clearCart = () =>{
        setCartItems([]);
    }

    const getTotalItems = () =>{
        return cartItems.reduce((total, item) => total + item.quantity, 0);  //0 is an initialization for total as total=0
    }

    const getTotalPrice = (product) =>{
        return cartItems.reduce((total,item)=> total +item.price * item.quantity, 0);
    }

    return(
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
