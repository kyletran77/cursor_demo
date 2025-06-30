import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <Link to="/" className="logo">
              <span className="logo-text">Broadcom</span>
            </Link>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={isActive('/', true) ? 'active' : ''}
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions" 
                  className={isActive('/solutions') ? 'active' : ''}
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={isActive('/products') ? 'active' : ''}
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/company" 
                  className={isActive('/company') ? 'active' : ''}
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  Company
                </Link>
              </li>
              <li>
                <a href="#" className="btn btn-primary">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 