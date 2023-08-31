import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import { BsCalendar } from 'react-icons/bs';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { postReservation } from '../redux/reservations/reservationsSlice';
import { fetchAllServices } from '../redux/serviceSlice';
import styles from '../styles/Forms.module.css';

function ReserveForm() {
  const cities = ['Accra', 'Kumasi', 'Abuja', 'London'];

  const { services } = useSelector((store) => store.services);

  const userId = JSON.parse(localStorage.getItem('user')).id;
  const location = useLocation();

  const spaServiceId = location.state?.spa_service_id;

  const [payload, setPayload] = useState({
    user_id: userId,
    spa_service_id: spaServiceId,
    date: '',
    city: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchAllServices());
    }
  }, [dispatch, services]);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationData = payload;
    const response = await dispatch(postReservation(reservationData));

    if (response.type === 'reservations/postReservation/fulfilled') {
      setIsSubmitted(true);
    }
    setPayload({
      ...payload,
      spa_service_id: '',
      date: '',
      city: '',
    });
  };

  const handleContinueAdding = () => {
    setIsSubmitted(false);
  };

  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  return (
    <div className={`${styles.reserveForm} ${styles.flexColumn} ${styles.reserveFormOnly}`}>
      {isSubmitted ? (
        <div id={styles['success-message']}>
          <p>Your reservation has been added successfully!</p>
          <div className={styles['success-actions']}>
            <button type="button" onClick={handleContinueAdding}>
              Reserve Another
            </button>
            <Link to="/myreservations">
              <button type="button">My Reservations</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <FaArrowLeftLong className={`${styles.backArrow}`} onClick={() => navigate(-1)} />
          <h1 className={`${styles.heading}`}>BOOK A SPA SERVICE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin non elementum nunc.
            In dapibus.
            <br />
            Maecenas ligula erat, gravida eget odio at, mattis mattis nisl.
            Mauris,
            <br />
            tempor quis quam eget, posuere.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.selectContainer}`}>
              <select
                value={payload.spa_service_id}
                name="spa_service_id"
                className={`${styles.selectBox}`}
                onChange={handleChange}
                required
              >
                <option selected value="">Service...</option>
                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.id}
                  >
                    {service.name.toUpperCase()}
                  </option>
                ))}
              </select>
              <BiDownArrow className={`${styles.arrowIcon}`} />
            </div>
            <div className={`${styles.selectContainer}`}>
              <input
                name="date"
                type="date"
                required
                min={minDate()}
                value={payload.date}
                onChange={handleChange}
              />
              <BsCalendar className={`${styles.arrowIcon} ${styles.calendarIcon}`} />
            </div>
            <div className={`${styles.selectContainer}`}>
              <select
                value={payload.city}
                name="city"
                className={`${styles.selectBox}`}
                onChange={handleChange}
                required
              >
                <option value="" selected>Location...</option>
                {cities.map((city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                  </option>
                ))}
              </select>
              <BiDownArrow className={`${styles.arrowIcon}`} />
            </div>
            <button type="submit">Book Now</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ReserveForm;
