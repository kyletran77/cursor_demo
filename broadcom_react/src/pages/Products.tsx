import React from 'react';
import { motion } from 'framer-motion';
import { productCategories, featuredProducts } from '../data/staticData';
import './Products.scss';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="hero py-5">
        <div className="container">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Products & Technologies
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Industry-leading software products that power the world's most critical enterprise environments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories py-5">
        <div className="container">
          <div className="row">
            {productCategories.map((category, index) => (
              <div key={category.name} className="col-4">
                <motion.div 
                  className="category-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="category-icon" style={{ backgroundColor: category.color }}>
                    {category.icon}
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="product-count">{category.productCount} Products</div>
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
                    <h6>Key Features:</h6>
                    <ul>
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-benefits">
                    <h6>Benefits:</h6>
                    <div className="benefit-tags">
                      {product.benefits.map((benefit) => (
                        <span key={benefit} className="benefit-tag">
                          {benefit}
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
    </div>
  );
};

export default Products; 