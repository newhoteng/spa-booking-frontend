import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    }).then(() => {
      localStorage.clear();
      localStorage.setItem('isAuthenticated', 'true');
      // localStorage.setItem('user-token', res.headers.get('Authorization'));
      // res.headers.forEach(console.log);
      // console.log(res.headers);
      // setTimeout(() => {
      //   navigate('/services');
      // }, 500);
      // toast.success('Registered successfullu');
      navigate('/services');
    }).catch(() => {
      // toast.error(`Failed :${err.message}`);
    });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={proceedLogin}>
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">log in</button>
      </form>
      <Link to="/register"><p>Don&apos;t have an account? Sign up</p></Link>
    </div>
  );
}

export default Login;
