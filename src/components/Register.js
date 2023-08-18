// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

function Register() {
  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
        />
        <input
          name="email"
          type="text"
          required
          placeholder="Email"
        />
        <input
          name="author"
          type="password"
          required
          placeholder="Password"
        />
        <input
          name="password_confirmation"
          type="password"
          required
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
