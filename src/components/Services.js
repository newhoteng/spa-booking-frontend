// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Services = ({ service }) => (
  <div>
    <li className="services">
      <div className="image">
        <img src={`${service.image}`} alt="service" />
      </div>
      <h2 className="header-font">{service.name}</h2>
      <p className="home-font">{service.description}</p>
      <p className="home-font">{service.price}</p>
    </li>
  </div>
);
Services.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  service: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
  // setServices: PropTypes.string.isRequired,
};
export default Services;
