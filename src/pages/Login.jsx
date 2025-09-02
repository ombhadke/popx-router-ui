import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login to PopX</h2>
      <input type="email" placeholder="Email address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="primary">
        Login
      </button>
    </form>
  );
}

export default Login;
