import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Forms.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordCon] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        username, email, password, passwordConfirmation,
      },
    };

    try {
      const resp = await axios.post('http://localhost:3001/signup', newUser);
      if (resp.data.status.code === 200) {
        setIsSuccess(true);
      }
      return {};
    } catch (err) {
      setErrorMessage(err.response.data.status.message);
      return {};
    }
  };

  return (
    <div className={`${styles.formContainer}`}>
      {isSuccess ? (
        <div className={styles['success-message']}>
          <p>Registered successfully!</p>
          <div className={styles['success-actions']}>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <p className={styles['err-msg']}>{errorMessage}</p>
          <form className="col-sm-6" onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              name="email"
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              name="author"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              name="password_confirmation"
              type="password"
              required
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordCon(e.target.value)}
              className="form-control"
            />
            <br />
            <button type="submit" className="btn btn-outline-secondary">Register</button>
          </form>
          <Link to="/"><p>Back</p></Link>
        </>
      )}
    </div>
  );
}

export default Register;
