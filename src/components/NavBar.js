import { Outlet, NavLink } from 'react-router-dom';
import { ImTwitter, ImFacebook, ImVimeo } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';
import { BiSpa } from 'react-icons/bi';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? '#98bf0d' : '#fff',
    color: isActive ? '#fff' : 'inherit',
  });

  return (
    <div>
      <header className={`${styles.flexColumn}`}>
        <div><BiSpa className={`${styles.logo}`} /></div>
        <nav>
          <ul className={`${styles.pagenav}`}>
            <li><NavLink style={navLinkStyles} to="/">SERVICES</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/reserve">RESERVE</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/myreservations">MY RESERVATIONS</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/add-treatment">ADD SERVICE</NavLink></li>
            <li><NavLink style={navLinkStyles} to="/delete">DELETE SERVICE</NavLink></li>
          </ul>
        </nav>
        <div className={`${styles.footer} ${styles.flexColumn}`}>
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
