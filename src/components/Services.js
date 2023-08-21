// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';

const Services = ({ name, image, description }) => (
  <div>
    <li className="services">
      <div className="image">
        <img src={`${image}`} alt="service" />
      </div>
      <h2 className="header-font">{name}</h2>
      <p className="p-font">
        {description.substring(0, 20)}
        ...
      </p>
    </li>
    <div className="icons">
      <CiFacebook />
      <CiTwitter />
      <CiInstagram />
    </div>
  </div>
);
Services.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Services;
