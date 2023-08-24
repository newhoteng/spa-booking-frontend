import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServiceDetails, selectServiceDetails } from '../redux/serviceDetailsSlice';
import styles from '../styles/details.module.css';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const serviceDetails = useSelector(selectServiceDetails);
  const { id: serviceId } = useParams();

  React.useEffect(() => {
    dispatch(fetchServiceDetails(serviceId));
  }, [dispatch, serviceId]);

  if (serviceDetails.isLoading) {
    return <div>Loading...</div>;
  }

  if (serviceDetails.isError) {
    return <div>Error loading service details</div>;
  }

  // Find the selected service based on serviceId
  const selectedService = serviceDetails.find((service) => service.id === Number(serviceId));

  return (
    <div className={styles.contianer}>
      {selectedService && (
        <div className={styles.hero}>
          <img src={selectedService.image} alt={selectedService.name} />
          <div className={styles.detailsText}>
            <h2>{selectedService.name}</h2>
            <p>
              Description:
              {selectedService.description}
            </p>
            <p>
              Price: $
              {selectedService.price}
            </p>
          </div>
        </div>
      )}
      <button type="submit">Reserve</button>
    </div>
  );
};

ServiceDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ServiceDetails;
