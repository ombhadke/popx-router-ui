function Profile() {
  return (
    <div className="container">
      <div className="content profile-content">
        <h3 className="profile-header">Account Settings</h3>
        
        <div className="profile-card">
          <div className="avatar-container">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="avatar"
            />
            <div className="status-indicator"></div>
          </div>
          
          <div className="profile-info">
            <h4 className="profile-name">Marry Doe</h4>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet. Consectetuer Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;