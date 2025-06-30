import React from 'react';
import { motion } from 'framer-motion';
import { solutions, benefits } from '../data/staticData';
import './Solutions.scss';

const Solutions: React.FC = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="hero py-5">
        <div className="container">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Enterprise Solutions
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive software solutions designed to accelerate digital transformation 
              and optimize enterprise operations across all infrastructure types.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid py-5">
        <div className="container">
          <div className="row">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="col-4">
                <motion.div 
                  className="solution-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="solution-header">
                    <div className="solution-icon" style={{ backgroundColor: solution.color }}>
                      {solution.icon}
                    </div>
                    <h3>{solution.title}</h3>
                  </div>
                  <p>{solution.description}</p>
                  <ul className="solution-features">
                    {solution.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="solution-products">
                    <h5>Key Products:</h5>
                    <div className="product-tags">
                      {solution.products.map((product) => (
                        <span key={product} className="product-tag">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Broadcom Solutions?
            </motion.h2>
          </div>
          <div className="row">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-6">
                <motion.div 
                  className="benefit-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions; 