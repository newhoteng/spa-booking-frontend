import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addService } from '../redux/serviceSlice';
import styles from '../styles/AddService.module.css';

const AddService = () => {
  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Define state variables for form inputs and submission status
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch the 'addService' action with service details
    const response = await dispatch(
      addService({
        name,
        image,
        description,
        duration,
        price,
      }),
    );
    // If the action was successful, set the submission status to true
    if (response.type === 'services/addService/fulfilled') {
      setIsSubmitted(true);
    }
     // Clear form fields after submission
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
              <input
                type="text"
                className={styles.placeholder}
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Add Image URL"
              />
              <input
                type="textarea"
                id="description"
                className={`${styles.placeholder_desc} ${styles.placeholder}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Service Description"
                required
              />
              <input
                type="number"
                className={styles.placeholder}
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Service Duration in Minutes"
                required
              />
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
