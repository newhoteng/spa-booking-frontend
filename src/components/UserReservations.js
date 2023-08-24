import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserReservations } from '../redux/reservations/reservationsSlice';
import { fetchAllServices } from '../redux/serviceSlice';
import styles from '../styles/Forms.module.css';

function UserReservations() {
  const { userReservations, isLoading, error } = useSelector((store) => store.userReservations);
  const { services } = useSelector((store) => store.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllServices());
    dispatch(getUserReservations());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ul className={`${styles.reserveForm}`}>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul className={`${styles.reserveForm}`}>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <div className={`${styles.reserveForm} ${styles.flexColumn}`}>
      {!isLoading && userReservations.length === 0 && (
        <p><i>You have no reservations.</i></p>
      )}
      {userReservations.length !== 0 && (
        <p>
          <i>
            You have
            {' '}
            {userReservations.length}
            {' '}
            reservation(s)
          </i>
        </p>
      )}
      {userReservations.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {userReservations?.map((reservation) => (
              <tr key={reservation.id}>
                <td>
                  {services.find((service) => service.id === reservation.spa_service_id)?.name}
                </td>
                <td>{reservation.date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserReservations;
