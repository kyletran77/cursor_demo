import React from 'react';
import { motion } from 'framer-motion';
import { leadership, businessSegments, companyValues } from '../data/staticData';
import './Company.scss';

const Company: React.FC = () => {
  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="hero py-5">
        <div className="container">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Broadcom Inc.
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A global technology leader that designs, develops and supplies semiconductor and infrastructure software solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-5">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Our Mission</h2>
                <p className="large-text">
                  To connect everything through our innovative semiconductor and infrastructure software solutions, 
                  enabling our customers to advance the world's connectivity and accelerate digital transformation.
                </p>
                <p>
                  Founded in 1961, Broadcom Inc. has grown to become one of the world's leading semiconductor companies, 
                  providing solutions that power cloud data centers, telecom infrastructure, enterprise networks, and more. 
                  Our comprehensive portfolio spans from foundational infrastructure to cutting-edge technologies.
                </p>
              </motion.div>
            </div>
            <div className="col-4">
              <motion.div 
                className="stats-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>Company Facts</h3>
                <div className="fact-item">
                  <span className="fact-number">$35.8B</span>
                  <span className="fact-label">Annual Revenue</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">20,000+</span>
                  <span className="fact-label">Employees Worldwide</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">220+</span>
                  <span className="fact-label">Countries Served</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">1961</span>
                  <span className="fact-label">Founded</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leadership Team
            </motion.h2>
          </div>
          <div className="row">
            {leadership.map((leader, index) => (
              <div key={leader.name} className="col-4">
                <motion.div 
                  className="leader-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="leader-avatar">
                    {leader.initials}
                  </div>
                  <h4>{leader.name}</h4>
                  <p className="leader-title">{leader.title}</p>
                  <p className="leader-bio">{leader.bio}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="business-segments py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Business Segments
            </motion.h2>
          </div>
          <div className="row">
            {businessSegments.map((segment, index) => (
              <div key={segment.name} className="col-6">
                <motion.div 
                  className="segment-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="segment-icon" style={{ backgroundColor: segment.color }}>
                    {segment.icon}
                  </div>
                  <h3>{segment.name}</h3>
                  <p>{segment.description}</p>
                  <ul className="segment-products">
                    {segment.products.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
          </div>
          <div className="row">
            {companyValues.map((value, index) => (
              <div key={value.title} className="col-3">
                <motion.div 
                  className="value-item text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company; 