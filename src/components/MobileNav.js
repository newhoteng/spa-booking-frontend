import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import { ImTwitter, ImFacebook, ImVimeo } from 'react-icons/im';
// import { TfiGoogle } from 'react-icons/tfi';
// import { FaPinterestP } from 'react-icons/fa';
import { BiSpa } from 'react-icons/bi';
// import styles from '../styles/MobileNav.module.css';
import '../styles/MobileNav.css';

const MobileNav = () => {
  // to change burger classes
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNavClick = () => {
    setMenuClass('menu hidden');
    setBurgerClass('burgerBar unclicked');
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burgerBar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burgerBar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = '/login';
  };

  return (
    <div className="mobile">
      <nav>
        <div><BiSpa className="logo" /></div>
        <div className="burger-menu" onClick={updateMenu} role="presentation">
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>

      <div className={menuClass}>
        <ul className="">
          <li><NavLink onClick={handleNavClick} to="/" end>SERVICES</NavLink></li>
          <li><NavLink onClick={handleNavClick} to="/reserve">RESERVE</NavLink></li>
          <li><NavLink onClick={handleNavClick} to="/myreservations">MY RESERVATIONS</NavLink></li>
          <li><NavLink onClick={handleNavClick} to="/add_service">ADD SERVICE</NavLink></li>
          <li><NavLink onClick={handleNavClick} to="/delete">DELETE SERVICE</NavLink></li>
          <button className="btn btn-outline-secondary" type="button" onClick={handleLogout}>Logout</button>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MobileNav;
