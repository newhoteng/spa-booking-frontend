import PropTypes from 'prop-types';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import facials from '../styles/facials.jpg';

const Services = ({ name, to, description }) => (
  <div>
    <Link to={to} className="services">
      <li className="services">
        <div className="image">
          <img src={`${facials}`} alt="service" className="image" />
        </div>
        <h2 className="header-font">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <p className="p-font">
          {description.substring(0, 20)}
          ...
        </p>
      </li>
    </Link>
    <div className="icons">
      <CiFacebook />
      <CiTwitter />
      <CiInstagram />
    </div>
  </div>
);
Services.propTypes = {
  name: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Services;
