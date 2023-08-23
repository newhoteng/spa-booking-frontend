import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllServices, removeService, toggleService } from '../redux/serviceSlice';
import styles from '../styles/Forms.module.css';

// , toggleService

function DeleteService() {
  const { services, isLoading, isError } = useSelector((store) => store.services);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchAllServices());
    }
  }, [dispatch, services]);

  if (isLoading) {
    return (
      <ul className={`${styles.userReservations}`}>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (isError) {
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
            {/* <th>Button</th> */}
          </tr>
        </thead>
        <tbody>
          {services?.map((service) => (
            <tr key={service.id}>
              <td>
                {service.is_removed && <span className={`${styles.removed}`}>Removed</span>}
                {' '}
                {service.name}
              </td>
              <td>
                <button
                  type="button"
                  className={service.is_removed ? styles.add : 'btn btn-danger'}
                  onClick={
                    () => {
                      dispatch(removeService(service.id));
                      dispatch(toggleService(service.id));
                    }
                  }
                >
                  {service.is_removed ? 'Add' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteService;
