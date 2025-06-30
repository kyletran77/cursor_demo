import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5>Products</h5>
            <ul className="footer-links">
              <li><a href="#">Enterprise Software</a></li>
              <li><a href="#">Mainframe Software</a></li>
              <li><a href="#">Security Solutions</a></li>
              <li><a href="#">VMware Solutions</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h5>Solutions</h5>
            <ul className="footer-links">
              <li><a href="#">Cloud Infrastructure</a></li>
              <li><a href="#">DevOps & Security</a></li>
              <li><a href="#">Automation</a></li>
              <li><a href="#">Networking</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Broadcom Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 