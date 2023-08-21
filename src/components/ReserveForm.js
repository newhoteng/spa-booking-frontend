// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import styles from '../styles/Forms.module.css';

function ReserveForm() {
  // const user = JSON.parse(localStorage.getItem('user')).id;
  // const [payload, setPayload] = useState({
  //   user_id: JSON.parse(localStorage.getItem('user')).id,
  //   spa_service_id: '',
  //   date: '',
  //   city: '',
  // });

  return (
    <div className={`${styles.reserveForm}`}>
      <form>
        <div className={`${styles.selectContainer}`}>
          <select name="spa_service_id" className={`${styles.selectBox}`}>
            <option disabled selected>Service</option>
            <option>Option</option>
          </select>
          <BiDownArrow className={`${styles.arrowIcon}`} />
        </div>
        <input type="date" id="date" name="date" />
        <div className={`${styles.selectContainer}`}>
          <select name="city" className={`${styles.selectBox}`}>
            <option disabled selected>Location</option>
            <option value="Accra">Accra</option>
            <option value="Kumasi">Kumasi</option>
          </select>
          <BiDownArrow className={`${styles.arrowIcon}`} />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default ReserveForm;
