// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import styles from '../styles/Forms.module.css';

function ReserveForm() {
  return (
    <div className={`${styles.reserveForm}`}>
      <form>
        <div className={`${styles.selectContainer}`}>
          <select name="spa_service_id" className={`${styles.selectBox}`}>
            <option disabled="disabled" selected="selected">Service</option>
            <option>Services</option>
          </select>
          <BiDownArrow className={`${styles.arrowIcon}`} />
        </div>
        <input type="date" id="date" name="date" />
        <div className={`${styles.selectContainer}`}>
          <select name="city" className={`${styles.selectBox}`}>
            <option disabled="disabled" selected="selected">Location</option>
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
