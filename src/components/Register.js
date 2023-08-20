import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Forms.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordCon] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        username, email, password, passwordConfirmation,
      },
    };

    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.status === 200) {
        navigate('/login');
      }
      // toast.success('Registered successfully');
    }).catch(() => {
      // toast.error(`Failed :${err.message}`);
    });
  };

  return (
    <div className={`${styles.formContainer}`}>
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <Link to="/"><p>Back</p></Link>
    </div>
  );
}

export default Register;
