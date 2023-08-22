import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServiceDetails, selectServiceDetails } from '../redux/serviceDetailsSlice';

const ServiceDetails = ({ match }) => {
  const dispatch = useDispatch();
  const serviceDetails = useSelector(selectServiceDetails);

  // Extract service ID from URL params
  const serviceId = match.params.id;

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
      <h2>Service Details</h2>
      <p>
        Service ID:
        {serviceId}
      </p>
      {/* Display more service details from serviceDetails.serviceDetails */}
    </div>
  );
};

export default ServiceDetails;
