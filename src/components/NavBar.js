import { Outlet, Link } from 'react-router-dom';
// import { ImUser } from 'react-icons/im';
// import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <>
      <nav>
        <div>LOGO</div>
        <ul>
          <li><Link to="/">TREATMENTS</Link></li>
          <li><Link to="/reserve">RESERVE</Link></li>
          <li><Link to="/myreservations">MY RESERVATIONS</Link></li>
          <li><Link to="/new">ADD TREATMENT</Link></li>
          <li><Link to="/delete">DELETE TREATMENT</Link></li>
        </ul>
        <ul>
          <li>TW</li>
          <li>FB</li>
          <li>GO</li>
          <li>VM</li>
          <li>PI</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
