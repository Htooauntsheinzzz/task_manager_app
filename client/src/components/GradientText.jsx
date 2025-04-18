import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ children, colors, animationSpeed = 4, className = '' }) => {
  const gradientId = React.useId();

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        backgroundPosition: ['0%', '100%'],
      }}
      transition={{
        duration: animationSpeed,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(',')})`,
        backgroundSize: '200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </motion.div>
  );
};

export default GradientText;
