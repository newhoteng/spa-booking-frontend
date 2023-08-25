import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { IoIosArrowDropright } from 'react-icons/io';
import { BiLeftArrow } from 'react-icons/bi';
import { fetchServiceDetails, selectServiceDetails } from '../redux/serviceDetailsSlice';
import styles from '../styles/details.module.css';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  // <FaArrowLeftLong className={`${styles.backArrow}`} onClick={() => navigate(-1)} />
  return (
    <div className={styles.container}>
      {selectedService && (
        <div className={styles.innerCont}>
          <div className={styles.backArrow} onClick={() => navigate('/')} role="presentation">
            <BiLeftArrow />
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.image} src={selectedService.image} alt={selectedService.name} />
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.text}>
              <h2>{selectedService.name.toUpperCase()}</h2>
              <p className={styles.discount}>- 25% off your first booking</p>
              <p className={styles.rows}>
                <span>Price</span>
                <span>
                  $
                  {selectedService.price}
                </span>
              </p>
              <p className={styles.rows}>
                <span>Duration</span>
                30 min
              </p>
            </div>
            <Link to="/reserve" state={{ spa_service_id: serviceId }}>
              <div className={styles.reserveBtn}>
                <FaRegCalendarCheck className={`${styles.logo}`} />
                <button type="button">Reserve</button>
                <IoIosArrowDropright className={`${styles.logo}`} />
              </div>
            </Link>
          </div>
        </div>
      )}
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
