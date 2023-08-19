// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Services from './Services';

const HomePage = ({ services }) => (
  <main className="home">
    <div>
      <h1>Spa Services</h1>
      <p className="home-font">Please select a service or two!</p>
      {services.length === 0 && <p className="home-font">No available service. Please add a service to view.</p>}
      <ul className="focus:underline w-full px-1 my-4">
        {services.map((service) => (
          <Services key={service.id} service={service} />
        ))}
      </ul>
    </div>
  </main>
);

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  services: PropTypes.array.isRequired,
  // setServices: PropTypes.string.isRequired,
};
export default HomePage;
