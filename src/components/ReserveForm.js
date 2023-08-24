import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import { postReservation, addReservation } from '../redux/reservations/reservationsSlice';
import { fetchAllServices } from '../redux/serviceSlice';
import styles from '../styles/Forms.module.css';

function ReserveForm() {
  const cities = ['Accra', 'Kumasi', 'Abuja', 'London'];

  const { services } = useSelector((store) => store.services);
  const dispatch = useDispatch();
  const location = useLocation();

  const spaServiceId = location.state?.spa_service_id;

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchAllServices());
    }
  }, [dispatch, services]);

  const userId = JSON.parse(localStorage.getItem('user')).id;

  const [payload, setPayload] = useState({
    user_id: userId,
    spa_service_id: spaServiceId,
    date: '',
    city: '',
  });

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = payload;
    dispatch(addReservation(newReservation));
    dispatch(postReservation(newReservation));
    setPayload({
      ...payload,
      spa_service_id: '',
      date: '',
      city: '',
    });
    navigate('/myreservations');
  };

  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  return (
    <div className={`${styles.reserveForm}`}>
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
                {service.name}
              </option>
            ))}
          </select>
          <BiDownArrow className={`${styles.arrowIcon}`} />
        </div>
        <input
          name="date"
          type="date"
          required
          min={minDate()}
          value={payload.date}
          onChange={handleChange}
        />
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
    </div>
  );
}

export default ReserveForm;
