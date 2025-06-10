// 6. Build the ProductList Component

//     Display list of products (from static array).
//     For each product:
//         Show title, price, image, and an “Add to Cart” button.
//     When button is clicked:
//         Call the addToCart() function from context and pass the item.
import products from '../data/SampleCartData.js'
import {useCart} from '../context/CartContext.jsx'

const ProductList = ()=>{

    const { addToCart } = useCart();

    return(
        <div className="product-list"> 
            <h2>Products</h2>
            <div className="products">
                {products.map((product)=>(
                    <div className='product' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;