import { useCart } from "../context/CartContext";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Mini Shop</h1>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          🛒
          <span className="cart-count">{getTotalItems()}</span>
        </div>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </nav>
  );
};

export default Navbar;