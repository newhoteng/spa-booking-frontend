import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServiceDetails, selectServiceDetails } from '../redux/serviceDetailsSlice';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const serviceDetails = useSelector(selectServiceDetails);
  // Extract service ID from URL params
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

  return (
    <div>
      <h1>Service Details</h1>
      <p>
        Service ID:
        {serviceId}
      </p>
      {/* Display more service details from serviceDetails.serviceDetails */}
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
