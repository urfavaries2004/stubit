import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/studyspace">study space</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;