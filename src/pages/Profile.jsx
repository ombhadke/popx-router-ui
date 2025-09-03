
const Profile = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      padding: '20px',
      color: '#333',
      width: '100%',
      maxWidth: '414px',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '20px',
        position: 'relative'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          margin: '0 0 20px 0',
          color: '#333',
          textAlign: 'left'
        }}>
          Account Settings
        </h1>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          marginTop: '10px'
        }}>
          <div style={{
            position: 'relative',
            marginRight: '15px'
          }}>
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile" 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #e0e0e0'
              }}
              onError={(e) => e.target.src = "https://via.placeholder.com/60/cccccc/ffffff?text=U"} 
            />
           {/* Camera icon badge */}
<div style={{
  position: 'absolute',
  bottom: '0',
  right: '0',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#1976D2', // blue
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid white',
  cursor: 'pointer'
}}>
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="12" height="12" 
       viewBox="0 0 24 24" 
       fill="white">
    {/* Camera body */}
    <path d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 
             7-3.14 7-7-3.14-7-7-7zm0-2c4.97 0 
             9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 
             4.03-9 9-9zm-1 4h2l.83 2h2.17c.55 0 
             1 .45 1 1v6c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V10c0-.55.45-1 
             1-1h2.17L11 7z"/>
    {/* Camera lens */}
    <circle cx="12" cy="12" r="2" fill="#1976D2" stroke="white" strokeWidth="1" />
  </svg>
</div>

          </div>
          
          <div>
            <h2 style={{
              fontSize: '18px',
              margin: '0 0 5px 0',
              fontWeight: '600'
            }}>
              Marry Doe
            </h2>
            <p style={{
              margin: '0',
              color: '#666',
              fontSize: '14px'
            }}>
              Marry@Gmail.Com
            </p>
          </div>
        </div>
        
        <div style={{
          lineHeight: '1.6',
          fontSize: '14px',
          color: '#555',
          textAlign: 'left',
          marginBottom: '20px'
        }}>
          <p>
            Lorem ipsum Dolor Sit Amet, Consectetur Sadsipicing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
        <div style={{
          flex: '1',
          minHeight: '0'
        }}></div>
      </div>
    </div>
  );
};

export default Profile;
