import { Link } from 'react-router-dom';

// src/components/NavBar.jsx

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to ="/">Home</Link>
        </li>
        <li>
            <Link to='/pokemon'>Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
