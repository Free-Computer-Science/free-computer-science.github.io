
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Free Computer Science. All rights reserved.</p>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contribute">Contribute</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
