import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordCon] = useState('');

  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        username, email, password, passwordConfirmation,
      },
    };
    // console.log(newUser);
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then(() => {
      // toast.success('Registered successfullu');
      navigate('/');
    }).catch(() => {
      // toast.error(`Failed :${err.message}`);
    });
  };

  // export default async (user, score) => {
  //   const response = await fetch(`${apiBaseUrl}games/${gameId}/scores/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //     body: JSON.stringify({
  //       'user': user,
  //       'score': score,
  //     }),
  //   });

  //   const message = await response.json();
  //   alert(`${message.result}`);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newBook = { item_id: uuidv4(), ...payload };
  //   dispatch(addBook(newBook));
  //   dispatch(postBook(newBook));
  //   setPayload({
  //     ...payload,
  //     title: '',
  //     author: '',
  //   });
  // };

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
    </div>
  );
}

export default Register;
