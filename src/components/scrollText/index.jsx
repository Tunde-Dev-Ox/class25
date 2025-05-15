import React from 'react';
import './index.scss';
import { motion } from 'framer-motion';

const ScrollText = ({ text}) => {
  return (
    <div className="scroll-text">
       <motion.div
        className="scroll-text__content"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear', delay: 0 }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default ScrollText;