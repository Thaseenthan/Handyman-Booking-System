import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#431261',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e7e7e7',
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    flex: 1,
    margin: '10px',
  };

  const headingStyle = {
    marginBottom: '10px',
  };

  const textStyle = {
    margin: '5px 0',
  };

  const socialLinksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const socialLinkStyle = {
    margin: '0 10px',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  const footerBottomStyle = {
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={textStyle}>Email: contact@handymanbooking.com</p>
          <p style={textStyle}>Phone: +94-757890234</p>
          <p style={textStyle}>Address: Hapugala, Galle, Sri Lanka</p>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialLinksContainerStyle}>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <img src="https://th.bing.com/th/id/R.39550c155a7c7a519f31887edbb7d32c?rik=qvE8E9MyKGlnHw&pid=ImgRaw&r=0" alt="YouTube" style={iconStyle} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <img src="https://th.bing.com/th/id/R.70ecfdd862bdc3fdbf5715085812f49e?rik=fDJPk4oWTEisvw&pid=ImgRaw&r=0" alt="Facebook" style={iconStyle} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <img src="https://th.bing.com/th/id/OIP.yLZjN1KcU2UAnD8-h9F3PAHaHa?rs=1&pid=ImgDetMain" alt="Instagram" style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p style={textStyle}>&copy; {new Date().getFullYear()} Handyman Booking System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;