// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllServices } from '../redux/serviceSlice';
import Services from './Services';

const HomePage = () => {
  const { services, isLoading, isError } = useSelector((store) => store.services);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => { dispatch(fetchAllServices()); }, 5000);
  }, [dispatch]);

  return (
    <main className="home">
      <h1>Spa Services</h1>
      {!isLoading && services.length === 0 && (
        <p className="home-font">
          No available service. Please add a service to view.
        </p>
      )}
      {isError && <h1>Something went wrong please reload the page...</h1>}
      {isLoading ? <h1>Loading...</h1>
        : (
          <div>
            <p className="home-font">Please select a service or two!</p>
            <ul className="service-ul">
              {services.map((service) => (
                <Services
                  key={service.id}
                  to={service}
                  name={service.name}
                  image={service.image}
                  description={service.description}
                />
              ))}
            </ul>
          </div>

        )}
    </main>
  );
};

export default HomePage;
