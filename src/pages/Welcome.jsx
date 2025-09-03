import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <div className="button-container">
          <button className="btn-primary" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;