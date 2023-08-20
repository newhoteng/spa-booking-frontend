import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordCon] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // State to track successful registration

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
    })
      .then(() => {
        setIsSuccess(true); // Set isSuccess to true on successful registration
        setTimeout(() => navigate('/'), 1500); // Redirect after 1.500 seconds
      })
      .catch(() => {
        // Handle registration failure here
      });
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="email"
          type="text"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="author"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          name="password_confirmation"
          type="password"
          required
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordCon(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/"><p>Back</p></Link>

      {isSuccess && (
        <div className="success-message">
          Account successfully created!✅ You will be redirected to the  Log in page.
        </div>
      )}
    </div>
  );
}

export default Register;
