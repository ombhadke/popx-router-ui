import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const isFormValid = formData.fullName.trim() !== "" && 
                     formData.phoneNumber.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.password.trim() !== "";

  return (
    <div className="container">
      <div className="content form-content">
        <h2>Create your PopX account</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="form-group">
            <label className="form-label">Full Name*</label>
            <input 
              type="text" 
              name="fullName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone number*</label>
            <input 
              type="tel" 
              name="phoneNumber"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email address*</label>
            <input 
              type="email" 
              name="email"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password *</label>
            <input 
              type="password" 
              name="password"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Company name</label>
            <input 
              type="text" 
              name="companyName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="radio-group">
            <span className="radio-group-label">Are you an Agency?*</span>
            <div className="radio-options">
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="agency-yes"
                  name="isAgency" 
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="agency-yes">Yes</label>
              </div>
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="agency-no"
                  name="isAgency" 
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleInputChange}
                />
                <label htmlFor="agency-no">No</label>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <button 
              type="submit" 
              className={`btn-primary ${!isFormValid ? 'btn-disabled' : ''}`}
              disabled={!isFormValid}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;