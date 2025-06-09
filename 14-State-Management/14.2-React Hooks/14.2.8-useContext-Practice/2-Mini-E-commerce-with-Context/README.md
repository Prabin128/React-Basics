# Mini E-Commerce with Context API  

## 🧱 STEP-BY-STEP INSTRUCTION  

**1. Setup Your React Project**

- Create a new React app using Vite or Create React App.
- Set up the folder structure:
    - `components/` → for Navbar, ProductList, Cart
    - `context/` → for CartContext

**2. Design the Cart Data**

- Think of what a single product/item looks like.
    - Example properties: `id`, `title`, `price`, `image`, `quantity`
- Decide where you’ll store sample product data (hardcoded array is fine).

**3. Create the Cart Context**

Inside `context/CartContext.jsx`:

- Create the context.
- Create a provider component.
- Use `useState` to manage `cartItems` (an array).
- Add functions: `addToCart`, `removeFromCart`, `clearCart`.
- Pass both `cartItems` and functions as values via the context provider.

**4. Wrap Your App with CartContext.Provider**

- In our root component (usually `App.jsx` or `main.jsx`), wrap the app with `<CartProvider>`, so that all child components can access the context.

**5. Build the Navbar Component**
- Create a Navbar that:
    - Shows a title.
    - Shows a cart icon or badge with the total number of items (sum of quantities).
    - Accesses the context to get `cartItems` length.

**6. Build the ProductList Component**

- Display list of products (from static array).
- For each product:
    - Show `title`, `price`, `image`, and an `“Add to Cart”` button.
- When button is clicked:
    - Call the `addToCart()` function from context and pass the item.

**7. Build the Cart Component**

- Display all items currently in the cart:
    - Show name, price, quantity
    - Optionally, show total price per item and overall total

- Add buttons for:
    - `removeFromCart(itemId)`
    - `clearCart()` to empty the cart

**8. Tie It All Together**

- Use routing or conditional rendering if needed:
    - Show the product list on the home page.
    - Show the cart when user clicks the cart icon.
- Make sure context updates reflect instantly across all components.

**9. Test the Flow**

- Add products to cart and ensure:
    - Cart icon updates count in Navbar.
    - Cart list updates correctly.
    - Removing/clearing works as expected.

**10. Stretch Goals (Optional, for more practice)**

- Add quantity increment/decrement buttons.
- Persist cart to localStorage so it survives page refresh.
- Show a success message when a product is added.