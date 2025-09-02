import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="container">
      <div className="content form-content">
        <h2>Signin to your PopX account</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleLogin} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-input"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
            <button 
              type="submit" 
              className={`btn-primary ${!isFormValid ? 'btn-disabled' : ''}`}
              disabled={!isFormValid}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;