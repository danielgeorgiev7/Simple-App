import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-company">
        <img src="./xtrmnd.png" alt="Logo" className="logo-footer" />
        <p>
          &copy;<a>Your Company Name</a>
        </p>
      </div>
      <div className="footer-contacts">
        <p>Address, City, State, ZIP Code</p>
        <p>
          Phone: <a href="tel:YourPhoneNumber">Your Phone Number</a>
        </p>
        <p>
          Email: <a href="mailto:YourEmailAddress">Your Email Address</a>
        </p>
      </div>
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </nav>
      <div className="footer-socials">
        <p>Follow us on:</p>
        <a href="https://twitter.com/YourProfile" target="_blank">
          Twitter
        </a>
        <a href="https://www.facebook.com/YourProfile" target="_blank">
          Facebook
        </a>
        <a href="https://www.linkedin.com/in/YourProfile" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
