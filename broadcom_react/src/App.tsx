import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Company from './pages/Company';
import './styles/globals.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
