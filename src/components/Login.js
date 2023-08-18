function Login() {
  return (
    <div>
      <hi>Login Form</hi>
      <form>
        <input
          name="title"
          type="text"
          required
          placeholder="Username"
        />
        <input
          name="author"
          type="password"
          required
          placeholder="Password"
        />
        <button type="submit">log in</button>
      </form>
    </div>
  );
}

export default Login;
