// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Services = ({ service }) => (
  <div>
    <li className="focus:underline w-full px-1 my-4">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>{service.price}</p>
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
