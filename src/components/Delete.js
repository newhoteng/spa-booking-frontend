import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllServices, removeService, toggleService } from '../redux/serviceSlice';
import styles from '../styles/Forms.module.css';

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
      <ul className={`${styles.reserveForm}`}>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (isError) {
    return (
      <ul className={`${styles.reserveForm}`}>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <div className={`${styles.reserveForm}`}>
      <table>
        <tbody>
          {services?.map((service) => (
            <tr key={service.id}>
              <td>
                {service.is_removed && <div className={`${styles.removed}`}>Removed</div>}
                {' '}
                {service.name.toUpperCase()}
              </td>
              <td>
                <button
                  type="button"
                  className={service.is_removed ? 'btn btn-success' : 'btn btn-danger'}
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
