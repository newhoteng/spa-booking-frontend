// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllServices } from '../redux/serviceSlice';
// import PropTypes from 'prop-types';
import Services from './Services';

const HomePage = () => {
  const { services, isLoading, isError } = useSelector((store) => store.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllServices());
  }, []);

  return (
    <main className="home">
      <h1>Spa Services</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong please reload the page...</h1>}
      <p className="home-font">Please select a service or two!</p>
      {services.length === 0 && (
        <p className="home-font">
          No available service. Please add a service to view.
        </p>
      )}
      <ul className="service-ul">
        {services.map((service) => (
          <Services
            key={service.id}
            name={service.name}
            image={service.image}
            description={service.description}
          />
        ))}
      </ul>
    </main>
  );
};

// HomePage.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   services: PropTypes.array.isRequired,
//   // setServices: PropTypes.string.isRequired,
// };
export default HomePage;
