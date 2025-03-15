// 3. Create a `Navbar.jsx` component that renders a `<nav>` element with a list of links to different sections of the website (e.g., Home, About, Contact).
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Blog Website</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
