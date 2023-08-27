import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addService } from '../redux/serviceSlice';
import styles from '../styles/AddService.module.css';

const AddService = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      addService({
        name,
        image,
        description,
        duration,
        price,
      }),
    );
    if (response.type === 'services/addService/fulfilled') {
      setIsSubmitted(true);
    }
    setName('');
    setImage('');
    setDescription('');
    setDuration('');
    setPrice('');
  };

  const handleContinueAdding = () => {
    setIsSubmitted(false);
  };

  return (
    <div className={styles['add-service-container']}>
      {isSubmitted ? (
        <div className={styles['success-message']}>
          <p>Your service has been added successfully!</p>
          <div className={styles['success-actions']}>
            <button type="button" onClick={handleContinueAdding}>
              Continue Adding
            </button>
            <Link to="/">
              <button type="button">Go to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className={styles.header}>ADD SERVICE</h2>
          <form onSubmit={handleSubmit} className={styles['add-service-form']}>
            <div className={styles['add-service-form-group']}>
              <input
                type="text"
                className={styles.placeholder}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Service Name"
                required
              />
            </div>
            <div className={styles['add-service-form-group']}>
              <input
                type="text"
                className={styles.placeholder}
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Add Image URL"
              />
            </div>
            <div className={styles['add-service-form-group']}>
              <input
                type="textarea"
                id="description"
                className={`${styles.placeholder_desc} ${styles.placeholder}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Service Description"
                required
              />
            </div>
            <div className={styles['add-service-form-group']}>
              <input
                type="number"
                className={styles.placeholder}
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Service Duration in Minutes"
                required
              />
            </div>
            <div className={styles['add-service-form-group']}>
              <input
                type="number"
                className={styles.placeholder}
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Service Price"
                required
              />
            </div>
            <button type="submit" className={styles.add_services}>Add Service</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddService;
