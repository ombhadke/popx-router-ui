import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    // Check if both email and password have values
    setIsFormFilled(
      formData.email.trim() !== "" && formData.password.trim() !== ""
    );
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="login-header">
          <h1>Signin to your 
            <br/>
            PopX account</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
          <br/>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className={`btn-primary ${!isFormFilled ? "btn-inactive" : ""}`}
            disabled={!isFormFilled}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;