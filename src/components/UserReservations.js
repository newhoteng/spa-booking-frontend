import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserReservations } from '../redux/reservations/reservationsSlice';
import styles from '../styles/Forms.module.css';

function UserReservations() {
  const { userReservations, isLoading, error } = useSelector((store) => store.userReservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userReservations.length) {
      dispatch(getUserReservations());
    }
  }, [dispatch, userReservations]);

  if (isLoading) {
    return (
      <ul>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <div className={`${styles.userReservations}`}>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userReservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.spa_service_id}</td>
              <td>{reservation.date}</td>
              <td>{reservation.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserReservations;
