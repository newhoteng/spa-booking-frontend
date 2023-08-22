import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUserReservations } from '../redux/reservations/reservationsSlice';
// import styles from '../styles/Forms.module.css';

function DeleteService() {
  const { services } = useSelector((store) => store.services);
  
  // const dispatch = useDispatch();
  console.log(services);

  // const isAuthenticated = localStorage.getItem('isAuthenticated');

  // useEffect(() => {
  //   if (!services.length) {
  //     dispatch(getUserReservations());
  //   }
  // }, [dispatch, userReservations]);

  // useEffect(() => {
  //   if (!userReservations.length) {
  //     dispatch(getUserReservations());
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getUserReservations());
  //   }
  // }, [dispatch, userReservations]);

  if (isLoading) {
    return (
      <ul className={`${styles.userReservations}`}>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul className={`${styles.userReservations}`}>
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

export default DeleteService;
