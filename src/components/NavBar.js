import { Outlet, Link } from 'react-router-dom';
import { ImTwitter, ImFacebook, ImVimeo } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';
import { BiSpa } from 'react-icons/bi';

import styles from '../styles/NavBar.module.css';

// import { ImUser } from 'react-icons/im';

function NavBar() {
  return (
    <div>
      <header className={`${styles.menuContainer}`}>
        <div><BiSpa /></div>
        <nav>
          <ul className={`${styles.pagenav}`}>
            <li><Link to="/">SERVICES</Link></li>
            <li><Link to="/reserve">RESERVE</Link></li>
            <li><Link to="/myreservations">MY RESERVATIONS</Link></li>
            <li><Link to="/add-treatment">ADD SERVICE</Link></li>
            <li><Link to="/delete">DELETE SERVICE</Link></li>
          </ul>
        </nav>
        <div className={`${styles.footer}`}>
          <ul className={`${styles.socials}`}>
            <li><ImTwitter /></li>
            <li><ImFacebook /></li>
            <li><TfiGoogle /></li>
            <li><ImVimeo /></li>
            <li><FaPinterestP /></li>
          </ul>
          <p>&#169; 2023 Harriet, Jedda, Hamza &amp; Roland </p>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;
