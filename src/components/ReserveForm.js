import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import { postReservation, addReservation } from '../redux/reservations/reservationsSlice';
import styles from '../styles/Forms.module.css';

function ReserveForm() {
  // const { services, isLoading, error } = useSelector((store) => store.services);
  const services = [{ id: 4, name: 'Pedicure' }, { id: 5, name: 'Manicure' }];
  const cities = ['Accra', 'Kumasi', 'Abuja', 'London'];

  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    user_id: JSON.parse(localStorage.getItem('user')).id,
    spa_service_id: services[0].id,
    date: '',
    city: cities[0],
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
      spa_service_id: services[0].id,
      date: '',
      city: cities[0],
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
          <select value={payload.spa_service_id} name="spa_service_id" className={`${styles.selectBox}`} onChange={handleChange} required>
            {/* <option disabled value="default">Service...</option> */}
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
          <select value={payload.city} name="city" className={`${styles.selectBox}`} onChange={handleChange} required>
            {/* <option disabled value="default">Location...</option> */}
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
