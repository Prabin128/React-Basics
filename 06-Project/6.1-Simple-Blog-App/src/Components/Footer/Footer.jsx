//6. Create a `Footer.jsx` component that displays a copyright notice and the current year dynamically.
//    - Display a copyright notice and the current year dynamically using JavaScript's Date().getFullYear() method.
import "./Footer.css";

const getDateData = new Date().getFullYear();

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">🌍 Blog Website</div>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <p className="footer-text">© {getDateData} Blog Website. All Rights Reserved.</p>
    </footer>
    </>
  );
}

export default Footer;
