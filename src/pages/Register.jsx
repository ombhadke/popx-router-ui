import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Phone number" required />
      <input type="email" placeholder="Email address" required />
      <input type="password" placeholder="Password" required />
      <input type="text" placeholder="Company name" />
      <div className="radio-group">
  <label>Are you an Agency? </label>
  <label>
    <input type="radio" name="agency" value="yes" required /> Yes
  </label>
  <label>
    <input type="radio" name="agency" value="no" /> No
  </label>
</div>

      <button type="submit" className="primary">
        Create Account
      </button>
    </form>
  );
}

export default Register;
