import React from 'react';
import { motion } from 'framer-motion';
import './FloatingCard.scss';

interface FloatingCardProps {
  children: React.ReactNode;
  delay: number;
  className?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, delay, className = '' }) => {
  return (
    <motion.div
      className={`floating-card ${className}`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard; 