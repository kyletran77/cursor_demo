import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingCard from '../components/ui/FloatingCard';
import { homePageSolutions, featuredProducts } from '../data/staticData';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <motion.div 
                className="hero-content fade-in-up"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Powering Enterprise Innovation</h1>
                <p className="hero-subtitle">
                  Leading provider of enterprise software solutions for mainframe, distributed, 
                  and cloud infrastructure environments.
                </p>
                <div className="hero-buttons">
                  <Link to="/solutions" className="btn btn-primary">Explore Solutions</Link>
                  <a href="#" className="btn btn-secondary">Watch Demo</a>
                </div>
              </motion.div>
            </div>
            <div className="col-6">
              <div className="hero-image">
                <div className="hero-graphic">
                  <FloatingCard delay={0} className="card-1">
                    <h4>Enterprise Software</h4>
                    <p>CA Technologies</p>
                  </FloatingCard>
                  <FloatingCard delay={1} className="card-2">
                    <h4>VMware Solutions</h4>
                    <p>Cloud Infrastructure</p>
                  </FloatingCard>
                  <FloatingCard delay={2} className="card-3">
                    <h4>Security Solutions</h4>
                    <p>Symantec Protection</p>
                  </FloatingCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats py-5">
        <div className="container">
          <div className="row">
            <div className="col-3 text-center">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="stat-number">$8.9B</h2>
                <p>Annual Revenue</p>
              </motion.div>
            </div>
            <div className="col-3 text-center">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="stat-number">20,000+</h2>
                <p>Global Employees</p>
              </motion.div>
            </div>
            <div className="col-3 text-center">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="stat-number">220+</h2>
                <p>Countries Served</p>
              </motion.div>
            </div>
            <div className="col-3 text-center">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="stat-number">95%</h2>
                <p>Fortune 100 Trust Us</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="solutions-preview py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Enterprise Solutions
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive software solutions to accelerate digital transformation
            </motion.p>
          </div>
          <div className="row">
            {homePageSolutions.map((solution, index) => (
              <div key={solution.title} className="col-4">
                <motion.div 
                  className="solution-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="solution-icon">
                    <div className="icon-circle" style={{ backgroundColor: solution.color }}>
                      {solution.icon}
                    </div>
                  </div>
                  <h4>{solution.title}</h4>
                  <p>{solution.description}</p>
                  <a href="#" className="learn-more">Learn More →</a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Products
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Industry-leading software products trusted by enterprises worldwide
            </motion.p>
          </div>
          <div className="row">
            {featuredProducts.map((product, index) => (
              <div key={product.name} className="col-6">
                <motion.div 
                  className="product-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="product-header">
                    <h4>{product.name}</h4>
                    <span className="product-category" style={{ backgroundColor: product.categoryColor }}>
                      {product.category}
                    </span>
                  </div>
                  <p>{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature) => (
                      <span key={feature} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-5">
        <div className="container">
          <motion.div 
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Enterprise?</h2>
            <p>Join thousands of organizations that trust Broadcom for their critical infrastructure needs.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Get Started</a>
              <a href="#" className="btn btn-outline">Contact Sales</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 