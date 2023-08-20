import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Forms.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    const user = {
      user: {
        username, password,
      },
    };

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('isAuthenticated', 'true');
      }
      // toast.success('Registered successfully');
      navigate('/');
    }).catch(() => {
      // toast.error(`Failed :${err.message}`);
    });
  };

  return (
    <div className={`${styles.formContainer}`}>
      <form className="col-sm-6" onSubmit={proceedLogin}>
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
          name="password"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <button type="submit" className="btn btn-outline-secondary">login</button>
      </form>
      <Link to="/register"><p>Don&apos;t have an account? Sign up</p></Link>
    </div>
  );
}

export default Login;
