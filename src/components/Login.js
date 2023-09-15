import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Forms.module.css';

function Login() {
  const [payload, setPayload] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const proceedLogin = async (e) => {
    e.preventDefault();
    const user = {
      user: payload,
    };

    try {
      const resp = await axios.post('http://localhost:3001/login', user);
      if (resp.data.status.code === 200) {
        localStorage.setItem('isAuthenticated', 'true');
        const loggedInUser = JSON.stringify(resp.data.status.data.user);
        localStorage.setItem('user', loggedInUser);
        navigate('/');
      }
      return {};
    } catch (err) {
      setErrorMessage(err.response.data);
      return {};
    }
  };

  return (
    <div className={`${styles.formContainer}`}>
      <p className={styles['err-msg']}>{errorMessage}</p>
      <form className="col-sm-6" onSubmit={proceedLogin}>
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          value={payload.username}
          onChange={handleChange}
          className="form-control"
        />
        <br />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={payload.password}
          onChange={handleChange}
          className="form-control"
        />
        <br />
        <button type="submit" className="btn btn-secondary">Log In</button>
      </form>
      <Link to="/register"><p>Don&apos;t have an account? Sign up</p></Link>
    </div>
  );
}

export default Login;
